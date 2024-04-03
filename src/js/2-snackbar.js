import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector("input[type=number]");
const fulfilled = document.querySelector("input[value=fulfilled]");
const rejected = document.querySelector("input[value=rejected]");
const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

// const time = input.value; 

function handleSubmit(event) {
    event.preventDefault();
    const delay = parseInt(input.value);
    const isSuccess = fulfilled.checked
    const promise = new Promise((fulfilled, rejected) => {
        setTimeout(() =>{
     
        if (isSuccess) {
            fulfilled(delay);
        } else {
            rejected(delay);
        }
        }, delay);
    });
    
    promise.then(
        delay => {
            iziToast.show({
                message: `✅ Fulfilled promise in ${delay}ms`,
                messageColor: "#fff",
                position: "topRight",
                backgroundColor: "#59a10d",
                progressBar: false,
                close: false,
                timeout: 5000,

                 
            });
        
        }
    )
      .catch(delay => {
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
