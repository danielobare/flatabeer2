// Code here

function commWithServer() {
    fetch('http://localhost:3000/beers/1')

        .then(result => result.text())
        .then(text => {
            let main = document.getElementById('description')
            main.innerHTML = text
            console.log(text)
        });
}

commWithServer()

// function imageGoesHere() {
//     fetch('http://localhost:3000/beers/1')

//         .then(result => result.text())
//         .then(img => {
//             let img = document.getElementById('beer-image')
//             img = "https://i.ibb.co/wQ4G0w1/flatiron-brew.png"
//             return img
//         });
// }

// imageGoesHere()

// function yourReview() {
//     let main = document.getElementById('review')
//     main.innerHTML = text
//     console.log(document.getElementById('your-review').innerHTML.text)
// }
// document.addEventListener('DOMContentLoaded', () => {
//     let btn = document.getElementById('actualbutton');
//     btn.addEventListener('click', () => {
//         yourReview();
//     })
// })

// yourReview()



