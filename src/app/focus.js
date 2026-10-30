import { useLocalSearchParams, router } from 'expo-router';
import FocusTime from '../components/FocusTime';

export default function FocusScreen() {
  const { task } = useLocalSearchParams();
  return <FocusTime task={typeof task === 'string' ? task : ''} onBack={() => router.replace('/')} />;
}
