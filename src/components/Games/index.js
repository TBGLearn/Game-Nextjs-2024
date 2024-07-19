// components/GameList.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import Layout from '@/layouts/Layout';
import AllGame from './AllGame';

const GameList = ({ data, categories, pageActive, pageQuantity, onClickPage, onPreviousPage, onNextPage }) => {
  const [isGenresOpen, setIsGenresOpen] = useState(false);

  const toggleGenres = () => {
    setIsGenresOpen(!isGenresOpen);
  };

  return (
    <Layout>
      <main className="flex container mb-20 lg:gap-x-6">
        <div className="w-0 lg:w-auto relative">
          <div className="sidebar_sideMenu__3Y1q9 ">
            <form className="lg:!mx-0">
              <div className="font-semibold text-2xl text-interdimensional relative">
                Filters
              </div>
              <div className="flex flex-col mt-9 relative">
                <div className="field flex flex-col mb-3">
                  <div className="select_selectBox__EbV5r sidebar_filterSelect__00LtK space-y-4">
                    <button
                      className="select-button on-secondary-variant !py-5"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={isGenresOpen}
                      aria-controls="genres-options"
                      onClick={toggleGenres}
                    >
                      <div className="select-wrap-item">
                        <span className="placeholder">Genres</span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="select-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                    <div
                      className="select-options absolute multiple"
                      aria-multiselectable="true"
                      aria-orientation="vertical"
                      id="genres-options"
                      role="listbox"
                      tabIndex={0}
                      style={{ display: isGenresOpen ? "block" : "none" }}
                    >
                      <ul className="select_listboxOptions__bqz69 select-options-list">
                        {categories.map((item) => (
                          <li key={item} style={{ marginBottom: '10px' }}>
                            <button style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                              <Link href={`/${item}`} style={{ textDecoration: 'none', color: "black" }}>
                                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item}</span>
                              </Link>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1">
        <h2 className="font-semibold text-2xl text-interdimensional">Games</h2>             
          <AllGame data={data} pageActive={pageActive} pageQuantity={pageQuantity} onClickPage={onClickPage} onPreviousPage={onPreviousPage} onNextPage={onNextPage} />
        </div>
      </main>
    </Layout>
  );
};

export default GameList;
