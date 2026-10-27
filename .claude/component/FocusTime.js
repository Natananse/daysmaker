import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';



export default function FocusTime({onBack}) {
    const time=[6000,12000,18000]
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 1000); // Update progress every second

      return () => clearInterval(interval); // Cleanup on unmount
    }, []); 

  return(
    <SafeAreaView style={styles.background}>
      <View style={{ width: '100%', alignItems: 'stretch' }}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>{time[0]}</Text>
          <Text style={styles.text}>{time[1]}</Text>
          <Text style={styles.text}>{time[2]}</Text>
        </View>
        <View style={styles.countSection}>
          <Text style={styles.countLabel}>Focus time</Text>
          <Text style={styles.countValue}>{progress}</Text>
          <Text style={styles.countUnit}>seconds</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressBar, {width: `${progress}%`}]} />
        </View>
        <TouchableOpacity onPress={onBack}>
          <Text>back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#9d5d5d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    height: 50,
    marginBottom: 32,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginLeft: 0,
  },
  countSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  countLabel: {
    color: 'white',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  countValue: {
    color: 'white',
    fontSize: 72,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
    lineHeight: 84,
  },
  countUnit: {
    color: 'white',
    fontSize: 16,
    opacity: 0.8,
  },
  progressTrack: {
    width: '100%',
    height: 8,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.3)',
    overflow: 'hidden',
    marginBottom: 28,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'goldenrod',
    borderRadius: 5,
  },
});
