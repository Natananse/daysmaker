import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FocusTime from './.claude/component/FocusTime';
import {NavigationContainer} from '@react-navigation/native';

const stack = createNativeStackNavigator();
export default function App(){
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.row}>
      <TextInput style={styles.title} placeholder="write what ever you want"/>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Home" component={App} />
          <stack.Screen name="FocusTime" component={FocusTime} />
        </stack.Navigator>
      </NavigationContainer>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('FocusTime')}>
        <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>*things we are going to do</Text>
      <Text style={styles.texts}>Tasks</Text>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f5bf0c',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    label: 'outlined Input',
    mode: 'outlined',
    width: '60%',
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  button: {
    backgroundColor: 'transparent',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderColor: 'black',
    borderWidth: 2,
    left: -20,
    marginLeft: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  texts: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
})


