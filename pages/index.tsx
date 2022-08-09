import React from "react";

import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../utils/Content";
import { BlogGallery } from "../components/BlogGallery";

const Home: NextPage = () => {
  const allBlogs = getAllPosts();

  return (
    <div>
      <Header />
      <div className="mt-3">
        <Navbar>
          <li className="mr-6">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="#">
              <a>About</a>
            </Link>
          </li>
          <li className="mr-6">
            <a href="#">GitHub</a>
          </li>
        </Navbar>
        <BlogGallery posts={allBlogs} />
      </div>
    </div>
  );
};

export default Home;
