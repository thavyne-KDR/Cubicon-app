import { ExpoRoot } from "expo-router";
import Head from "expo-router/head";

// Necessário para integração do Expo Router no ambiente do Snack
export default function ExpoRouterApp() {
  return (
    <Head.Provider>
      <ExpoRoot context={require.context("./app", true)} location="/" />
    </Head.Provider>
  );
}