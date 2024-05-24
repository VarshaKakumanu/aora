import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Home</Text>
      <Link style={styles.container} href='/Login'>login</Link>
      <Link style={styles.container} href='/Login/createPost'>createPost</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:'black'
  },
});
