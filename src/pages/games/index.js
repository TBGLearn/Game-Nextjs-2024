// pages/games/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/games/1');
  }, [router]);

  return null;
};

export default Home;
