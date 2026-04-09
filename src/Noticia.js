import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from './styleSheet/estilos';

function Noticia(props) {
  return (
    <View style={estilos.card}>
      <View style={estilos.areaTexto}>
        <Text style={estilos.titulo}>{props.titulo}</Text>
        <Text style={estilos.manchete}>{props.manchete}</Text>
        <Text style={estilos.data}>{props.data}</Text>
      </View>

      <Image source={props.imagem} style={estilos.imagem} />
    </View>
  );
}

export default Noticia;