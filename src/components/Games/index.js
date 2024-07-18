// components/GameList.js
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import Layout from '@/layouts/Layout';
import AllGame from './AllGame';

const GameList = ({ data, categories, pageActive, pageQuantity, onClickPage, onPreviousPage, onNextPage }) => {
  return (
    <>
    <Layout>
    <main className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ display: 'flex', justifyContent: 'center', padding: 10, color: "red" }}>Category</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {categories.map((item) => (
            <li key={item} style={{ marginBottom: '10px' }}>
              <button style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Link href={`/${item}`} style={{ textDecoration: 'none' , color : "black"}}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item}</span>
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.col-9}>
       <AllGame data={data} pageActive={pageActive} pageQuantity={pageQuantity} onClickPage={onClickPage} onPreviousPage={onPreviousPage} onNextPage={onNextPage} />
      </div>
    </main>
    </Layout>
    </>
  );
};

export default GameList;
