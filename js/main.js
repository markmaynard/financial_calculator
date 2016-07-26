// MAIN

var duration = 1500;
var color = d3.scale.category10();
var defaultCurrentAge = 25;
var defaultRetirementAge = 65;
var defaultInflation = 2; // (%) 
var defaultRateOfReturn = 6.0; // (%)
var defaultFee = 1.2; // (%) 
var defaultStartingValue = 20000; // ($)
var defaultContributions = 500; // frequence set by var contributionFreqPerYear
var defaultContribFreqPerYear = 12; // 12 -> monthly, 1 -> yearly, 3 -> quarterly
var defaultCompoundFreqPerYear = 1; // 12 -> monthly, 1 -> yearly, 3 -> quarterly
var defaultFeeFreqPerYear = 1; // 12 -> monthly, 1 -> yearly, 3 -> quarterly


var portfolios = d3.map(); // {name: Portfolio class}

/* Initialize

Adds a bootstrap container-fluid to
the div selector as well as various
inputs: sliders for current
age and retirement age as well as
a text input for portfolio name

Parameters:
===========
- div : html selector
        selector into which to add
        html
*/

function init(div) {

    var tmp = d3.select(div);

    var header = tmp.append("div")
        .attr("class","container-fluid")
        .attr("id","container")
      .append("div")
        .attr("class","row")

    var col1 = header.append('div')
        .attr('class','col-sm-3')
    
    currentAgeSlider = new Slider(); 
    currentAgeSlider.add(col1, 'Current age', null, 20, 100, 1, defaultCurrentAge);

    var col2 = header.append('div')
        .attr('class','col-sm-3')
    
    retirementAgeSlider = new Slider(); 
    retirementAgeSlider.add(col2, 'Retirement age', null, 40, 100, 1, defaultRetirementAge);

    var col3 = header.append('div')
        .attr('class','col-sm-3')
    
    inflationSlider = new Slider(); 
    inflationSlider.add(col3, 'Inflation', '%', 0, 10, .1, defaultInflation);


    var col4 = header.append("div")
        .attr("class","col-sm-3")

    col4.append('label')
        .attr('class','portfolioLabel')
        .text('Portfolio name') 
    
    var portName = col4.append('div')
        .attr('class','input-group')

    portName.append('input')
        .attr('type','text')
        .attr('class','form-control')
        .attr("id","portfolioName")
        .attr("value","401(k)")
        .attr('placeholder','401(K)')
        .attr("required",'')

    portName.append('span')
        .attr('class','input-group-btn')
      .append('button')
        .attr('class','btn btn-info')
        .attr("onclick","addPortfolio()")
        .attr('type','button')
        .html('<i class="fa fa-plus fa-lg" aria-hidden="true"></i>');

    addPortfolio();
}


