import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
    <View style={styles.row}>
      <TextInput 
      placeholder='write what ever you want...'
      mode='outlined'
      style={styles.InputText}
      label='focus'
      ></TextInput>
      <TouchableOpacity style={styles.CircularButton}>
        <Text style={styles.plustext}>+</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.buttonText}># things we have foucesed on</Text>
      <Text style={styles.additionalText}># thanks a lot</Text>

    </SafeAreaView>
  )}

  const styles = StyleSheet.create ({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: 'blue',
    },
    InputText: {
      margin: 10,
    },
    buttonText: {
      color: 'white',
      textAlign: 'left',
      margin: 10,
      padding: 10,
      fontSize:20,
      fontWeight: 'bold',
    },
    additionalText: {
      color: 'white',
      textAlign: 'left',
      margin: 10,
      padding: 10,
      fontSize:20,
      fontWeight: 'bold',
    },
    CircularButton: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      borderWidth: 2,
    },
    plustext: {
      color: 'white',
      fontSize: 24,
      textAlign: 'center',
    }
  });