import { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, ImageSourcePropType } from "react-native";

interface FilmeCardProps {
  id: string;
  titulo: string;
  genero: string;
  ano: number;
  poster: string | ImageSourcePropType;
  aoPressionar: (id: string) => void;
}

export default function FilmeCard({
  id,
  titulo,
  genero,
  ano,
  poster,
  aoPressionar,
}: FilmeCardProps) {
  const [favorito, setFavorito] = useState(false);

  function alternarFavorito() {
    setFavorito((estadoAnterior) => !estadoAnterior);
  }


  const fonteImagem = typeof poster === "string" ? { uri: poster } : poster;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressionado,
      ]}
      onPress={() => aoPressionar(id)}
    >
      <Image source={fonteImagem} style={styles.poster} />

      <View style={styles.infoFilme}>
        <View style={styles.cabecalhoCard}>
          <Text style={styles.tituloFilme}>{titulo}</Text>

          <Pressable
            hitSlop={8}
            onPress={(e) => {
              e.stopPropagation();
              alternarFavorito();
            }}
            style={({ pressed }) => [
              styles.botaoFavorito,
              pressed && styles.botaoFavoritoPressionado,
            ]}
          >
            <Text
              style={[
                styles.textoFavorito,
                favorito && styles.textoFavoritoAtivo,
              ]}
            >
              {favorito ? "★ Favorito" : "☆ Favoritar"}
            </Text>
          </Pressable>
        </View>

        <Text style={styles.generoFilme}>{genero}</Text>

        <View style={styles.tagAno}>
          <Text style={styles.textoTagAno}>{ano}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 14,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  cardPressionado: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  poster: {
    width: 95,
    height: 140,
    backgroundColor: "#E5E5E5",
  },
  infoFilme: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  cabecalhoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  tituloFilme: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0A0908",
    flex: 1,
    marginRight: 8,
  },
  botaoFavorito: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: "#F2F4F3",
  },
  botaoFavoritoPressionado: {
    opacity: 0.7,
  },
  textoFavorito: {
    fontSize: 12,
    fontWeight: "600",
    color: "#A9927D",
  },
  textoFavoritoAtivo: {
    color: "#49111C",
    fontWeight: "bold",
  },
  generoFilme: {
    fontSize: 13,
    color: "#A9927D",
  },
  tagAno: {
    alignSelf: "flex-start",
    backgroundColor: "#49111C",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  textoTagAno: {
    color: "#F2F4F3",
    fontSize: 11,
    fontWeight: "700",
  },
});