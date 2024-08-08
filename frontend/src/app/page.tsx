import MainForm from "@/components/MainForm/MainForm";
import Image from "next/image";
import styles from "./app.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className={styles.main}>
        <MainForm />
      </main>
      <Footer />
    </>
  );
}
