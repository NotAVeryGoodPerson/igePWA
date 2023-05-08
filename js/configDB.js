
/*var firebaseConfig = {
    apiKey: "AIzaSyDzWwd79N9reazofPCxHMZJ9WBqe13-zS0",
    authDomain: "dige-690af.firebaseapp.com",
    databaseURL: "https://dige-690af-default-rtdb.firebaseio.com",
    projectId: "dige-690af",
    storageBucket: "dige-690af.appspot.com",
    messagingSenderId: "275899190998",
    appId: "1:275899190998:web:a9d3f7ffcdc36472cd0377",
    measurementId: "G-4FR13908D5"
}; "<div class='contact-image'>" + "<img src='../img/EdigioLogo.png' alt='contact' thumb></div><div class='contact-title'>" + childData.name + "</div>"
//inicializace db
firebase.initializeApp(firebaseConfig);

//Odkaz na db
var addhomelessFriendFormDB = firebase.database().ref('addHomelessFriendForm')


document.getElementById('addHomelessFriendForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var lastname = getElementVal('lastname');
    var nickname = getElementVal('nickname');
    var story = getElementVal('story');
    var age = getElementVal('age')
    console.log(name, lastname, nickname, story, age)



    saveParameters(name, lastname, nickname, story, age)

    document.querySelector(".alert").style.display = "block";

    //  pridacia hlaska
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   RESET pridania
    document.getElementById("addHomelessFriendForm").reset();
}
const saveParameters = (name, lastname, nickname, story, age) => {
    var addHomeless = addhomelessFriendFormDB.push()
    addHomeless.set({
        name: name,
        lastname: lastname,
        nickname: nickname,
        story: story,
        age: age

    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}*/