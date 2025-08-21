import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Tela inicial - Kaio de Lima</Text>
      <Link href="/sobre" style={styles.button}> Sobre mim </Link>
      <Link href="/habilidades" style={styles.button}> Habilidades </Link>
      <Link href="/formacao" style={styles.button}> Formações </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  text2: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
