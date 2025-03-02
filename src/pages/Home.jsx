import MovieCards from "../components/MovieCards";
import { useState } from "react";
import "../css/Home.css"

function Home()
{
    const[searchQuery,setSearchQuery]=useState("");
    const movies=[{id:1,title:"John Wick",release_date:"2020"},
                  {id:2,title:"Terminator",release_date:"2021"},
                  {id:3,title:"The Matrix",release_date:"2022"},
                
    ];

    const handleSearch=(e)=>{
        e.preventDefault();
    };
    return(

        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies" className="search-input"  value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
           
            </form>
            <div className="movies-grid">
                {movies.map((movie)=>
                    movie.title.toLowerCase().startsWith(searchQuery)&&(<MovieCards movie={movie}key={movie.id}/>))}
            </div>
        </div>
    );
}

export default Home