import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Text style={styles.title}>Built for a clean start.</Text>
        <Text style={styles.copy}>
          Expo Router handles screens. Each feature owns its UI and logic.
          Charter keeps the engineering rules visible in CI.
        </Text>
        <Link href="/" style={styles.link}>
          Back to start
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7F7F5" },
  content: { flex: 1, justifyContent: "center", padding: 32, gap: 18 },
  title: { color: "#1E211B", fontSize: 32, fontWeight: "700", lineHeight: 38 },
  copy: { color: "#54584F", fontSize: 16, lineHeight: 24 },
  link: {
    alignSelf: "flex-start",
    color: "#344429",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
  },
});
