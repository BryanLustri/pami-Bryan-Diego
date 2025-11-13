import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  function mostrarMensagem() {
    setMensagem(`Olá, ${nome || "visitante"}! Seja bem-vindo(a)!`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Primeiro App com React Native 🎉</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity style={styles.botao} onPress={mostrarMensagem}>
        <Text style={styles.textoBotao}>Mostrar mensagem</Text>
      </TouchableOpacity>

      {mensagem !== "" && <Text style={styles.mensagem}>{mensagem}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  botao: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  mensagem: {
    marginTop: 20,
    fontSize: 18,
  },
});
