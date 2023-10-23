import "../styles/globals.css";
import HeaderComponent from "components/header";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { TeamProvider } from "hooks/TeamContext";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TeamProvider>
        <HeaderComponent menuActive={"teste"} />
        <main
          className={` min-h-screen  items-center justify-between p-12 ${inter.className}`}
        >
          <Component {...pageProps} />
        </main>
      </TeamProvider>
    </>
  );
}
