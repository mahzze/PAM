import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Image, SafeAreaView} from 'react-native';

export default function App()
{

  const tabela = [
     {
    Nome: "Cachorro quente", Codigo: "100", Preco: "1,20", Imagem: "https://cdn-icons-png.flaticon.com/512/2102/2102289.png"
    }, 
    { 
    Nome: "Bauru simples", Codigo: "101", Preco: "1,30", Imagem: "https://cdn-icons-png.flaticon.com/512/937/937428.png"
    },
    { 
    Nome: "Bauru com ovo", Codigo: "102", Preco: "1,50", Imagem: "https://cdn-icons-png.flaticon.com/512/937/937428.png"
    },
    {
    Nome: "Hamburguer", Codigo: "103", Preco: "1,20", Imagem: "https://cdn-icons-png.flaticon.com/512/937/937428.png"
    },
    {
    Nome: "Cheeseburger", Codigo: "104", Preco: "1,30", Imagem: "https://cdn-icons-png.flaticon.com/512/937/937428.png"
    },
    {
    Nome: "Refrigerante", Codigo: "105", Preco: "1,00", Imagem: "https://cdn-icons-png.flaticon.com/512/819/819867.png"
    },
  ]

return(


<View style={{backgroundColor: '#eeeeee', minHeight: '100%'}}>
        <View style={{backgroundColor: 'purple', width: '100%', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>TÍTULO DO APP: exercicio 1</Text>
        </View>
        <SafeAreaView>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor:'#fefefe', padding: '10px', alignItems: 'center'}}> 
    <Text>Especificação</Text>
    <Text>Código</Text>
    <Text>Preço</Text>   
    </View>
              <FlatList
              data={tabela}      
              numColumns={1}      
              renderItem= { ({item}) =>  <Dados parametro={item} /> }
              />
        </SafeAreaView>
</View>

);
}

export function Dados({parametro})
{
return(
  <View style={{margin: 1, flex: 1}}> 
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor:'#fefefe', padding: '10px', alignItems: 'center', borderRadius: '5% 50%'}}>
      <Image
        source={{ uri: parametro.Imagem }}
        style={{ width: 30, height: 30 }}
      />
      <Text style={{ color: '#101010c0', fontWeight: 'bold', width: '40%', textAlign: 'center' }}> {parametro.Nome} </Text>
      <Text style={{color: '#101010c0', fontWeight: 'bold', width: '20%', textAlign:'center'}}> {parametro.Codigo} </Text>
      <Text style={{color: '#101010c0', fontWeight: 'bold', width: '30%', textAlign:'center'}}> R$ {parametro.Preco} </Text>   
    </View>
</View>
);
}
