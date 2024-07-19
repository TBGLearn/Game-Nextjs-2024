"use client"

import React, { useEffect } from 'react';
import { useState } from 'react';
import "./HeaderStyle.css"; // Import the new CSS file
import Link from 'next/link';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [game , setGame] = useState([])


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
    <>
      {/* <header className="header">
        <div className="container">
             <Link href={'/'}>
          <button className="home-button" >
            Home</button>
          </Link>
                <input
              type="text"
              placeholder="Search for a game..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          <div>
          {searchQuery && (filteredGames.length > 0 ? (
              <ul>
                {filteredGames.map((game) => (
                  <button 
                  style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}
                  onClick={() => window.location.href = `/games/${game.slug}/${game.game_id}`} 
                  key={game.game_id}
                >
                <img src={`${game.img_path}${game.assets[0].name}`}  style={{ width: '50px', height: 'auto', marginRight: '10px' }} alt="Game" />
                {game.title}
              </button>
                ))}
              </ul>
            ) : (
              <p>No games found</p>
            ))}
          </div>
          <Link href={'/games'}>
          <button className="login-button" >
            Games</button>
          </Link>
        </div>
      </header> */}

  <header className="header_header__rj0C7  ">
  <div className="container mx-auto flex justify-between items-center gap-x-2">
     <Link href={'/'}>
          <button className="home-button" >
            Home</button>
      </Link>
    <div className="flex max-lg:gap-4 lg:gap-14 items-center">
      <nav className="navigation ">
       <Link href={'/games'}>
          <button className="login-button" >
            Games</button>
          </Link>
        <a target="blank" className="" href="https://blog.gamedistribution.com">
          News
        </a>
      </nav>
      <div className="header_searchGame__jvUKH" data-headlessui-state="">
        <div className="input-box">
        <input
              type="text"
              placeholder="Search for a game..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          <div>
          {searchQuery && (filteredGames.length > 0 ? (
              <ul>
                {filteredGames.map((game) => (
                  <button 
                  style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}
                  onClick={() => window.location.href = `/games/${game.slug}/${game.game_id}`} 
                  key={game.game_id}
                >
                <img src={`${game.img_path}${game.assets[0].name}`}  style={{ width: '50px', height: 'auto', marginRight: '10px' }} alt="Game" />
                {game.title}
              </button>
                ))}
              </ul>
            ) : (
              <p>No games found</p>
            ))}
          </div>
        </div>
      </div>
      <button
        className="buttons_button__gDVZj buttonPrimary login-button "
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-4"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        Login
      </button>
      <a
        href=""
        className="header_hamburgerIcon__grUPv hamburgerIcon lg:!hidden "
      >
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </a>
    </div>
  </div>
</header>

      

    </>
  );
}

export default Header;