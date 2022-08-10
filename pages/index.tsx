import React, { useEffect, useState } from "react";

import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

import Header from "../components/Header";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { getAllPosts, BlogItems } from "../utils/Content";
import { BlogGallery } from "../components/BlogGallery";

const Home: NextPage = () => {
  const [blogs, setBlogs] = useState<BlogItems[]>([] as BlogItems[]);

  useEffect(() => {
    function getAllBlogs() {
      const baseURL = process.env.NEXT_PUBLIC_HOST;
      console.log(baseURL);
      axios
        .get(`${baseURL}/blogs`)
        .then((res) => {
          let data = res.data;
          setBlogs(data);
        })
        .catch((e) => {
          console.error(e);
          return [];
        });
    }

    getAllBlogs();
  }, [blogs]);

  return (
    <div>
      <Header />
      <div className="mt-32 mx-8 lg:mx-52">
        <div className="border-b-2 mb-8">
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
        </div>

        <BlogGallery posts={blogs} />
      </div>
    </div>
  );
};

export default Home;
