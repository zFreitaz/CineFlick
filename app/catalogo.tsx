import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import FilmeCard from "../components/FilmeCard";

const DADOS_FILMES = [
  {
    id: "1",
    titulo: "Interestelar",
    genero: "Ficção Científica",
    ano: 2014,
    poster: require("../assets/Interestelar.jpeg"),
  },
  {
    id: "2",
    titulo: "O Hobbit: A Desolação de Smaug",
    genero: "Fantasia",
    ano: 2013,
    poster: require("../assets/hobbit.jpeg"),
  },
  {
    id: "3",
    titulo: "Invocação do Mal 2",
    genero: "Terror",
    ano: 2016,
    poster: require("../assets/invocacao.jpeg"),
  },
  {
    id: "4",
    titulo: "A Fantástica Fabrica de Chocolate",
    genero: "Fantasia e Comédia",
    ano: 2005,
    poster: require("../assets/chocolate.jpeg"),
  },
  {
    id: "5",
    titulo: "Hipótese do Amor",
    genero: "Romance",
    ano: 2026,
    poster: require("../assets/hipotese.jpeg"),
  },
  {
    id: "6",
    titulo: "Missão Impossível - Efeito Fallout",
    genero: "Ação",
    ano: 2018,
    poster: require("../assets/missao.jpeg"),
  },
];

export default function Catalogo() {
  const [filmes, setFilmes] = useState<typeof DADOS_FILMES>([]);
  const [carregando, setCarregando] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilmes(DADOS_FILMES);
      setCarregando(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  function abrirDetalhes(filmeId: string) {
    router.push({
      pathname: "/detalhes",
      params: { id: filmeId },
    });
  }

  if (carregando) {
    return (
      <View style={styles.centroCarregando}>
        <ActivityIndicator size="large" color="#49111C" />
        <Text style={styles.textoCarregando}>Carregando catálogo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtituloSecao}>Em Destaque</Text>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FilmeCard
            id={item.id}
            titulo={item.titulo}
            genero={item.genero}
            ano={item.ano}
            poster={item.poster}
            aoPressionar={abrirDetalhes}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F3",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  centroCarregando: {
    flex: 1,
    backgroundColor: "#F2F4F3",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  textoCarregando: {
    color: "#49111C",
    fontWeight: "600",
    fontSize: 14,
  },
  subtituloSecao: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0A0908",
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  lista: {
    paddingBottom: 40,
  },
});