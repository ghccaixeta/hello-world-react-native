import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282a36',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 35
      
    },
    title:{
      color: '#f8f8f2',
      fontWeight: 'bold',
      fontSize: 38,
      
      
    },
    subtitle:{
      color: '#6272a4',
      fontSize: 18,
      
      
    },
    input:{
        flex: 1,
        height: 56,
        backgroundColor: '#44475a',
        borderRadius: 5,
        color: '#f8f8f2',
        paddingLeft: 10,
        fontSize: 20,
        
    },

    buttonText:{
      color: '#282a36',
      fontSize: 30,
    },
    button:{
      width: 56,
      height: 56,
      marginLeft: 10,
      borderRadius: 5,
      backgroundColor: '#50fa7b',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    form:{
      width: '100%',
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 30,
    },
    scrollview:{
      width: '100%'
    },
    emptyList:{
      textAlign: 'center',
      color: '#ff79c6',
      fontSize: 28
    }


  });