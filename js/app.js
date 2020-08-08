import getHttp from "./ajax.js";
import load_first_page from "./firstload.js";
import { buildGragh} from "./ui.js"
// import { createCanvasElement , makeGraph } from './graph.js';

window.onload = function () {
  getHttp("https://api.coingecko.com/api/v3/coins/list", load_first_page);
};

document.querySelector("#home").addEventListener("click", home);
function home() {
  document.querySelector(".container").innerHTML = "";
  getHttp("https://api.coingecko.com/api/v3/coins/list", load_first_page);
}

document.querySelector("#liveReports").addEventListener("click", () => {

  let coins=""
  let counter =  0 ; 
  let arr = [];
  for (var i = 0; i < 100; i++) {
    let tgl = document.getElementById("customSwitch" + i);

    if (tgl.checked) {
      arr[counter] = tgl.dataset.coin;
      counter++
      coins +=tgl.dataset.coin+"," ;
     
    }
    if(counter>5){
    // alert("wrong choice - more than 5 toggels !")
    $("#mymodal").modal();
    // break
  }
  }
  coins = coins.substring(0, coins.length - 1);
  let link = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coins}&tsyms=USD`
  if(counter<=5){
    buildGragh(link);
  }
 
});

  document.querySelector("#about").addEventListener("click", () => {
  document.querySelector(".container").innerHTML = `<a href = "https://moti-art.github.io/motiCV/" id = "aboutme" >click here to get more INFO about me</a>`

});

