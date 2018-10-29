// https://randomuser.me/api/
const url = "https://randomuser.me/api/";
const btn = document.querySelector(".footer");

btn.addEventListener("click", function() {

    fetch(url).then(function(response) {
        if (checkResponse(response)) {
            return response.json();
        } else {
            reject("Problem with Response-Object.");
        }
    }).then(function(data) {
        updateView(data);
    }).catch(function(error) {
        console.log("Error Connection problems");
        console.log(error);
    });

});

function checkResponse(response) {
    if (!response.ok) {
        console.log(response.status + '-' + response.statusText);
        return false;
    } else {
        return true;
    }
}

function updateView(data) {
    let newUser = extractData(data);
    console.log(newUser);

    document.getElementById("fullname").innerText = newUser.fullname;
    document.getElementById("city").innerText = newUser.city;
    document.getElementById("email").innerText = newUser.email;
    document.getElementById("username").innerText = newUser.username;
    document.getElementById("avatar").src = newUser.imgUrl;
}

function extractData(object) {
    let randomUser = {
        fullname: "",
        username: "",
        email: "",
        city: "",
        imgUrl: ""
    }
    for (var i = 0; i < object.results.length; i++) {
        const currentUser = object.results[i];
        randomUser.email = currentUser.email;
        randomUser.city = currentUser.location.city;
        randomUser.fullname = currentUser.name.first + ' ' + currentUser.name.last;
        randomUser.username = currentUser.login.username;
        randomUser.imgUrl = currentUser.picture.large;
    }
    return randomUser;
}