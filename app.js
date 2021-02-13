(() => {
    let titleId = Math.floor(Math.random() * data.data.length)
    let answer = data.data[titleId]

    let formNode = document.querySelector('form')
    formNode.addEventListener('submit', (event) => {
        if (answer.author === event.target[0].value
            && answer.genre === event.target[1].value) {
            console.log('Correct!')
        }
        else {
            event.preventDefault()
            console.log('Incorrect!')
            window.alert('Грешно!')
        }
    })

    formNode.children[0].children[0].textContent = answer.title

    let authorsNode = formNode.children[1].children[1]
    let gendesNode = formNode.children[2].children[1]

    let optionNode = document.createElement('option')

    data.authors.forEach(author => {
        optionNode.value = author
        optionNode.textContent = author
        authorsNode.add(optionNode.cloneNode(true))
    })

    data.genres.forEach(genre => {
        optionNode.value = genre
        optionNode.textContent = genre
        gendesNode.add(optionNode.cloneNode(true))
    })
})()