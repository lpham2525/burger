document.getElementById('addBurger').addEventListener('click', event => {
  console.log('hi')
  event.preventDefault()
  axios.post('/burgers', {
    burger_name: document.getElementById('burgerInput').value
  })
    .then(({ data }) => {
      const burgerElem = document.createElement('li')
      burgerElem.innerHTML = `
      ${document.getElementById('addBurger').value}
      <button class="eat" data-id="{{this.id}}">Devour!</button>
      `
      document.getElementById('burgerList').append(burgerElem)
    })
    .catch(err => console.log(err))
})

document.addEventListener('click', event => {
  if (event.target.className === 'eat') {
    axios.put(`/burgers/${event.target.dataset.id}`, { devoured: 1 })
      .then(({ data }) => {
        const devElem = document.createElement('li')
        devElem.innerHTML = `${event.target.value}
          `
        document.getElementById('eaten').append(devElem)
      })
      .catch(err => console.log(err))
  }
})