(() => {
    let titleId = Math.floor(Math.random() * data.data.length)
    let answer = data.data[titleId]

    let formNode = document.querySelector('form')
    formNode.addEventListener('submit', (event) => {
        if (answer.author == event.target[0].value
            // todo map genres
            //&& answer.genre === event.target[1].value
            ) {
            console.log('Correct!')
        }
        else {
            event.preventDefault()
            console.log('Incorrect!')
            window.alert('Грешно!')
        }
    })

    formNode.children[0].children[0].textContent = data.titles[answer.title]

    let authorsNode = formNode.children[1].children[1]
    let gendesNode = formNode.children[2].children[1]

    let optionNode = document.createElement('option')


    for (let i = 0; i < data.authors.length; i++) {
        optionNode.value = i
        optionNode.textContent = data.authors[i]
        authorsNode.add(optionNode.cloneNode(true))
    }


    for (let i = 0; i < data.genres.length; i++) {
        optionNode.value = i
        optionNode.textContent = data.genres[i]
        gendesNode.add(optionNode.cloneNode(true))
    }
})()