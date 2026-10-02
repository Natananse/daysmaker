import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const minutes=[600, 900, 1200];

export default function FocusTime(){
    return (
        <SafeAreaView style={styles.background}>
            <Text> 10 minutes</Text>
            <Text> focus thing:</Text>
            <Text> 10 minutes</Text>
            <View width={100} height={30} backgroundColor={'red'}/>
            <Text >{minutes[0]} seconds</Text>
            <text> start </text>
            <text> back </text>

        </SafeAreaView>


    )}