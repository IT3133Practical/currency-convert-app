import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CurrencyConvertor from './src/components/currencyConvertor';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize:40,fontWeight:'bold',marginTop:100,marginBottom:50}}>Currency Convertor</Text>
        <CurrencyConvertor/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
