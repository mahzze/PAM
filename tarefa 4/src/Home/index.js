import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text> Tela Home </Text>
      <Button
        title="Ir para Outra"
        onPress={() => navigation.navigate('Outra')}
      />
    </View>
  );
}
