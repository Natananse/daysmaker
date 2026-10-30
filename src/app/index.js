import { useState } from 'react';
import { router } from 'expo-router';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [task, setTask] = useState('');

  const startFocus = () => {
    const cleanedTask = task.trim();
    if (cleanedTask) router.push({ pathname: '/focus', params: { task: cleanedTask } });
  };

  return (
    <ImageBackground source={require('../../images/sun set .jpg')} resizeMode="cover" style={styles.background}>
      <SafeAreaView style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Daysmaker</Text>
          <Text style={styles.subtitle}>Make today count, one focus at a time.</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="What do you want to focus on?"
              placeholderTextColor="rgba(255,255,255,0.72)"
              onChangeText={setTask}
              value={task}
              accessibilityLabel="Focus task"
              returnKeyType="go"
              onSubmitEditing={startFocus}
              maxLength={120}
            />
            <Pressable
              style={({ pressed }) => [styles.startButton, !task.trim() && styles.disabledButton, pressed && task.trim() && styles.pressedButton]}
              onPress={startFocus}
              disabled={!task.trim()}
              accessibilityRole="button"
              accessibilityLabel="Start focus session"
            >
              <Text style={styles.startButtonText}>＋</Text>
            </Pressable>
          </View>
          {task.trim() ? <Text style={styles.currentTask}>Focus task: {task.trim()}</Text> : null}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.28)' },
  content: { flexGrow: 1, paddingHorizontal: 24, paddingTop: 24 },
  title: { color: 'white', fontSize: 34, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { color: 'white', fontSize: 16, marginBottom: 30 },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  input: {
    flex: 1,
    minHeight: 52,
    borderColor: 'rgba(255,255,255,0.75)',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.12)',
  },
  startButton: { width: 52, height: 52, borderRadius: 26, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' },
  startButtonText: { color: '#7f4141', fontSize: 30, lineHeight: 34 },
  disabledButton: { opacity: 0.5 },
  pressedButton: { opacity: 0.75, transform: [{ scale: 0.96 }] },
  currentTask: { color: 'white', fontSize: 16, marginTop: 16 },
});
