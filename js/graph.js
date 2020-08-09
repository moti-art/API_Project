
export function displaymodal(arr){
    let html = arr.map((val, index) => {
        return (
            `<div class="form-group">
        <div class="custom-control custom-checkbox">
        ${val}
          <input type="checkbox" class="custom-control-input" data-coin=${val} id="customCheck${index}" checked="">
          <label class="custom-control-label" data-coin=${val} for="customCheck${index}"></label>
        </div><br>` )
    }).join('')

    const modalBody = document.querySelector(`.modal-body`)
    modalBody.innerHTML = html
    $("#mymodal").modal();

    document.querySelector('.modal-footer').addEventListener('click', clearCheckBox)
    document.querySelector('.modal-body').addEventListener('click', makeFilterArray)
}
function clearCheckBox(e) {
    if (e.target.id === 'SaveChanges') {
        console.log(arrayToCheck)
        for (let i = 0; i < arrayToCheck.length; i++) {
            document.querySelector(`#${arrayToCheck[i]}`).nextElementSibling.childNodes[1].checked = false
            console.log(`${arrayToCheck[i]} changed to false`)
        }
        $('.modal').modal('hide')
        arrayToCheck = []
    }
}

function makeFilterArray(e) {
    if (e.target.nodeName === 'LABEL'){
        if (!arrayToCheck.includes(e.target.dataset.coin)) {
            arrayToCheck.push(e.target.dataset.coin)
        }
        else if (arrayToCheck.includes(e.target.dataset.coin)) {
            arrayToCheck = arrayToCheck.filter(coin => coin !== e.target.dataset.coin)
        }
    }
}


 let arrayToCheck = []

export function buildGragh(link) {
    var options = {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Coins Values to USD"
        },
        subtitles: [{
            text: "Click Legend to Hide or Unhide Data Series"
        }],
        axisX: {
            title: "States"
        },
        axisY: {
            title: "Units Sold",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "Profit in USD",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },
        toolTip: {
            shared: true
        },
        // legend: {
        //     cursor: "pointer",
        //     itemclick: toggleDataSeries
        // },
        data: [{
            type: "spline",
            name: "Units Sold",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 120 },
                { x: new Date(2016, 1, 1), y: 135 },
                { x: new Date(2016, 2, 1), y: 144 },
                { x: new Date(2016, 3, 1),  y: 103 },
                { x: new Date(2016, 4, 1),  y: 93 },
                { x: new Date(2016, 5, 1),  y: 129 },
                { x: new Date(2016, 6, 1), y: 143 },
                { x: new Date(2016, 7, 1), y: 156 },
                { x: new Date(2016, 8, 1),  y: 122 },
                { x: new Date(2016, 9, 1),  y: 106 },
                { x: new Date(2016, 10, 1),  y: 137 },
                { x: new Date(2016, 11, 1), y: 142 }
            ]
        },
        {
            type: "spline",
            name: "Profit",
            axisYType: "secondary",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,##0.#",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 19034.5 },
                { x: new Date(2016, 1, 1), y: 20015 },
                { x: new Date(2016, 2, 1), y: 27342 },
                { x: new Date(2016, 3, 1),  y: 20088 },
                { x: new Date(2016, 4, 1),  y: 20234 },
                { x: new Date(2016, 5, 1),  y: 29034 },
                { x: new Date(2016, 6, 1), y: 30487 },
                { x: new Date(2016, 7, 1), y: 32523 },
                { x: new Date(2016, 8, 1),  y: 20234 },
                { x: new Date(2016, 9, 1),  y: 27234 },
                { x: new Date(2016, 10, 1),  y: 33548 },
                { x: new Date(2016, 11, 1), y: 32534 }
            ]
        }]
    };
  $(".container").CanvasJSChart(options);

}