import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import GameDetail from "@/components/GameDetail";
import Layout from "@/layouts/Layout";
import Head from "next/head";

export const config = {
  unstable_runtimeJS: false
};

async function getData(slug, game_id) {
  const res = await fetch(`https://game.tbg95.com/api/game-detail?slug=${encodeURIComponent(slug)}&game_id=${encodeURIComponent(game_id)}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getData1() {
  const result = await fetch(`https://game.tbg95.com/api/game-list?page=0&perPage=1000`);
  return result.json();
}

async function getAllGameDetails() {
  const result = await getData1();
  const data = result.data;
  return data.map(({ slug, game_id }) => ({ slug, game_id }));
}

export async function getStaticPaths() {
  const paths = await getAllGameDetails().then(details =>
    details.map(({ slug, game_id }) => ({
      params: { detail: [encodeURIComponent(slug), encodeURIComponent(game_id)] },
    }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const [slug, game_id] = params.detail;
  const data = await getData(slug, game_id);

  const similar = generateRandomNumbers();

  return { props: { data, similar } };
}

const generateRandomNumbers = () => {
  const newNumbers = [];
  const min = 1;
  const max = 30;

  while (newNumbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!newNumbers.includes(randomNumber)) {
      newNumbers.push(randomNumber);
    }
  }

  return newNumbers;
};

export default function Page({ data, similar }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Layout>
        <GameDetail data={data} similar={similar} />
      </Layout>
    </>
  );
}
