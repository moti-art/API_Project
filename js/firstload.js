import getHttp from "./ajax.js"
import { more_info, create100coins } from "./ui.js"



const main_div = document.querySelector('.container')
const ProgressBar = document.querySelector('.bar')

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
                let link = "https://api.coingecko.com/api/v3/coins/" + (id_coin);
                getHttp(link,more_info)

                let x  = 1 ;  
                let b = setInterval(() => {x+=1 ;
                     event.target.previousElementSibling.innerHTML=x + '%';
                     if(event.target.nextElementSibling.textContent !== ""){
                    clearInterval(b)
                }},10);
            
                event.target.nextElementSibling.style.opacity = '1';
                event.target.nextElementSibling.style.display = 'block';
               
                              
            }
            else {
                event.target.nextElementSibling.style.opacity = '0';
                event.target.nextElementSibling.style.display = 'none';
                event.target.previousElementSibling.innerHTML = ""
            }


        });  
    }

   

    // function checkStorage(item_id){
    //    setTimeout(() => {
    //        localStorage.setItem("item" , 'item_id' )
    //    }, 120000);
    //    alert(localStorage.getItem('item'))
    // }   
