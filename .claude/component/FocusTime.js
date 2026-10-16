import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';



export default function FocusTime({onBack}) {
  return(
    <SafeAreaView style={styles.background}>
      <View style={{ width: '100%', alignItems: 'stretch' }}>
        <Text>sec</Text>
        <Text>sec</Text>
        <Text>sec</Text>
        <View style={styles.progressBar} />
        <Text>sec</Text>
        <Text>sec</Text>
        <TouchableOpacity onPress={onBack}>
          <Text>back</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Back</Text>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 30,
  },
  progressBar: {
    height: 5,
    backgroundColor: 'goldenrod',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'stretch',
  },
});