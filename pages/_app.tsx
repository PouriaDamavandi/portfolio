import "../styles/globals.css";
import MainLayout from "@/layout/mainLayout";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../components/pages/index/home.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
