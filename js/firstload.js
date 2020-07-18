import getHttp from "./ajax.js"
import { more_info, create100coins } from "./ui.js"

const main_div = document.querySelector('.container')

export default function load_first_page(){
    
        let data = [];
        let coins = [];
        data = this.response;
        coins = data.filter(function (val, index) {
            if (index < 100) {
                return val;
            }
        });
        getHttp('https://api.coingecko.com/api/v3/coins/list', create100coins(coins));
        
        main_div.addEventListener('click', function (event) {
            let id_coin = event.target.id;
            if (event.target.nextElementSibling.textContent === "" || event.target.nextElementSibling.style.opacity === '0') {
                event.target.nextElementSibling.style.opacity = '1';
                let link = "https://api.coingecko.com/api/v3/coins/" + (id_coin), String;
                getHttp(link, more_info);
            }
            else {
                console.log('called');
                event.target.nextElementSibling.style.opacity = '0';
            }
        });
    }
