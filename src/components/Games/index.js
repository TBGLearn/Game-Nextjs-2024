// components/GameList.js
import React, { useState , useEffect} from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import Layout from '@/layouts/Layout';
import AllGame from './AllGame';
import Image from 'next/image';

const GameList = ({ data, categories, pageActive, pageQuantity, onClickPage, onPreviousPage, onNextPage }) => {
  const [isGenresOpen, setIsGenresOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [game , setGame] = useState([])

  const toggleGenres = () => {
    setIsGenresOpen(!isGenresOpen);
  };

  useEffect(() => {
    // Chỉ gọi fetch khi searchQuery có giá trị
    if (searchQuery.trim() !== '') {
      console.log(searchQuery)
      const url = `https://game.tbg95.com/api/game-search?q=${encodeURIComponent(searchQuery)}`
      console.log(url)
      fetch(`https://game.tbg95.com/api/game-search?q=${encodeURIComponent(searchQuery)}`)
        .then(res => res.json())
        .then(data => {
          setGame(data.data);
          console.log(data.data);
        })
        .catch(error => {
          console.error('Error fetching games:', error);
          setGame([]); // Xử lý lỗi bằng cách đặt setGame rỗng để không hiển thị danh sách
        });
    } else {
      setGame([]); // Nếu searchQuery rỗng, đặt lại danh sách game rỗng
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredGames = game.filter(game =>(searchQuery.toLowerCase())
  );
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
                            <Link href={`/${ item }`} legacyBehavior>
                            <a style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item}</span>
                            </a>
                            </Link>
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
       <div className="flex flex-1 max-xs:flex-wrap gap-4 sm:justify-end sm:items-end min-w-fit">
            <div className="flex max-sm:w-full sm:flex-1 max-w-[470px] relative">
              <input className="games_searchInput__3kX7E" 
              placeholder="Search Games" 
              value={searchQuery}
              onChange={handleSearchChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 stroke-1 stroke-interdimensional absolute right-6 top-1/2 transform -translate-y-1/2"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
        </div> 
        {searchQuery && filteredGames.length > 0 ? (
              // <ul>
              //   {filteredGames.map((game) => (
              //     <button 
              //     style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}
              //     onClick={() => window.location.href = `/games/${game.slug}/${game.game_id}`} 
              //     key={game.game_id}
              //   >
              //   <img src={`${game.img_path}${game.assets[0].name}`}  style={{ width: '50px', height: 'auto', marginRight: '10px' }} alt="Game" />
              //   {game.title}
              // </button>
              //   ))}
              // </ul> 
              <AllGame data={game} pageActive = {0} pageQuantity={1} onClickPage={onClickPage} onPreviousPage={onPreviousPage} onNextPage={onNextPage} />
            ) : (
              <AllGame data={data} pageActive={pageActive} pageQuantity={pageQuantity} onClickPage={onClickPage} onPreviousPage={onPreviousPage} onNextPage={onNextPage} />
            )}
        </div>
      </main>
    </Layout>
  );
};

export default GameList;
