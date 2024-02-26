import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import { ImageBackground } from 'react-native';


export default function App() {
  //sintaxe const(variavel, funçao que atribui valor na variavel)
  const[nome, setNome] = useState<string>('');
  const [sexo, setSexo] = useState('');
  const[peso,setPeso] = useState<number>(0);
  const[altura,setAltura] = useState<number>(0);
  const[resultado, setResultado] =useState<number>(0);

  function calcularIMC(){
    // Convertendo a altura de cm para metros
    const alturaMetros = altura / 100;
    
    // Calculando o IMC
    const imc = peso / (alturaMetros * alturaMetros);
    
    // Atualizando o estado com o novo valor de IMC
    setResultado(imc);
    
    if(imc < 18.5){
        // Exibindo o resultado
        alert('Resultado: ' + imc.toFixed(2) + '. Você está abaixo do peso!'); // Arredondando para duas casas decimais
    }
    
    else if (imc > 24.9) {
      // Exibindo o resultado
      alert('Resultado: ' + imc.toFixed(2) + '. Você está acima do peso!'); // Arredondando para duas casas decimais
    }
    else if(imc > 18.5 && imc < 24.9){
    alert('Resultado: ' + imc.toFixed(2) + '. Você está no peso ideal!'); // Arredondando para duas casas decimais
    }
    else{
      alert('Preencha todos os campos para o resultado!');
    }
  }
  //criar uma validação para preencher os dois campos
  
  return (
    <ImageBackground
    source={require('./images/fotofundo.png')} // substitua pelo caminho correto da sua imagem
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
       
    {/* Título da página */}
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>IMC</Text>
    </View>

      <Text style={styles.textos}>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        placeholder='_______________'
        onChangeText={(txtNome) => setNome(txtNome)}
      />

       <Text style={styles.textos}>Selecione seu sexo:</Text>

       <View style={styles.radioButtonContainer}>
        <TouchableOpacity
          style={[styles.radioButton, sexo === 'Masculino' && styles.radioButtonSelected]}
          onPress={() => setSexo('Masculino')}
        />
        <Text style={styles.sexo}>Masculino</Text>
        
        <TouchableOpacity
          style={[styles.radioButton, sexo === 'Feminino' && styles.radioButtonSelected]}
          onPress={() => setSexo('Feminino')}
        />
        <Text style={styles.sexo}>Feminino</Text>
      </View>


      {/* Verifica se o nome e o sexo foram inseridos antes de exibir */}
      {nome && sexo && (
        <>
        <Text style={styles.textos}>Seja bem-vind{sexo === 'Masculino' ? 'o' : 'a'}, {nome}!</Text>

      
          <Text style={styles.informacoes}>Informe seu peso:</Text>
          <TextInput style={styles.input}
            placeholder='Ex: 53 kg'
            onChangeText={(txtPeso) => setPeso(parseInt(txtPeso))}
            keyboardType='numeric'
          />
          
          <Text style={styles.informacoes}>Informe sua altura:</Text>
          <TextInput style={styles.input}
            placeholder='Ex: 164 cm'
            onChangeText={(txtAltura) => setAltura(parseInt(txtAltura))}
            keyboardType='numeric'
          />

          <TouchableOpacity style={styles.button} onPress={calcularIMC}>
            <Text style={styles.buttonText}>Calcular IMC</Text>
          </TouchableOpacity>
        </>
      )}

      <StatusBar style="auto"/>
    </View>
    </ImageBackground>
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 150,
    // backgroundColor: '#DDA0DD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // ou 'stretch' para cobrir todo o container, mas pode distorcer a imagem
  },

  titleContainer: {
    marginTop: 1, // Espaçamento superior
    marginBottom: 50,
    alignItems: 'center' // Centraliza o conteúdo horizontalmente
  },
  titleText: {
    fontSize: 30, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
    
  },

  sexo:{
    fontSize: 15,
    fontWeight: 'bold', // Negrito
  },

  textos:{
  fontSize: 20,
  marginTop: 30,
  fontWeight: 'bold', // Negrito
  },

  text:{
    fontSize: 400,
    marginTop: 10,
    marginBottom: 10,
  },

  informacoes:{
    fontSize: 15,
    fontWeight: 'bold', // Negrito
    marginTop: 10,
  },

  button:{
    backgroundColor: '#FFFF00',
    padding: 10,
    borderRadius: 5,
    marginTop: 100,
    borderColor: 'black',
    borderWidth: 1,
  },

  buttonText:{
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold', // Negrito
  },

  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    fontSize: 20,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 5,
    fontSize: 20,
  },
  radioButtonSelected: {
    backgroundColor: '#808080',
  },
  
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 15,
    backgroundColor: '#FAF0E6',
    fontSize: 20,
  },
  
});
