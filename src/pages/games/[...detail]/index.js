import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import GameDetail from "@/components/GameDetail";
import Layout from "@/layouts/Layout";
import Head from "next/head";

export const config = {
  unstable_runtimeJS: false
};

const truncateDescription = (description, maxLength = 280) => {
  if (description.length > maxLength) {
    return `${description.substring(0, maxLength)}...`;
  }
  return description;
};

async function getData(slug, game_id) {
  try {
    const res = await fetch(`https://game.tbg95.com/api/game-detail?slug=${encodeURIComponent(slug)}&game_id=${encodeURIComponent(game_id)}`);
    if (!res.ok) {
      throw new Error(`Không thể lấy dữ liệu cho slug: ${slug}, game_id: ${game_id}`);
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getData1() {
  try {
    const res = await fetch(`https://game.tbg95.com/api/game-list?page=0&perPage=500`);
    if (!res.ok) {
      throw new Error('Không thể lấy danh sách trò chơi');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getAllGameDetails() {
  const result = await getData1();
  if (!result) {
    return [];
  }
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

  if (!data) {
    return {
      notFound: true,
    };
  }

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
  const description = truncateDescription(data.description);
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout>
        <GameDetail data={data} similar={similar} />
      </Layout>
    </>
  );
}
