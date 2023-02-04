import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles} from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react';

export function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantsName, setParticipantsName] = useState('')

  function handleParticipantAdd(name?:string){
    if(participants.includes(participantsName)){
      return Alert.alert("Oops!","Already exists a participant with this name!")
    }

    setParticipants(prevState => [...prevState,participantsName])
    setParticipantsName('')
  }

  function handleParticipantRemove(name?:string) {
    
    return Alert.alert("Remove participant",`Delete the participant ${name}?`,[
      {
        text: 'Yes',
        onPress: ()=> setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Nope',
        style: 'destructive'
      }
    ])
    
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
          onChangeText={setParticipantsName}
          value={participantsName}
          />

          <TouchableOpacity style={styles.button} onPress={()=>handleParticipantAdd('dsfs')}>
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
            onRemove={()=>handleParticipantRemove(item)} />
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