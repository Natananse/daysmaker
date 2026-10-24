import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';



export default function FocusTime({onBack}) {
    const time=[6000,12000,18000]

  return(
    <SafeAreaView style={styles.background}>
      <View style={{ width: '100%', alignItems: 'stretch' }}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>{time[0]}</Text>
          <Text style={styles.text}>{time[1]}</Text>
          <Text style={styles.text}>{time[2]}</Text>
        </View>
        <Text>focus time</Text>
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
  inputContainer: {
    width: '100%',
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 30,
    gap: 20,
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginLeft: 30,
  },
  progressBar: {
    height: 5,
    backgroundColor: 'goldenrod',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginLeft: 30,
  },
});