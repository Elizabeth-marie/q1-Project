document.addEventListener('DOMContentLoaded', function() {
  console.log("it's working")

  //Favorite Button Modall
  var elements = document.querySelectorAll('.modal')
  var instances2 = M.Modal.init(elements)

  //parallax container initialization
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems)

  //dropdown button initialization
  var elems1 = document.querySelectorAll('.dropdown-trigger');
  var instances1 = M.Dropdown.init(elems1)

  //mobile menu dropdown initialization
  var elem2 = document.querySelectorAll('.sidenav');
  var instances3 = M.Sidenav.init(elem2)

  // Variables
  let favoriteB = document.getElementById("favoriteB")
  let favoriteQuote = ''
  let favQuote = ''
  let arr = []
  let funnyArr = []
  let courageArr = []
  let truthArr = []
  let loveArr = []

  //event listener for drop down
  let dropdown = document.getElementById("dropdown1")
  let title = document.getElementById("Genre")
  let cardText = document.getElementById("randomQuote")


  dropdown.addEventListener('click', function() {
    title.innerText = event.target.innerText


    // Random quotes based on categories
    let q = arr[Math.floor(Math.random() * arr.length)]

    let funnyQ = funnyArr[Math.floor(Math.random() * funnyArr.length)]

    let courageQ = courageArr[Math.floor(Math.random() * courageArr.length)]

    let truthQ = truthArr[Math.floor(Math.random() * truthArr.length)]

    let loveQ = loveArr[Math.floor(Math.random() * loveArr.length)]

    //display random quotes on card based on categories

    if (title.innerText === 'Motivation') {

      cardText.innerText = q

    } else if (title.innerText === 'Funny') {

      cardText.innerText = funnyQ

    } else if (title.innerText === 'Courage') {

      cardText.innerText = courageQ

    } else if (title.innerText === 'Truth') {

      cardText.innerText = truthQ

    } else if (title.innerText === 'Love') {

      cardText.innerText = loveQ
    }

    //unhide favorite Button
    let quoteCard = document.getElementById('cardPanel')
    quoteCard.hidden = false

  })




  //MOTIVATION QUOTES
  axios.get('https://favqs.com/api/quotes/?filter=motivation&type=tag', {
      headers: {
        authorization: `Token token="31df3f9a7d60256ca1294d7f49bbf678"`
      }
    })

    .then(function(response) {
      let quotes = response.data
      let newQuote = quotes.quotes

      //MOTIVATION create array with quote + author from response
      // let arr = []
      for (let i = 0; i < newQuote.length; i++) {
        arr.push(`"` + newQuote[i].body + `"` + " -" + newQuote[i].author)
      }


    })


  //FUNNY QUOTES
  axios.get('https://favqs.com/api/quotes/?filter=funny&type=tag', {
      headers: {
        authorization: `Token token="31df3f9a7d60256ca1294d7f49bbf678"`
      }
    })

    .then(function(response) {
      let funnyResponse = response.data.quotes

      for (let i = 0; i < funnyResponse.length; i++) {

        funnyArr.push(`"` + funnyResponse[i].body + `"` + " -" + funnyResponse[i].author)
      }

    })


  //COURAGE Quotes
  axios.get('https://favqs.com/api/quotes/?filter=courage&type=tag', {
      headers: {
        authorization: `Token token="31df3f9a7d60256ca1294d7f49bbf678"`
      }
    })

    .then(function(response) {
      let courageResponse = response.data.quotes

      for (let i = 0; i < courageResponse.length; i++) {

        courageArr.push(`"` + courageResponse[i].body + `"` + " -" + courageResponse[i].author)
      }
    })

  //TRUTH Quotes
  axios.get('https://favqs.com/api/quotes/?filter=truth&type=tag', {
      headers: {
        authorization: `Token token="31df3f9a7d60256ca1294d7f49bbf678"`
      }
    })

    .then(function(response) {
      let truthResponse = response.data.quotes

      for (let i = 0; i < truthResponse.length; i++) {

        truthArr.push(`"` + truthResponse[i].body + `"` + " -" + truthResponse[i].author)

      }
    })

  //TRUTH Quotes
  axios.get('https://favqs.com/api/quotes/?filter=love&type=tag', {
      headers: {
        authorization: `Token token="31df3f9a7d60256ca1294d7f49bbf678"`
      }
    })

    .then(function(response) {
      let loveResponse = response.data.quotes
      for (let i = 0; i < loveResponse.length; i++) {

        loveArr.push(`"` + loveResponse[i].body + `"` + " -" + loveResponse[i].author)

      }
    })


  //favorite button event listener to add to local storage

  favoriteB.addEventListener("click", function() {

    favQuote = cardText.innerText

    favoriteQuote = JSON.parse(localStorage.getItem('favoriteQuote'))


    if (favoriteQuote === null) {

      favoriteQuote = [`${favQuote}`]

    } else {

      favoriteQuote.push(favQuote)

    }



    localStorage.setItem('favoriteQuote', JSON.stringify(favoriteQuote))

  })

  function unHide() {

  }

})
