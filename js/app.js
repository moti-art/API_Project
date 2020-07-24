import getHttp from "./ajax.js"
import load_first_page from "./firstload.js"
import progressBar from "./progreesbar.js"

window.onload = function(){
    getHttp("https://api.coingecko.com/api/v3/coins/list" , load_first_page)
}


document.querySelector('#home').addEventListener('click', ()=>{
    document.querySelector('.container').innerHTML="";
    progressBar();
    getHttp("https://api.coingecko.com/api/v3/coins/list" , load_first_page );
})

document.querySelector('#liveReports').addEventListener('click', ()=>{
    console.log('2')
})

document.querySelector('#about').addEventListener('click', ()=>{

    loadContent('./components/about/about.component.html', document.querySelector('.container'))
    loadScript('./components/about/about.component.js')
 
})

function loadContent(url, outlet) {
    if (outlet) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url)
        xhr.onload = function () {
            outlet.innerHTML = xhr.responseText;
        }
        xhr.send()
        return xhr;
    }
}

function loadScript(url) {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    document.body.insertAdjacentElement('beforeend', scriptTag)
}