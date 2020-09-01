import React from 'react';
import './Nav.css';
import requests from './requests';

function Nav({setSelectedOption}) {
    return (
        <div className="nav">
            <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h1>
            <h1  onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h1>
            <h1  onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h1>
            <h1  onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h1>
            <h1  onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h1>
            <h1  onClick={() => setSelectedOption(requests.fetchRomanceMoies)}>Romance</h1>
            <h1  onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h1>
            <h1  onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h1>
            <h1  onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h1>
            <h1  onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h1>
           

        
           
    
        </div>
    )
}

export default Nav
