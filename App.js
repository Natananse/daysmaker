import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <TextInput 
      placeholder='write what ever you want...'
      mode='outlined'
      style={styles.InputText}
      label='focus'
      ></TextInput>
      <TouchableOpacity>
        <StyleSheet>Press me</StyleSheet>
      </TouchableOpacity>
    </SafeAreaView>
  )}

  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    InputText: {
      margin: 10,
    }
  });