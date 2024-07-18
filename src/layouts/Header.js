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
      <header className="header">
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
      </header>
    </>
  );
}

export default Header;