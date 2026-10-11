import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';
 
export default function App() {
  return(
    <SafeAreaView style={styles.background}>
      <View>
        <Text>focus</Text>
      <TextInput style={styles.input} placeholder="add what evere you want">
        </TextInput>
        </View>
      <Text style={styles.text}>My App</Text>
    </SafeAreaView>
  );
}
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#9d5d5d',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    input: {
      height: 50,
      width: 200,
      borderColor: 'goldenrod',
      borderWidth: 1,
      marginBottom: 10,
      marginTop: 10,
      color: 'white',
      backgroundColor: 'transparent',
      textAlign: 'center',
      textAlignVertical: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
  });