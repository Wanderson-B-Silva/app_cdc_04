import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 30,
  },

  lista: {
    flex: 1,
  },

  topo: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
  },

  tituloPagina: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111111',
  },

  card: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },

  areaTexto: {
    flex: 1,
    paddingRight: 10,
  },

  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a52a2a',
    marginBottom: 6,
  },

  manchete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 8,
  },

  data: {
    fontSize: 15,
    color: '#666666',
  },

  imagem: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
});

export default estilos;