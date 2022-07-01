// Code here

function commWithServer() {
    fetch('http://localhost:3000/beers/1')

        .then(result => result.text())
        .then(text => {
            let main = document.getElementById('update-beer')
            main.innerHTML = text
            var jsonString = '{"description":""}';
            var jsonPretty = JSON.stringify(JSON.parse(jsonString));
            console.log(jsonPretty)
        });
        document.addEventListener('DOMContentLoaded', () => {
            let btn = document.getElementById('beerinput');
            btn.addEventListener('click', () => {
                commWithServer();
            })
        })
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



function fetchImage() {
    const imageUrl = "https://i.ibb.co/wQ4G0w1/flatiron-brew.png";
    fetch(imageUrl)
    .then(response => response.blob())
        .then(imageBlob => {
            const imageObjectURL = URL.createObjectURL(imageBlob);
            console.log(imageObjectURL);
        });
}

fetchImage()
