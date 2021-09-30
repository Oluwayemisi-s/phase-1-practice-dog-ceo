console.log('%c HI', 'color: firebrick')
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// const imgDiv = document.querySelector("div#dog-image-container")
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    let imgDiv = document.querySelector("div#dog-image-container")
    let index = 0
    console.log(imgDiv) 
    fetch (imgUrl)
        .then (resp => resp.json())
        .then (dogs => {
            //console.log(dogs)
            dogs.message.forEach(url => {
                console.log(url)
                let dogImage = document.createElement('img')
                dogImage.src = url
                dogImage.id = index++
                //document.querySelector("div#dog-image-container").append(dogImage)
                imgDiv.append(dogImage)
            })
        }) 

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const ul = document.querySelector('#dog-breeds')
    fetch(breedUrl)
    .then (resp => resp.json())
    .then (breeds => {
        console.log(breeds)
        //ul.replaceChildren()
        for (let key in breeds.message){
            console.log(key)
            let li = document.createElement('li')
            ul.append(li)
            li.textContent = key
            li.addEventListener('click', () => li.style.color ='red')
        }

        let dropdown = document.querySelector('#breed-dropdown')
        dropdown.addEventListener('change', (e) => {
            let letter = dropdown.value
            ul.replaceChildren()
            for (let key in breeds.message){
                if (key.startsWith(letter)){
                //ul.replaceChildren()
                    let li = document.createElement('li')
                    li.textContent = key
                    ul.append(li)
                    //console.log(li)
            }
            }
        
        })
    })

})

