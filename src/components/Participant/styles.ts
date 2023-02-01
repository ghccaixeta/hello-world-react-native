import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#f8f8f2',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name:{
        flex: 1,
        color: '#282a36',
        fontSize: 18,
        padding: 10,
    },
    buttonText:{
        color: '#f8f8f2',
        fontSize: 30,
      },
      button:{
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
        width: 56,
        height: 56,
        backgroundColor: '#ffb86c',
        alignItems: 'center',
        justifyContent: 'center',
        
      },

})