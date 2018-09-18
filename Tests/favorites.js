document.addEventListener('DOMContentLoaded', function(){

//variables
let paragraph = document.getElementById("favorite")
let list = document.getElementById('list')
let row = document.getElementById('row')

//get quote from local storage and parse it
  var favoriteString = JSON.parse(localStorage.getItem('favoriteQuote'))

//loop over Quotes
  for( let i = 0; i < favoriteString.length; i++ ) {

    //each time it loops, create a new row to provide space between each quote
    let newRow = document.createElement('div')

    newRow.setAttribute('class', 'row')

    row.appendChild(newRow)

    //Every loop create a column, put quote[i] in column, and append it to the row
    let column = document.createElement('div')

    column.setAttribute('class', "col s6 offset-s3")

    column.innerText = favoriteString[i]

    row.appendChild(column)

  }


})
