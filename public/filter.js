const filterColor = document.querySelector('.colors')
const filterBrand = document.querySelector('.brand')

const filterButton = document.querySelector('.search')
const filterDisplay = document.querySelector('.search-result')

const filterTemplateText = document.querySelector('.filterTemplate');
const filterTemplate =  Handlebars.compile(filterTemplateText.innerHTML)

axios
    .get('http://api-tutor.herokuapp.com/v1/colors')
    .then(function(result){
        filterColor.innerHTML = filterTemplate({filter: result.data});
    });

axios
    .get('http://api-tutor.herokuapp.com/v1/makes')
    .then(function(result){
        filterBrand.innerHTML = filterTemplate({filter: result.data});       
    });


    var theColorValue  = '';
    var theBrandValue  = '';

    filterColor.addEventListener('change', function(e) {
        theColorValue = e.target.value

    });

    filterBrand.addEventListener('change', function(e) {
        theBrandValue = e.target.value

    });

filterButton.addEventListener('click', function(){
    axios
    .get(`http://api-tutor.herokuapp.com/v1/cars/make/${theBrandValue}/color/${theColorValue}`)
    .then(function(result){
        console.log(result.data)
        filterDisplay.innerHTML = filterTemplate({filters: result.data});

    });

})