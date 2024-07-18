import Header from "@/layouts/Header";
import Layout from "@/layouts/Layout";
import Head from "next/head";


export const config = {
  unstable_runtimeJS: false
};

export default function Home() {
    return (
      <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
      </Head>
      <Layout>
      Home Page
      </Layout> 
      </>
    );
  }
  