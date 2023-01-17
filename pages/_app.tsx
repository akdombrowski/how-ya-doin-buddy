import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "../styles/global.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
