import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import estilos from './styleSheet/estilos';
import Noticia from './Noticia';

function ListaNoticias() {
  const noticias = [
    {
      titulo: 'Batman',
      manchete: 'Batman é preso na lava jato, mas Robin escapa',
      data: '10/04/2026',
      imagem: require('../img/batman.png'),
    },
    {
      titulo: 'Morador de Rua',
      manchete: 'Morador de rua e condenado a prisão domiciliar por furto em São Paulo.',
      data: '11/04/2026',
      imagem: require('../img/Morador.png'),
    },
    {
      titulo: 'Cão ',
      manchete: 'Cão se junta suspeitos em abordagem durante opção policial',
      data: '12/04/2026',
      imagem: require('../img/cao.png'),
    },
    {
      titulo: 'Homem fuma e explode',
      manchete: 'Americano havia bebido gasolina antes de fumar.',
      data: '13/04/2026',
      imagem: require('../img/homem.png'),
    },
    {
      titulo: 'Brasil',
      manchete: 'Brasil tem habitantes 203 milhões e um pib de US$ 2,17 trilhões',
      data: '14/04/2026',
      imagem: require('../img/brasil.png'),
    },
  ];

  return (
    <ScrollView style={estilos.lista}>
      <View style={estilos.topo}>
        <Text style={estilos.tituloPagina}>LEIA MAIS</Text>
      </View>

      {noticias.map((item, index) => (
        <Noticia
          key={index}
          titulo={item.titulo}
          manchete={item.manchete}
          data={item.data}
          imagem={item.imagem}
        />
      ))}
    </ScrollView>
  );
}

export default ListaNoticias;