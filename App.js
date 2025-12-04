import { ExpoRoot } from "expo-router";
import Head from "expo-router/head";
/*Esse código é necessário como solução para utilizar os conceitos do Expo Router aqui no Snack*/
export default function ExpoRouterApp() {
  return (
    <Head.Provider>
      <ExpoRoot context={require.context("./app", true)} location="/" />
    </Head.Provider>
  );
}