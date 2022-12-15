import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Image, SafeAreaView} from 'react-native';

export default function App()
{

  const times = [
   {
      Imagem: "https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/512/wrench-icon.png",Despesa: "Mercado Livre * Bradook", Preco: "332,55"
      },
{
      Imagem: "https://icons.iconarchive.com/icons/icons8/ios7/512/Food-Noodles-icon.png", Despesa: "D Maria", Preco: "24,00"
      },{
      Imagem: "https://cdn-icons-png.flaticon.com/512/263/263115.png", Despesa: "Pag*Imperioexpress", Preco: "77,04"
      },{
      Imagem: "https://cdn-icons-png.flaticon.com/512/846/846296.png", Despesa: "Uber*uber*Trip", Preco: "54,97"
      },{
      Imagem: "https://cdn-icons-png.flaticon.com/512/846/846296.png", Despesa: "Brasil Petro", Preco: "79,98"
      },{
      Imagem: "https://cdn-icons-png.flaticon.com/512/833/833314.png", Despesa: "Lopes Supermercados", Preco: "137,35"
      }
  ]

return(


<View style={{backgroundColor: '#eeeeee', minHeight: '100%'}}>
        <View style={{backgroundColor: 'purple', width: '100%', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>TÍTULO DO APP: exercicio 1</Text>
        </View>
        <SafeAreaView>
              <FlatList
              data={times}      
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
        style={{ width: 30, height: 30}}
      />
      <Text style={{color: '#101010c0', fontWeight: 'bold', width: '60%', textAlign:'center'}}> {parametro.Despesa} </Text>   
      <Text style={{color: '#101010c0', fontWeight: 'bold', width: '30%', textAlign:'center'}}> R$ {parametro.Preco} </Text>   
    </View>
</View>
);
}