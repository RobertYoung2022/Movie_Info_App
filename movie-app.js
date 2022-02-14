import { config } from "./config.js"

const BASE_URL = config.api_base_url
const API_KEY = config.api_key

export async function getPopularMovies(page = 1) {
    let data = []
    try {
        const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
        const responseData = await response.json()
        data = responseData?.results
    } catch (error) {

    }
    return data
}

const moviesDiv = document.getElementById("movies")

import { getPopularMovies } from "./api.js";
import { config } from "./config.js";

export async function renderMovies() {
    const movies = await getPopularMovies()
    console.log(movies)
    moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("")
}

function renderSingleMovie(movie) {
    return (
        `
        <div class="col-4 col-lg-3 col-xl-2 p-1">
            <img src="${config.image_base_url + movie?.poster_path}" class="img-fluid" >
        </div>
        `
    )
}



/*
$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText, axios1 = axios) {
    axios1.get('https://www.omdbapi.com?s=' + searchText)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}*/

