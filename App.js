import { StyleSheet, View } from 'react-native';
import DoubleNumber from './src/componentes/DoubleNumber';
import TrafficLight from './src/componentes/TrafficLight';
import Mayuscula from './src/componentes/Mayuscula';
import Formulario from './src/componentes/Formulario';
import QuickSurvey from './src/componentes/QuickSurvey';

export default function App() {
  return (
    <View style={styles.container}>
      <QuickSurvey></QuickSurvey>
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
