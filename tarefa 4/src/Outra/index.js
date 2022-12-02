import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text> FAZER UM PLANO DE FUNDO PRETO COM A IMAGEM DA NETFLIX AQUI NO MEIO DA AULA </Text>
      <Button
        title="Ir para Home"
        onPress={() => navigation.navigate('Home')}
      />
      <View >
      </View>
    </View>
  );
}
