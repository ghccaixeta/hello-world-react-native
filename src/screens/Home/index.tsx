import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles} from './styles'
import { Participant } from '../../components/Participant'

export function Home() {

  function handleParticipantAdd(){
    console.log("oi")
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
        <Text style={styles.subtitle}>With Dracula Theme!</Text>

        <View style={styles.form}>
          <TextInput
          style={styles.input} 
          placeholder="Type anything."
          placeholderTextColor={"#282a36"}
          keyboardType="numeric"
          />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText} >+</Text>
          </TouchableOpacity>

        </View>

        <Participant name="Joe Hartz"/>
        <Participant name="Michel Brear"/>
        <Participant name="Rose Stug"/>

        <StatusBar style="auto" />
    </View>
    
  );
}