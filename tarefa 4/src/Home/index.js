import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation()
  const [valores, setValores] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const style = StyleSheet.create({
    body: {
      background: "#fdfdfd",
      color: "#000000",
      width: "100vw",
      height: "60vh",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center"
    },

    valores: {
      textDecoration: "underline",
      fontSize: "14px"
    },

    valoresInput: {
      fontSize: "18px",
      width: "80vw",
      borderWidth: 1,
      borderRadius: "16px",
      backgroundColor: "#eee",
      margin: "10px",
      padding: "4px",
      paddingLeft: "14px"
    },

    result: {
      alignText: "center",
      margin: "10px",
      fontSize: "40px"
    }
  })

  useEffect(() => { setValores((num1 + num2) / 2) }, [num1, num2])

  return (
    <View>
      <View style={style.body}>
        <View>
          <Text style={style.valores}>Valor 1</Text>
          <TextInput
            style={style.valoresInput}
            keyboardType="numeric"
            defaultValue={0}
            onChange={(e) => setNum1(parseFloat(e.target.value))}
          />
        </View>
        <View>
          <Text style={style.valores}>Valor 2</Text>
          <TextInput
            style={style.valoresInput}
            keyboardType="numeric"
            defaultValue={0}
            onChange={(e) => setNum2(parseFloat(e.target.value))}
          />
        </View>
        <Text style={style.result}>{valores}</Text>
      </View>
      <Button
        title="Ir para Outra"
        onPress={() => navigation.navigate('Outra')}
      />
    </View>
  );
}
