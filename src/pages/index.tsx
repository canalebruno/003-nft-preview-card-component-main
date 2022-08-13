import type { NextPage } from "next";
import Head from "next/head";
import Card from "../component/Card";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Card />
      </main>
    </div>
  );
};

export default Home;
