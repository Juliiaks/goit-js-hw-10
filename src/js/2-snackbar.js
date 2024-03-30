import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector("input[type=number]");
const fullField = document.querySelector("input[value=fulfilled]");
const rejected = document.querySelector("input[value=rejected]");
const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

// const time = input.value; 

function handleSubmit(event) {
    event.preventDefault();
    const delay = parseInt(input.value);
    const isSuccess = fullField.checked
    const promise = new Promise((resolve, reject) => {
     
        if (isSuccess) {
            setTimeout(() => resolve(delay), delay)
        } else {
            setTimeout(() => reject(delay), delay)
        }
    });
    
    promise.then(
        (delay) => {
            iziToast.show({
                message: `✅ Fulfilled promise in ${delay}ms`,
                messageColor: "#fff",
                position: "topRight",
                backgroundColor: "#59a10d",
                progressBar: false,
                close: false,
                timeout: 5000,

                 
            });
            
        
        },
        (delay) => {
            iziToast.show({
                message: `❌ Rejected promise in ${delay}ms`,
                messageColor: "#fff",
                position: "topRight",
                backgroundColor: "#ef4040",
                progressBar: false,
                close: false,
                timeout: 5000,
            });
        }
            
    );
    form.reset();
}
