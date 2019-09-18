import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app, dudeski!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text 1" onPress={()=> setOutputText('The text changed my man!!!!')}/>
      <Button title="Change Text 2" onPress={()=> setOutputText('The text changed in a different way!')}/>
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
