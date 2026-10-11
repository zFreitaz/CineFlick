import { Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BotaoProps {
  titulo: string;
  aoPressionar: () => void;
  icone?: keyof typeof Ionicons.glyphMap;
}

export default function Botao({ titulo, aoPressionar, icone }: BotaoProps) {
  return (
    <Pressable
      onPress={aoPressionar}
      style={({ pressed }) => [
        styles.botao,
        pressed && styles.botaoPressionado,
      ]}
    >
      {icone && <Ionicons name={icone} size={20} color="#F2F4F3" />}
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#49111C",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  botaoPressionado: {
    opacity: 0.85,
  },
  texto: {
    color: "#F2F4F3",
    fontSize: 16,
    fontWeight: "700",
  },
}); 