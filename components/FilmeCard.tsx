import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FilmeCardProps {
  id: string;
  titulo: string;
  genero: string;
  ano: number;
  poster: ImageSourcePropType;
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
    setFavorito(!favorito);
  }

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressionado,
      ]}
      onPress={() => aoPressionar(id)}
    >
      <Image source={poster} style={styles.poster} resizeMode="cover" />

      <View style={styles.infoContainer}>
        <View style={styles.topoCard}>
          <Text style={styles.titulo} numberOfLines={2}>
            {titulo}
          </Text>

          {/* Coração de Favorito: vinho (#49111C) quando marcado */}
          <Pressable
            style={styles.botaoFavorito}
            onPress={alternarFavorito}
            hitSlop={12}
          >
            <Ionicons
              name={favorito ? "heart" : "heart-outline"}
              size={24}
              color={favorito ? "#49111C" : "#A9927D"}
            />
          </Pressable>
        </View>

        <Text style={styles.genero}>{genero}</Text>

        <View style={styles.badgeAno}>
          <Text style={styles.textoAno}>{ano}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 14,
    overflow: "hidden",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  cardPressionado: {
    opacity: 0.9,
  },
  poster: {
    width: 95,
    height: 135,
    backgroundColor: "#DDD",
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "space-between",
    height: 135,
  },
  topoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111111",
    flex: 1,
    paddingRight: 8,
  },
  botaoFavorito: {
    padding: 2,
  },
  genero: {
    fontSize: 13,
    color: "#888888",
    marginVertical: 4,
  },
  badgeAno: {
    alignSelf: "flex-start",
    backgroundColor: "#49111C",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
  textoAno: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});