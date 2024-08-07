import MainForm from "@/components/MainForm/MainForm";
import Image from "next/image";
import styles from "./app.module.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainForm />
    </main>
  );
}
