import Head from "next/head";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from "../components/app-header";
import StartButton from "../components/start-button";


export default function Home() {

  return (
    <>
      <Head>
        <title>Quizz app</title>
        <meta name="description" content="Simple quizz app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main center">
        <AppHeader />
        <StartButton />
      </main>
    </>
  );
}
