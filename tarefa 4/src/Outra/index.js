import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const style = StyleSheet.create({
    body: {
      backgroundColor: "#000",
      minHeight: "60vh",
      display: 'flex',
      flexDirection: 'column'
    }

  })

  return (
    <View style={style.body}>
      <Image source={ require('./logo.png') } style={{ width:'100%', height:'20%'}} />
      <Text style={{color: "#ffeedd"}}>Teste</Text>
      <Button
        title="Ir para Home"
        onPress={() => navigation.navigate('Home')}
      />
      
    </View>
  );
}
