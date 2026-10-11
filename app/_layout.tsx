import { Stack, router } from "expo-router";
import { Pressable } from "react-native";
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
          fontWeight: "bold",
        },
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
              hitSlop={10}
              style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
            >
              <Ionicons name="settings-sharp" size={22} color="#F2F4F3" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="detalhes"
        options={{
          title: "Detalhes",
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