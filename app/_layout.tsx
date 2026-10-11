import { router, Stack } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#49111C",
        },
        headerTintColor: "#F2F4F3",
        headerTitleStyle: {
          fontWeight: "700",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      
      <Stack.Screen
        name="catalogo"
        options={{
          title: "Catálogo",
          headerRight: () => (
            <Pressable
              onPress={() => router.push("/sobre")}
              style={({ pressed }) => [
                styles.botaoConfig,
                pressed && styles.botaoPressionado,
              ]}
              hitSlop={10}
            >
              <Ionicons name="settings-outline" size={22} color="#F2F4F3" />
            </Pressable>
          ),
        }}
      />

      <Stack.Screen
        name="detalhes"
        options={{
          title: "Detalhes",
          headerBackVisible: false,
          headerLeft: () => null,
        }}
      />

      <Stack.Screen
        name="sobre"
        options={{
          title: "Sobre",
        }}
      />
    </Stack>
  );
}


const styles = StyleSheet.create({
  botaoConfig: {
    padding: 6,
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoPressionado: {
    opacity: 0.6,
  },
});