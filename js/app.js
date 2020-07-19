import getHttp from "./ajax.js"
import load_first_page from "./firstload.js"

window.onload = function(){
    getHttp("https://api.coingecko.com/api/v3/coins/list" , load_first_page)
}

