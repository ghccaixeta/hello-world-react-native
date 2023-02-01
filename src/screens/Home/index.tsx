import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles} from './styles'
import { Participant } from '../../components/Participant'

export function Home() {

  const participants = ['Peter Parker','Tony Stark','Bruce Wayne','Stan Lee','Robert Bruce','Thor Odinson','Rick Jones','Steven Grant Rogers','T\'Challa','Victor Shade','Jacques Duquesne']

  function handleParticipantAdd(){
    console.log("handleParticipantAdd")
  }

  function handleParticipantRemove(name?:string) {
    console.log("handleParticipantRemove"+name)
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

        <FlatList style={styles.scrollview}
          data={participants}
          keyExtractor={item => item}
          renderItem={({item})=>(
            <Participant 
            key={item}
            name={item}
            onRemove={handleParticipantRemove} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={()=>(

            <Text style={styles.emptyList}>Nossa... Que vazio!</Text>
          )}
        />
          
        

        

          
        


        <StatusBar style="auto" />
    </View>
    
  );
}