import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { router } from "expo-router";

export default function Home() {
  function irParaCatalogo() {
    router.push("/catalogo");
  }

  function irParaSobre() {
    router.push("/sobre");
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.topoClaro}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2809/2809590.png",
          }}
          style={styles.logo}
        />

        <Text style={styles.titulo}>CineFlick</Text>

        <Text style={styles.descricao}>
          O teu catálogo pessoal de filmes e estreias.
        </Text>
      </View>

      
      <View style={styles.areaInferior}>
        
        <Pressable
          style={({ pressed }) => [
            styles.botaoCatalogo,
            pressed && styles.botaoPressionado,
          ]}
          onPress={irParaCatalogo}
        >
          <Text style={styles.textoBotaoCatalogo}>Aceder ao Catálogo</Text>
        </Pressable>

        
        <Pressable
          style={({ pressed }) => [
            styles.linkSobre,
            pressed && styles.linkPressionado,
          ]}
          onPress={irParaSobre}
        >
          <Text style={styles.textoLinkSobre}>Sobre o Projeto</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#49111C",
  },
  topoClaro: {
    flex: 3,
    backgroundColor: "#F2F4F3",
    borderBottomLeftRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: "900",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 280,
  },
  areaInferior: {
    flex: 1.4,
    backgroundColor: "#49111C",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 16,
  },
  botaoCatalogo: {
    width: "100%",
    backgroundColor: "#F2F4F3",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotaoCatalogo: {
    color: "#49111C",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoPressionado: {
    opacity: 0.85,
  },
  linkSobre: {
    paddingVertical: 6,
  },
  textoLinkSobre: {
    color: "#C5B2B5",
    fontSize: 14,
    fontWeight: "600",
  },
  linkPressionado: {
    opacity: 0.6,
  },
});