const container = document.querySelector(".container");

export function create100coins(value) {
    
  const div = document.createElement('div');
  // Symbol To Upper Case 
  let symbols = value.map((val) => val.symbol);
  symbols = symbols.map((x) => x.toUpperCase());
  div.setAttribute('class', 'items');
  let html = value.map(function ({ id, name }, index) {
      return (`<div class="card border-secondary m-3">
                  <div class="card-header">${symbols[index]}</div> 
                  <p class="card-text">Name : ${name} </p>
                  <div class="custom-control custom-switch">
                       <a class="btn btn-primary btn-lg collapsible" href="#" role="button" id="${id}" title="Learn More">Learn more</a>
                       <div class="more-info" id="${symbols[index]}"></div>
                       <div class="check">
                       <input type="checkbox" data-coin=${symbols[index]} class="custom-control-input" id="customSwitch${index}" unchecked="">
                      <label class="custom-control-label" for="customSwitch${index}"></label>
                       </div>
                      
                  </div>
                  
              </div>`);
  }).join('');
  div.innerHTML = html;
  container.append(div);
}
export function more_info() {
  const data = this.response;
  let id = this.response.symbol.toUpperCase()
  const usd = data.market_data.current_price.usd + '<strong>$</strong>'
  const eur = data.market_data.current_price.eur + '<strong>€</strong>'
  const ils = data.market_data.current_price.eur + '<strong>₪</strong>'
  const image = data.image.small
  let div = document.getElementById(id)
  div.innerHTML = `<div>
                    <p><strong>USD</strong> : ${usd} <br>
                      <strong>EUR</strong> : ${eur} <br>
                      <strong>ILS</strong> : ${ils} </p>
                  </div> 
                  <div>
                  <img src="${image}" style="border-radius: 25px;" >
                  </div>
                  `
}


export function check_each_info() {


    var coll = document.querySelectorAll(".collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.visibility === "visible") {
                content.style.visibility = "hidden";
                content.style.opacity = "0";
                content.style.height = '0'
                
            } else {
                content.style.visibility = "visible";
                content.style.opacity = "1";
                content.style.height = '79px'
            }
        });
    }
}



