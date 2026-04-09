import React from 'react';
import { View } from 'react-native';
import estilos from './src/styleSheet/estilos';
import ListaNoticias from './src/ListaNoticias';

function App() {
  return (
    <View style={estilos.fundo}>
      <ListaNoticias />
    </View>
  );
}

export default App;