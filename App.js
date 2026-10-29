import {Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';
import FocusTime from './.claude/component/FocusTime';

 
export default function App() {
  const [inputText, setInputText] = useState('');
  const [showFocusTime, setShowFocusTime] = useState(false);
  if (showFocusTime) {
  return <FocusTime 
  task={inputText.trim()}
  onBack={() => setShowFocusTime(false)} />;
}
  return(
    <ImageBackground
      source={require('./images/sun set .jpg')}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
    <SafeAreaView style={styles.background}>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="What do you want to focus on?"
      onChangeText={setInputText}
      value={inputText}
      accessibilityLabel="Focus task"
      >
        </TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowFocusTime(true)}
          accessibilityRole="button"
          accessibilityLabel="Start focus session"
        >
          <Text>+</Text>
        </TouchableOpacity>
        </View>
      {inputText.trim().length > 0 && (
        <Text style={styles.currentTask}>
          Focus task: {inputText.trim()}
        </Text>
      )}
      <Text style={styles.text}>My App</Text>
    </SafeAreaView>
    </ImageBackground>
  );
}
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.28)',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    backgroundImage: {
      flex: 1,
    },
    input: {
      height: 50,
      width: 200,
      borderColor: 'black',
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
    currentTask: {
      color: 'white',
      fontSize: 18,
      marginLeft: 30,
      marginTop: 12,
      marginRight: 30,
    },
    button: {
      backgroundColor: 'transparent',
      borderColor: 'black',
      borderWidth: 2,
      height: 50,
      width: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 30,
    },
  });
