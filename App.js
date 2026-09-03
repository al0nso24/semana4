import { StyleSheet, View } from 'react-native';
import DoubleNumber from './src/componentes/DoubleNumber';

export default function App() {
  return (
    <View style={styles.container}>
      <DoubleNumber></DoubleNumber>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
