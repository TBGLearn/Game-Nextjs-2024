import React from 'react';
import Layout from '@/layouts/Layout';
import fetch from 'isomorphic-unfetch';
import GameOfCate from '@/components/GameOfCate';
import Head from 'next/head';


export const config = {
  unstable_runtimeJS: false
};

async function getData1() {
  const result = await fetch(`https://game.tbg95.com/api/game-list?page=1&perPage=30`);
  return result.json();
}

async function getData(pageActive, limit, category) {
  const result = await fetch(`https://game.tbg95.com/api/game-list?page=${pageActive}&perPage=${limit}&cat=${category}`);
  return result.json();
}

export async function getStaticPaths() {
  const data = await getData1();
  const result = data.categories;
  const categories = Array.isArray(result) ? result : []; 
  const paths = categories.map((category) => ({
    params: { category: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pageActive = 0;
  const limit = 30;
  const category = params.category;
  const result = await getData(pageActive, limit, category);

  return {
    props: {
      initialData: result.data || [],
      initialCategories: result.categories || [],
      initialPageActive: pageActive,
      initialPageQuantity: 2,
      category
    }
  };
}

export default function Category({ initialData, initialPageActive, initialPageQuantity, category }) {
  const [data, setData] = React.useState(initialData);
  const [pageActive, setPageActive] = React.useState(initialPageActive);
  const [pageQuantity, setPageQuantity] = React.useState(initialPageQuantity);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getData(pageActive, 30, category);
      setData(result.data || []);
    };

    fetchData();
  }, [pageActive, category]);

  const handleClickPage = async (pageIndex) => {
    setPageActive(pageIndex);
  };

  const handlePreviousPage = () => {
    if (pageActive > 0) {
      setPageActive(pageActive - 1);
    }
  };

  const handleNextPage = () => {
    if (pageActive < pageQuantity - 1) {
      setPageActive(pageActive + 1);
    }
  };

  return (
    <Layout>
      <Head>
        <title>{category} Games</title>
        <meta name="description" content={`Khám phá danh mục ${category} với hàng ngàn trò chơi thú vị! Chúng tôi cung cấp các trò chơi mới nhất và phổ biến nhất trong danh mục này để bạn có thể dễ dàng tìm thấy trò chơi yêu thích của mình và tận hưởng những trải nghiệm tuyệt vời. `} />
      </Head>
      <GameOfCate
        data={data}
        pageActive={pageActive}
        pageQuantity={pageQuantity}
        onClickPage={handleClickPage}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </Layout>
  );
}
