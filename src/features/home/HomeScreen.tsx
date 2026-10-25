import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>EXPO STARTER</Text>
        <Text style={styles.title}>Your next app starts here.</Text>
        <Text style={styles.copy}>
          Edit src/features/home/HomeScreen.tsx to build your first screen.
        </Text>
        <Link href="/about" style={styles.link}>
          See how this starter works
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7F7F5" },
  content: { flex: 1, justifyContent: "center", padding: 32, gap: 18 },
  eyebrow: {
    color: "#566343",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
  },
  title: { color: "#1E211B", fontSize: 36, fontWeight: "700", lineHeight: 42 },
  copy: { color: "#54584F", fontSize: 16, lineHeight: 24 },
  link: {
    alignSelf: "flex-start",
    color: "#344429",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
  },
});
