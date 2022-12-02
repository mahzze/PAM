import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';

export default function App() {

  const tabela = [
    {
      Country: "China", Last: 2.8, Previous: 2.5, Reference: "Sep/22", Bgcolor: "#fefefe"
    },
    {
      Country: "Japan", Last: 3, Previous: 3, Reference: "Sep/22", Bgcolor: '#fefefe',
    },
    {
      Country: "Saudi Arabia", Last: 3.1, Previous: 3, Reference: "Sep/22", Bgcolor: '#fefefe',
    },
    {
      Country: "Switzerland", Last: 3.3, Previous: 3.5, Reference: "Sep/22", Bgcolor: '#ccffee',
    },
    {
      Country: "France", Last: 5.6, Previous: 5.9, Reference: "Sep/22", Bgcolor: '#ccffee',
    },
    {
      Country: "South Korea", Last: 5.6, Previous: 5.7, Reference: "Sep/22", Bgcolor: '#98FB98',
    },
    {
      Country: "Indonesia", Last: 5.95, Previous: 4.69, Reference: "Sep/22", Bgcolor: '#98FB98',
    },
    {
      Country: "Australia", Last: 6.1, Previous: 5.1, Reference: "Jun/22", Bgcolor: '#98FB98',
    },
    {
      Country: "Canada", Last: 6.9, Previous: 7, Reference: "Sep/22", Bgcolor: '#98dB88',
    },
    {
      Country: "Brazil", Last: 7.17, Previous: 8.73, Reference: "Sep/22", Bgcolor: '#98dB88',
    },
    {
      Country: "India", Last: 7.41, Previous: 7, Reference: "Sep/22", Bgcolor: '#78bb88',
    },
    {
      Country: "Singapore", Last: 7.5, Previous: 7, Reference: "Aug/22", Bgcolor: '#78bb88',
    },

  ]

  return (


    <View style={{ backgroundColor: '#eeeeee', minHeight: '100%' }}>
      <View style={{ backgroundColor: 'purple', width: '100%', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>TÍTULO DO APP: exercicio 1</Text>
      </View>
      <SafeAreaView>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#eee', padding: '10px', alignItems: 'center' }}>
          <Text>Country</Text>
          <Text>Last</Text>
          <Text>Previous</Text>
          <Text>Reference</Text>
        </View>
        <FlatList
          data={tabela}
          numColumns={1}
          renderItem={({ item }) => <Dados parametro={item} />}
        />
      </SafeAreaView>
    </View>

  );
}

export function Dados({ parametro }) {
  return (
    <View style={{ margin: 1, flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', padding: '10px', alignItems: 'center', borderRadius: '5% 50%', backgroundColor: parametro.Bgcolor }}>
        <Text style={{ color: '#101010c0', fontWeight: 'bold', width: '40%', textAlign: 'center' }}>{parametro.Country} </Text>
        <Text style={{ color: '#10101u1c0', fontWeight: 'bold', width: '20%', textAlign: 'center' }}>{parametro.Last} </Text>
        <Text style={{ color: '#101010c0', fontWeight: 'bold', width: '20%', textAlign: 'center' }}>{parametro.Previous} </Text>
        <Text style={{ color: '#101010c0', fontWeight: 'bold', width: '20%', textAlign: 'center' }}>{parametro.Reference} </Text>
      </View>
    </View>
  );
}
