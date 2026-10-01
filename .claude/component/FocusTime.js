import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';

export default function FocusTime({onBack}) {

    const duration = [600, 900, 1200];
    const [isRunning, setisRunning] = useState(false);
    const [time, setTime] = useState(600);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

  return (
    <SafeAreaView>
        <View>
            <Text>Focus Time</Text>
            <Text>Focus Time</Text>
            <Text>Focus Time</Text>
            </View>
            <View>
            <Text>Task</Text>
            
            <TouchableOpacity>
                <Text>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onBack}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )}
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    InputText: {
        margin: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'left',
        margin: 10,
        padding: 10,
        fontSize:20,
        fontWeight: 'bold',
    }});