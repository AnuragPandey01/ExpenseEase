import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import app from "./firebaseConfig.js"

const auth = getAuth(app)

document.getElementById("signupButton").onclick = () => {

    if(validateSignupForm()){
        let name = document.getElementById("username").value;
        let email = document.getElementById("signupEmail").value;
        let password = document.getElementById("signupPassword").value;

        createUserWithEmailAndPassword(auth,email,password)
        .then( (userCredentials) => {
            let user = userCredentials.user
            userCredentials.displayName = name
            alert("loggedIn"+ user.displayName)
        })
        .catch((error) => {
            alert(error.message)
        })

    }
}

document.getElementById("loginButton").onclick = () => {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            alert("user in!")
        })
        .catch((error) => {
            alert(error.message)
        });
}


function validateSignupForm(){

    let name = document.getElementById("username").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("signupConfirmPassword").value;

    if(name.length < 3){
        alert("username is too short")
        return false
    }else if(password !== confirmPassword){
        alert("password and confirm password must be same")
        return false
    }
    return true
}
