import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Menu />

      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>Home</h2>
            <h6 className="margintopbottom20">
              Code Camp is a community event where developers learn from fellow
              developers. We also have developer related topics that include
              software branding, legal issues around software as well as other
              topics developers are interested in hearing about.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
