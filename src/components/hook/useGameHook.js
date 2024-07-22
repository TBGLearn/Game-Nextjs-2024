import { useState , useEffect } from "react";

const useGameSearch = (searchQuery) => {
    const [game , setGame] = useState([])

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            console.log(searchQuery)
            const url = `https://game.tbg95.com/api/game-search?q=${encodeURIComponent(searchQuery)}`
            console.log(url)
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setGame(data.data);
            }) 
            .catch(error => {
                setGame([]);
            })
        }else{
            setGame([]);
        }
    },[searchQuery])    
    return game;
}

export default useGameSearch;