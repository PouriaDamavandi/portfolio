import "../styles/globals.css";
import MainLayout from "@/layout/mainLayout";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../components/pages/index/home.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../public/fonts/font.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </main>
  );
}
