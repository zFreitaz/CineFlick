import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { router } from "expo-router";
import Botao from "../components/Botao";

export default function Home() {
  function irParaCatalogo() {
    router.push("/catalogo");
  }

  function irParaSobre() {
    router.push("/sobre");
  }

  return (
    <View style={styles.container}>
      <View style={styles.painelSuperior}>
        <View style={styles.conteudoCentral}>
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
      </View>

      <View style={styles.painelInferior}>
        
        <View style={styles.areaBotaoPrincipal}>
          <Botao
            titulo="Aceder ao Catálogo"
            aoPressionar={irParaCatalogo}
            icone="film-outline"
          />
        </View>

        
        <Pressable
          style={({ pressed }) => [
            styles.botaoSecundario,
            pressed && styles.botaoPressionado,
          ]}
          onPress={irParaSobre}
        >
          <Text style={styles.textoBotaoSecundario}>Sobre o Projeto</Text>
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
  painelSuperior: {
    flex: 3.5,
    backgroundColor: "#F2F4F3",
    borderBottomLeftRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  conteudoCentral: {
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 110,
    height: 110,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 34,
    fontWeight: "900",
    color: "#0A0908",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    color: "#A9927D",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 280,
  },
  painelInferior: {
    flex: 1.5,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    gap: 8,
  },
  areaBotaoPrincipal: {
    width: "100%",
  },
  botaoSecundario: {
    width: "100%",
    paddingVertical: 8,
    alignItems: "center",
  },
  textoBotaoSecundario: {
    color: "#F2F4F3",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  botaoPressionado: {
    opacity: 0.7,
  },
});