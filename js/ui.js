const container = document.querySelector(".container");

export function create100coins(arr) {
    arr.forEach((element) => {
        let newdiv = document.createElement('div');
        newdiv.setAttribute('class', 'div_style');
        container.appendChild(newdiv);
        newdiv.innerHTML =
            `<div class = "more_info">
          <div class="form-group">
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1" checked="">
            <label class="custom-control-label" for="customSwitch1"></label>
          </div>
          <span>${element.name} </span>
          <button id = ${element.id} >more INFO </button>
          <div class=any ></div> 
          </div>`;
    });
}
export function more_info() {
    let coin_data = this.response;
    let more_info_div = document.getElementById(coin_data.id);
    const info = `<tr>
                      <td><img src =   ${coin_data.image.small} width = 10px></td><br>
                      <td>USD Value :  ${coin_data.market_data.current_price.usd}&#36;</td><br>
                      <td>EUR Value :  ${coin_data.market_data.current_price.eur}&#8364</td><br>
                      <td>ILS Value :  ${coin_data.market_data.current_price.ils}&#8362; </td><br>
                      </tr>`;
    more_info_div.nextElementSibling.innerHTML = info;
}