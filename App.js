import {Text, View, StyleSheet, Pressable, TextInput, ImageBackground, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
      <Text style={styles.title}>Daysmaker</Text>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="What do you want to focus on?"
      onChangeText={setInputText}
      value={inputText}
      accessibilityLabel="Focus task"
      returnKeyType="done"
      maxLength={120}
      >
        </TextInput>
        <Pressable
          style={({pressed}) => [
            styles.button,
            !inputText.trim() && styles.buttonDisabled,
            pressed && inputText.trim() && styles.buttonPressed,
          ]}
          onPress={() => setShowFocusTime(true)}
          disabled={!inputText.trim()}
          accessibilityRole="button"
          accessibilityLabel="Start focus session"
        >
          <Text>+</Text>
        </Pressable>
        </View>
      {inputText.trim().length > 0 && (
        <Text style={styles.currentTask}>
          Focus task: {inputText.trim()}
        </Text>
      )}
      </ScrollView>
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
    scrollContent: {
      flexGrow: 1,
    },
    scrollView: {
      flex: 1,
      width: '100%',
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
    title: {
      fontSize: 34,
      fontWeight: 'bold',
      color: 'white',
      marginLeft: 30,
      marginTop: 24,
      marginBottom: 16,
    },
    currentTask: {
      color: 'white',
      fontSize: 18,
      marginLeft: 30,
      marginTop: 12,
      marginRight: 30,
    },
    button: {
      backgroundColor: '#ffffff',
      height: 50,
      width: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 30,
    },
    buttonDisabled: {
      opacity: 0.5,
    },
    buttonPressed: {
      opacity: 0.75,
      transform: [{scale: 0.96}],
    },
  });
