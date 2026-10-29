import {View, Text, StyleSheet, Pressable, ImageBackground, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';



export default function FocusTime({onBack, task}) {
    const durations = [10, 20, 30];
    const [durationMinutes, setDurationMinutes] = useState(10);
    const [remainingSeconds, setRemainingSeconds] = useState(10 * 60);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      if (isPaused || remainingSeconds <= 0) return undefined;

      const interval = setInterval(() => {
        setRemainingSeconds((seconds) => Math.max(seconds - 1, 0));
      }, 1000);

      return () => clearInterval(interval); // Cleanup on unmount
    }, [isPaused, remainingSeconds]);

    const progress = Math.round(
      ((durationMinutes * 60 - remainingSeconds) / (durationMinutes * 60)) * 100,
    );
    const formattedTime = `${Math.floor(remainingSeconds / 60)
      .toString()
      .padStart(2, '0')}:${(remainingSeconds % 60).toString().padStart(2, '0')}`;

    const selectDuration = (minutes) => {
      setDurationMinutes(minutes);
      setRemainingSeconds(minutes * 60);
      setIsPaused(false);
    };

  return(
    <ImageBackground
      source={require('../../images/sun set .jpg')}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
    <SafeAreaView style={styles.background}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <View style={{ width: '100%', alignItems: 'stretch' }}>
        <View style={styles.inputContainer}>
          {durations.map((minutes) => (
            <Pressable
              key={minutes}
              onPress={() => selectDuration(minutes)}
              style={[
                styles.durationButton,
                durationMinutes === minutes && styles.durationButtonSelected,
              ]}
              accessibilityRole="button"
              accessibilityLabel={`${minutes} minute focus session`}
              accessibilityState={{selected: durationMinutes === minutes}}
            >
              <Text
                style={[
                  styles.durationText,
                  durationMinutes === minutes && styles.durationTextSelected,
                ]}
              >
                {minutes} min
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.taskText}>
          {task ? `Focusing on: ${task}` : 'Choose a task to focus on'}
        </Text>
        <View style={styles.countSection}>
          <Text style={styles.countLabel}>Focus time</Text>
          <Text style={styles.countValue}>{formattedTime}</Text>
          <Text style={styles.countUnit}>
            {remainingSeconds === 0 ? 'Session complete' : 'remaining'}
          </Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressBar, {width: `${progress}%`}]} />
        </View>
        <Pressable onPress={onBack} accessibilityRole="button" accessibilityLabel="Go back">
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
        <Pressable
          style={styles.pauseButton}
          onPress={() => setIsPaused((paused) => !paused)}
          disabled={remainingSeconds === 0}
          accessibilityRole="button"
          accessibilityLabel={isPaused ? 'Resume focus timer' : 'Pause focus timer'}
        >
          <Text style={styles.pauseButtonText}>
            {remainingSeconds === 0 ? 'Session complete' : isPaused ? 'Resume' : 'Pause'}
          </Text>
        </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  backgroundImage: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
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
  durationButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.75)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  durationButtonSelected: {
    backgroundColor: 'white',
  },
  durationText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  durationTextSelected: {
    color: '#7f4141',
  },
  taskText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 28,
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
    fontSize: 64,
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
  backButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 8,
  },
  pauseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 52,
    borderRadius: 26,
    backgroundColor: 'white',
    marginTop: 12,
  },
  pauseButtonText: {
    color: '#7f4141',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
