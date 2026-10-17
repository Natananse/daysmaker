import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';
import FocusTime from './.claude/component/FocusTime';

 
export default function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [showFocusTime, setShowFocusTime] = useState(false);
  if (showFocusTime) {
  return <FocusTime 
  tasks={currentTask}
  onBack={() => setShowFocusTime(false)} />;
}
  return(
    <SafeAreaView style={styles.background}>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="add what evere you want"
      onChangeText={setInputText}
      value={inputText}
      >
        </TextInput>
        <TouchableOpacity style={styles.button} onPress={() => setShowFocusTime(true)}>
          <Text>+</Text>
        </TouchableOpacity>
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
      marginLeft: 30,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft:10,
      marginRight: 30,
      gap: 20
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginLeft: 30,
    },
    button: {
      backgroundColor: 'transparent',
      borderColor: 'goldenrod',
      borderWidth: 2,
      height: 50,
      width: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 30,
    },
  });