// Code here

function commWithServer() {
    fetch('http://localhost:3000/beers/1')

        .then(result => result.text())
        .then(text => {
            let main = document.getElementById('description')
            main.innerHTML = text
            var jsonString = '{"description":""}';
            var jsonPretty = JSON.stringify(JSON.parse(jsonString));
            console.log(jsonPretty)
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


// yourReview()

function reviews2() {
    fetch('http://localhost:3000/beers/1')

        .then(result => result.text())
        .then(text => {
            let main = document.getElementById('your-review')
            main.innerHTML = text
            var jsonString = '{"reviews":""}';
            var jsonPretty = JSON.stringify(JSON.parse(jsonString));
            console.log(jsonPretty)
        });

        document.addEventListener('DOMContentLoaded', () => {
            let btn = document.getElementById('actualbutton');
            btn.addEventListener('click', () => {
                reviews2();
            })
        })
}

reviews2()



