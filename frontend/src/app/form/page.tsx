"use client";

import React, { useState } from "react";

import styles from "./form.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Login from "@/components/Login/Login";
import MainForm from "@/components/MainForm/MainForm";
import { NextResponse, NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

function page() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/");
    return;
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <MainForm />
      </main>
      <Footer />
    </>
  );
}

export default page;
