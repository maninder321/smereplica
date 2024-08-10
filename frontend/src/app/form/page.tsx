"use client";

import React, { useEffect, useState } from "react";

import styles from "./form.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Login from "@/components/Login/Login";
import MainForm from "@/components/MainForm/MainForm";
import { NextResponse, NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import SpinnerLoader from "@/components/SpinnerLoader/SpinnerLoader";
import useAuth from "@/hooks/useAuth";

function page() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
        >
          <h1>Loading.....</h1>
        </div>
      ) : (
        <>
          <Header />
          <main className={styles.main}>
            <MainForm />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default page;
