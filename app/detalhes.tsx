import { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Botao from "../components/Botao";

const FILMES = [
  {
    id: "1",
    titulo: "Interestelar",
    genero: "Ficção Científica",
    ano: "2014",
    avaliacao: "8.6",
    duracao: "169 min",
    poster: require("../assets/Interestelar.jpeg"),
    sinopse: `As reservas naturais da Terra estão a chegar ao fim e a sobrevivência da humanidade está em risco iminente.

    Um grupo de astronautas e cientistas recebe a missão crítica de passar por um misterioso buraco de minhoca perto de Saturno para procurar um novo planeta habitável, enfrentando os perigos da dilatação temporal e a imensidão do espaço.`,
  },
  {
    id: "2",
    titulo: "O Hobbit: A Desolação de Smaug",
    genero: "Fantasia",
    ano: "2013",
    avaliacao: "7.8",
    duracao: "161 min",
    poster: require("../assets/hobbit.jpeg"),
    sinopse: `Bilbo Bolseiro e a companhia liderada por Thorin Escudo de Carvalho continuam a sua perigosa marcha rumo ao leste para recuperar o reino ancestral de Erebor.

    Pelo caminho, o grupo precisa de atravessar a traiçoeira Floresta das Trevas e escapar de criaturas mortais antes de confrontar a fúria devastadora do dragão Smaug, que guarda a Montanha Solitária.`,
  },
  {
    id: "3",
    titulo: "Invocação do Mal 2",
    genero: "Terror",
    ano: "2016",
    avaliacao: "7.3",
    duracao: "134 min",
    poster: require("../assets/invocacao.jpeg"),
    sinopse: `Os conceituados investigadores paranormais Ed e Lorraine Warren viajam até ao norte de Londres para prestar auxílio a uma família aterrorizada por forças sobrenaturais malignas.

    Lá, deparam-se com uma mãe solteira e as suas quatro crianças a serem violentamente atormentadas por uma presença demoníaca implacável, colocando a fé e a própria vida do casal em perigo extremo.`,
  },
  {
    id: "4",
    titulo: "A Fantástica Fabrica de Chocolate",
    genero: "Fantasia e Comédia",
    ano: "2005",
    avaliacao: "6.7",
    duracao: "115 min",
    poster: require("../assets/chocolate.jpeg"),
    sinopse: `O jovem e humilde Charlie Bucket vive com a sua família em condições precárias até conseguir encontrar um dos cinco cobiçados bilhetes dourados escondidos em barras de chocolate.

    O bilhete garante-lhe uma visita guiada exclusiva pelo excêntrico Willy Wonka dentro do seu império misterioso, revelando engenhocas mágicas, doces fantásticos e lições inesquecíveis para cada visitante.`,
  },
  {
    id: "5",
    titulo: "Hipótese do Amor",
    genero: "Romance",
    ano: "2026",
    avaliacao: "8.1",
    duracao: "120 min",
    poster: require("../assets/hipotese.jpeg"),
    sinopse: `Olive Smith é uma estudante de doutoramento dedicada que não acredita em contos de fadas modernos, mas precisa desesperadamente de convencer a sua melhor amiga de que superou o passado.

    Num momento de puro impulso, resolve beijar o primeiro homem que encontra no corredor, sem imaginar que se tratava de Adam Carlsen, um professor temido e rigoroso que aceita entrar na farsa.`,
  },
  {
    id: "6",
    titulo: "Missão Impossível - Efeito Fallout",
    genero: "Ação",
    ano: "2018",
    avaliacao: "7.7",
    duracao: "147 min",
    poster: require("../assets/missao.jpeg"),
    sinopse: `Após uma operação secreta em Berlim correr mal, Ethan Hunt e a equipa da IMF deixam acidentalmente núcleos perigosos de plutónio caírem nas mãos de uma rede terrorista global.

    Forçado a aliar-se a um implacável agente da CIA enquanto a sua lealdade é questionada, Hunt corre contra o relógio numa sequência de perseguições vertiginosas para evitar uma catástrofe nuclear iminente.`,
  },
];

export default function Detalhes() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const filme = FILMES.find((item) => item.id === String(id));

  const [favorito, setFavorito] = useState(false);

  if (!filme) {
    return (
      <View style={styles.containerErro}>
        <Text style={styles.textoErro}>Filme não encontrado.</Text>
        <View style={styles.areaBotaoErro}>
          <Botao
            titulo="Voltar ao Catálogo"
            aoPressionar={() => router.back()}
            icone="arrow-back"
          />
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudoRolagem}>
      <Image source={filme.poster} style={styles.poster} />

      <View style={styles.areaTexto}>
        <View style={styles.cabecalhoTitulo}>
          <Text style={styles.titulo}>{filme.titulo}</Text>

          <Pressable
            onPress={() => setFavorito(!favorito)}
            style={({ pressed }) => [
              styles.botaoFavorito,
              pressed && { opacity: 0.6 },
            ]}
          >
            <Ionicons
              name={favorito ? "heart" : "heart-outline"}
              size={28}
              color="#49111C"
            />
          </Pressable>
        </View>

        <View style={styles.linhaInfo}>
          <View style={styles.tagAno}>
            <Text style={styles.textoTagAno}>{filme.ano}</Text>
          </View>

          <View style={styles.tagGenero}>
            <Text style={styles.textoGenero}>{filme.genero}</Text>
          </View>

          <View style={styles.grupoMetricas}>
            <View style={styles.itemMetrica}>
              <Ionicons name="star" size={16} color="#E0A96D" />
              <Text style={styles.textoMetrica}>{filme.avaliacao}</Text>
            </View>

            <View style={styles.itemMetrica}>
              <Ionicons name="time-outline" size={16} color="#5C677D" />
              <Text style={styles.textoMetrica}>{filme.duracao}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secaoSinopse}>
          <Text style={styles.tituloSinopse}>Sinopse</Text>
          <Text style={styles.textoSino}>{filme.sinopse}</Text>
        </View>

        <Botao
          titulo="Voltar ao Catálogo"
          aoPressionar={() => router.back()}
          icone="arrow-back"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F3",
  },
  conteudoRolagem: {
    paddingBottom: 60,
  },
  poster: {
    width: "100%",
    height: 400,
    marginBottom: 20,
  },
  areaTexto: {
    paddingHorizontal: 20,
  },
  cabecalhoTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0A0908",
    flex: 1,
    paddingRight: 12,
  },
  botaoFavorito: {
    padding: 4,
  },
  linhaInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 8,
  },
  tagAno: {
    backgroundColor: "#49111C",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  textoTagAno: {
    color: "#F2F4F3",
    fontSize: 12,
    fontWeight: "700",
  },
  tagGenero: {
    backgroundColor: "#E2DCD5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  textoGenero: {
    color: "#0A0908",
    fontSize: 12,
    fontWeight: "600",
  },
  grupoMetricas: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginLeft: "auto",
  },
  itemMetrica: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  textoMetrica: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4A4E69",
  },
  secaoSinopse: {
    marginTop: 14,
    marginBottom: 24,
    width: "100%",
  },
  tituloSinopse: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0A0908",
    marginBottom: 8,
  },
  textoSino: {
    fontSize: 15,
    lineHeight: 22,
    color: "#4A4E69",
  },
  containerErro: {
    flex: 1,
    backgroundColor: "#F2F4F3",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textoErro: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0A0908",
    marginBottom: 16,
  },
  areaBotaoErro: {
    width: "100%",
    maxWidth: 240,
  },
});