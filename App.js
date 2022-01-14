import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#EB5401" }}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
