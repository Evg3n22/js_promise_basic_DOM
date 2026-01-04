"use strict";
// write your code here
const logo = document.querySelector(".logo");
const promise1 = new Promise((resolve, reject)=>{
    logo.addEventListener("click", ()=>{
        resolve("Promise was resolved!");
    });
});
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error("Promise was rejected!"));
    }, 3000);
});
promise1.then((message)=>{
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
});
promise2.catch((error)=>{
    const errorElement = document.createElement("div");
    errorElement.classList.add("message", "error-message");
    errorElement.textContent = error;
    document.body.appendChild(errorElement);
});

//# sourceMappingURL=index.f75de5e1.js.map
