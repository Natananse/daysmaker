import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Press me" onPress={() => console.log('Button pressed!')} />
      <View style={styles.app}></View>
      <Text>NEW APP</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#df0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app: {
    width: 100,
    height: 20,
    backgroundColor: '#fff',
  }
});
