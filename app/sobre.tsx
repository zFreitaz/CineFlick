import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Sobre() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.scrollContent}
      bounces={false}
    >
      
      <View style={styles.banner} />

      
      <View style={styles.areaCirculo}>
        <View style={styles.bordaBranca}>
          <View style={styles.miolo}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2809/2809590.png",
              }}
              style={styles.logo}
            />
          </View>
        </View>
      </View>

      
      <View style={styles.conteudo}>
       
        <View style={styles.blocoCabecalho}>
          <Text style={styles.nomeAppDestaque}>CineFlick</Text>
          <Text style={styles.subtituloSobre}>Sobre o Aplicativo</Text>
          <Text style={styles.textoIntro}>
            O CineFlick é uma aplicação interativa desenvolvida como projeto prático para a disciplina de Programação para Dispositivos Móveis I.
          </Text>
        </View>

       
        <View style={styles.painelCards}>
          
          <View style={styles.cardItem}>
            <View style={styles.iconeContainer}>
              <Ionicons name="film" size={20} color="#49111C" />
            </View>
            <View style={styles.cardCorpo}>
              <Text style={styles.rotulo}>NOME DO APLICATIVO</Text>
              <Text style={styles.valorPrincipal}>CineFlick</Text>
            </View>
            <View style={styles.badgeVersao}>
              <Text style={styles.badgeTexto}>v1.0.0</Text>
            </View>
          </View>

          
          <View style={styles.cardItem}>
            <View style={styles.iconeContainer}>
              <Ionicons name="bulb-outline" size={20} color="#49111C" />
            </View>
            <View style={styles.cardCorpo}>
              <Text style={styles.rotulo}>FINALIDADE</Text>
              <Text style={styles.valorTexto}>
                Apresentação e interação com catálogo de filmes, permitindo explorar detalhes técnicos e gerenciar títulos favoritos.
              </Text>
            </View>
          </View>

          
          <View style={styles.cardItem}>
            <View style={styles.iconeContainer}>
              <Ionicons name="school-outline" size={20} color="#49111C" />
            </View>
            <View style={styles.cardCorpo}>
              <Text style={styles.rotulo}>DISCIPLINA</Text>
              <Text style={styles.valorDestaqueEscola}>
                Programação para Dispositivos Móveis I
              </Text>
              <Text style={styles.valorSubEscola}>
                Fatec Registro • Centro Paula Souza
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F3",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  banner: {
    width: "100%",
    height: 120,
    backgroundColor: "#49111C",
  },
  areaCirculo: {
    paddingHorizontal: 20,
    marginTop: -45,
  },
  bordaBranca: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#F2F4F3",
    justifyContent: "center",
    alignItems: "center",
  },
  miolo: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: "#D3C2C0",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
  conteudo: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  blocoCabecalho: {
    marginBottom: 16,
  },
  nomeAppDestaque: {
    fontSize: 26,
    fontWeight: "900",
    color: "#0A0908",
    letterSpacing: 0.3,
    marginBottom: 10,
  },
  subtituloSobre: {
    fontSize: 16,
    fontWeight: "700",
    color: "#49111C",
    marginTop: 8,
    marginBottom: 8,
  },
  textoIntro: {
    fontSize: 13,
    lineHeight: 19,
    color: "#5C677D",
  },
  painelCards: {
    gap: 12,
    marginTop: 22,
  },
  cardItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#E6E6E8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconeContainer: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#F6EEEE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    marginTop: 2,
  },
  cardCorpo: {
    flex: 1,
  },
  rotulo: {
    fontSize: 11,
    fontWeight: "800",
    color: "#8D99AE",
    letterSpacing: 0.8,
    marginBottom: 3,
  },
  valorPrincipal: {
    fontSize: 18,
    fontWeight: "900",
    color: "#49111C",
  },
  badgeVersao: {
    backgroundColor: "#F2F4F3",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    alignSelf: "center",
  },
  badgeTexto: {
    fontSize: 12,
    fontWeight: "700",
    color: "#49111C",
  },
  valorTexto: {
    fontSize: 13,
    lineHeight: 19,
    color: "#2B2D42",
    fontWeight: "500",
  },
  valorDestaqueEscola: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0A0908",
    marginBottom: 2,
  },
  valorSubEscola: {
    fontSize: 12,
    color: "#5C677D",
    fontWeight: "500",
  },
});