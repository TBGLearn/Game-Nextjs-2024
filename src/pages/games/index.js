// pages/games/index.js
import React, { useEffect } from 'react';
import GameList from '../../components/Games/index';
import Head from 'next/head';
import { useRouter } from 'next/router';

export const config = {
  unstable_runtimeJS: false
};

async function getData(pageActive, limit) {
  const res = await fetch(`https://game.tbg95.com/api/game-list?page=${pageActive}&perPage=${limit}`);
  return res.json();
}

export async function getStaticProps() {
  const pageActive = 0; // Trang đầu tiên
  const limit = 30;
  const result = await getData(pageActive, limit);

  return {
    props: {
      initialData: result.data || [],
      initialCategories: result.categories || [],
      initialPageQuantity: 10
    }
  };
}

export default function Games({ initialData, initialCategories, initialPageQuantity }) {
  const router = useRouter();
  const [data, setData] = React.useState(initialData);
  const [categories, setCategories] = React.useState(initialCategories);
  const [pageActive, setPageActive] = React.useState(0);
  const [pageQuantity, setPageQuantity] = React.useState(initialPageQuantity);

  useEffect(() => {
    const { page } = router.query;
    if (page) {
      setPageActive(parseInt(page, 10) - 1);
    }
  }, [router.query]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(pageActive, 30);
      setData(result.data || []);
    };

    fetchData();
  }, [pageActive]);

  const handleClickPage = async (pageIndex) => {
    setPageActive(pageIndex);
    router.push(`/games?page=${pageIndex + 1}`, undefined, { shallow: true });
  };

  const handlePreviousPage = () => {
    if (pageActive > 0) {
      setPageActive(pageActive - 1);
      router.push(`/games?page=${pageActive}`, undefined, { shallow: true });
    }
  };

  const handleNextPage = () => {
    if (pageActive < pageQuantity - 1) {
      setPageActive(pageActive + 1);
      router.push(`/games?page=${pageActive + 2}`, undefined, { shallow: true });
    }
  };

  return (
    <>
      <Head>
        <title>All OF GAME</title>
        <meta name="description" content="Khám phá tất cả các trò chơi trên trang của chúng tôi với bộ sưu tập phong phú và đa dạng. Từ trò chơi hành động, phiêu lưu, đến các trò chơi trí tuệ, chúng tôi có mọi thứ bạn cần để giải trí và thư giãn." />
      </Head>
      <GameList
        data={data}
        categories={categories}
        pageActive={pageActive}
        pageQuantity={pageQuantity}
        onClickPage={handleClickPage}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </>
  );
}
