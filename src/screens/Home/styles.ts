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
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        color: '#f8f8f2',
        paddingLeft: 10,
        fontSize: 20,
        
    },

    buttonText:{
      color: '#f8f8f2',
      fontSize: 30,
    },
    button:{
      width: 56,
      height: 56,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      backgroundColor: '#50fa7b',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    form:{
      width: '100%',
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 30,
    }

  });