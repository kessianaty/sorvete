import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { firestore } from "../firebase"; // Importe apenas o Firestore
import { collection, doc, updateDoc } from "firebase/firestore"; 

export default function Alterar({ navigation, route }) {
  const { id, sabor: initialSabor, preco: initialPreco, data: initialData, cliente: initialCliente } = route.params;

  const [sabor, setSabor] = useState(initialSabor);
  const [preco, setPreco] = useState(initialPreco);
  const [data, setData] = useState(initialData);
  const [cliente, setCliente] = useState(initialCliente);

  async function alterarSorvete(id, sabor, preco, data, cliente) {
    try {
      // Use firestore aqui
      await updateDoc(doc(collection(firestore, "sorvetes"), id), {
        sabor: sabor,
        preco: preco,
        data: data,
        cliente: cliente,
      });
      Alert.alert("Aviso", "Sorvete alterado com sucesso.");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao alterar sorvete: ", error);
      Alert.alert("Erro", "Erro ao alterar sorvete. Por favor, tente novamente.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alterar dados do Sorvete</Text>
      <TextInput
        style={styles.input}
        placeholder="Sabor"
        onChangeText={setSabor}
        value={sabor}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        onChangeText={setPreco}
        value={preco}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data"
        onChangeText={setData}
        value={data}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do Cliente"
        onChangeText={setCliente}
        value={cliente}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => alterarSorvete(id, sabor, preco, data, cliente)}
      >
        <Text style={styles.buttonText}>Alterar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5A9D0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#F8E0E6',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#610B21',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
