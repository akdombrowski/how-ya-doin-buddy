import { ColorModeScript } from "@chakra-ui/react";
import { Html, Main, NextScript } from "next/document";
import Head from "./head";

import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

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

        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </Html>
  );
}
