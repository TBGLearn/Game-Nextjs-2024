import React from 'react';
import GameList from '../../components/Games/index';
import Head from 'next/head';
import { useRouter } from 'next/router';

async function getData(pageActive, limit) {
  const res = await fetch(`https://game.tbg95.com/api/game-list?page=${pageActive}&perPage=${limit}`);
  return res.json();
}

export async function getStaticProps({ params }) {
  const pageActive = parseInt(params.page, 10) - 1;
  const limit = 30;
  const result = await getData(pageActive, limit);

  return {
    props: {
      initialData: result.data || [],
      initialCategories: result.categories || [],
      initialPageActive: pageActive,
      initialPageQuantity: Math.ceil(result.totalPage || 0),
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://game.tbg95.com/api/game-list?page=0&perPage=1`);
  const result = await res.json();
  const totalPages = Math.ceil(result.totalPage || 0);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
}

export default function Games({ initialData, initialCategories, initialPageActive, initialPageQuantity }) {
  const router = useRouter();
  const [data, setData] = React.useState(initialData);
  const [categories, setCategories] = React.useState(initialCategories);
  const [pageActive, setPageActive] = React.useState(initialPageActive);
  const [pageQuantity, setPageQuantity] = React.useState(initialPageQuantity);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getData(pageActive, 30);
      setData(result.data || []);
    };

    fetchData();
  }, [pageActive]);

  const handleClickPage = async (pageIndex) => {
    setPageActive(pageIndex);
    router.push(`/games/${pageIndex + 1}`);
  };

  const handlePreviousPage = () => {
    if (pageActive > 0) {
      setPageActive(pageActive - 1);
      router.push(`/games/${pageActive}`);
    }
  };

  const handleNextPage = () => {
    if (pageActive < pageQuantity - 1) {
      setPageActive(pageActive + 1);
      router.push(`/games/${pageActive + 2}`);
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
