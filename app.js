const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const array = Array.from({ length: 50 }, (value, index) => index + 1)
  let html = ``
  for (const number of array) {
    html += `<p>${number} Soy ${number % 2 === 0 ? 'Par!' : 'Impar!'}</p>\n`
  }
  res.send(html)
})

app.listen(3000, () => console.log('Listening on port 3000!'))
