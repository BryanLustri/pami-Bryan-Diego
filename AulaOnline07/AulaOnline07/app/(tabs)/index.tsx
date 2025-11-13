import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handlePress = () => {
    if (nome.trim() === '') {
      setMensagem('Por favor, digite seu nome!');
    } else {
      setMensagem(`Olá, ${nome}! Seja bem-vindo(a) ao React Native 🎉`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aula 06/11 - React Native com Expo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity style={styles.botao} onPress={handlePress}>
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>

      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderColor: '#888',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});
