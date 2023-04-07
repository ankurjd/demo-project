import { StyleSheet, Text, View } from 'react-native';
import SketchCanvas from './app/components/SketchCanvas';
import MathEquations from './app/components/MathEquations';
const Algebrite = require('algebrite');

console.log('Algebrite - run', Algebrite.run('x + x'));
console.log('Algebrite - factor', Algebrite.factor('10!').toString());
console.log('Algebrite - eval', Algebrite.eval('integral(x^2)').toString());
console.log(
  'Algebrite - integral',
  Algebrite.integral(Algebrite.eval('x')).toString()
);

export default function App() {
  return (
    <View style={styles.container}>
      <SketchCanvas />
      {/* <MathEquations /> */}
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
