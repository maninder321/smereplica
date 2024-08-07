import MainForm from "@/components/MainForm/MainForm";
import Image from "next/image";
import styles from "./app.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <MainForm />
      <Footer />
    </main>
  );
}
