import { ColorModeScript, theme } from "@chakra-ui/react";
import { Html, Main, NextScript } from "next/document";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html>
      <Head></Head>
      <body>
        {/* Color Mode Script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <NextScript />
      </body>
    </Html>
  );
}
