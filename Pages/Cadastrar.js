import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { firestore } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore"; 

export default function Cadastrar({ navigation }) {
  const [sabor, setSabor] = useState('');
  const [preco, setPreco] = useState('');
  const [data, setData] = useState('');
  const [cliente, setCliente] = useState('');

  async function addSorvete() {
    try {
      const docRef = await addDoc(collection(firestore, 'sorvetes'), {
        sabor: sabor,
        preco: preco,
        data: data,
        cliente: cliente,
      });
      console.log("Sorvete cadastrado com ID: ", docRef.id);
      Alert.alert("Cadastro", "Sorvete cadastrado com sucesso");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao cadastrar sorvete: ", error);
      Alert.alert("Erro", "Erro ao cadastrar sorvete. Por favor, tente novamente.");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}> Cadastro de Sorvete </Text>
      </View>
      <View>
        <TextInput
          autoCapitalize='words'
          style={styles.input}
          placeholder="Digite o sabor do sorvete"
          onChangeText={setSabor}
          value={sabor}
        />
        <TextInput
          style={styles.input}
          placeholder='Digite o preço do sorvete'
          onChangeText={setPreco}
          value={preco}
          keyboardType='numeric'
        />
         <TextInput
          style={styles.input}
          placeholder='Digite a data da compra'
          onChangeText={setData}
          value={data}
          keyboardType='numeric'
        />
         <TextInput
          style={styles.input}
          placeholder='Digite o cliente'
          onChangeText={setCliente}
          value={cliente}
        />
        <TouchableOpacity
          style={styles.btnenviar}
          onPress={addSorvete}>
          <Text style={styles.btntxtenviar}> Cadastrar Sorvete </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5A9D0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#F8E0E6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    borderRadius: 10,
  },
  btnenviar: {
    marginTop: 20,
    backgroundColor: '#610B21',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  btntxtenviar: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  titulo: {
    marginVertical: 40,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
