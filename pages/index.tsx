import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="text-3xl font-bold underline">DeFi Story</h1>
      </div>
    </div>
  );
};

export default Home;
