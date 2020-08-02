import getHttp from "./ajax.js"
import { more_info, create100coins , check_each_info } from "./ui.js"





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
        let coinsID = coins.map((val) => val.id);
        check_each_info(coinsID)
        const items = document.querySelector('.items');
        items.addEventListener('click', function (e) {
            //CHECK IF MORE INFO HAVE BEEN CALLED ALREADY  
            if (coinsID.includes(e.target.id) === true) {
                e.preventDefault()
                if (e.target.parentElement.childNodes[3].innerText === '') {
                    let id = e.target.id;
                    let url = `https://api.coingecko.com/api/v3/coins/${id}`;
                    getHttp(url, more_info );
                }
            }
        });

        }
     



    