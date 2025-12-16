let btn = document.getElementById("btn")
let input = document.querySelector("[type='text']")
let body = document.getElementById("body")





let x = JSON.parse(localStorage.getItem("task")) || [];

btn.onclick = (e)=>{
    
    e.preventDefault()

    if(input.value != ""){
        var newarray =  addTaskToArray(input.value)
        localStorage.setItem("task" , JSON.stringify(x))
    }
    if(localStorage.length > 0 && input.value != ""){
        createHTML(newarray)
        input.value = ""
    }
}
window.onload = function(){
    
    x.forEach((a)=>{
        createHTML(a)
    })
}
function addTaskToArray(task){
    let dataTask = {
        id: Date.now() ,
        title: task
    }
    x.push(dataTask)
    return dataTask
}

function createHTML(a){
        let div = document.createElement("div")
        let p = document.createElement("p")
        let button = document.createElement("button")

        let pCont = document.createTextNode(a.title)
        let buttonCont = document.createTextNode(`Delete`)
        
        

        button.appendChild(buttonCont)
        p.appendChild(pCont)

        div.appendChild(p)
        div.appendChild(button)

        body.appendChild(div)

        button.onclick = () => {
            x = x.filter((z) => {
                return z.id !== a.id 
            })
            localStorage.setItem("task" , JSON.stringify(x))

            div.remove()
        }
}


//********************************************************/
//********************************************************/
//              اللي تحت دي تجربه باأت بالفشل  
//                          |||
//                           V


// let btn = document.getElementById("btn")
// let input = document.querySelector("[type='text']")
// let body = document.getElementById("body")

// let x = [] ;

// function addproduct(e){

//         e.preventDefault()

//     if(input.value != ""){
//         x.push(input.value)
//         localStorage.setItem("task" , JSON.stringify(x))
//     }
//     if(localStorage.length > 0 && input.value != ""){
//         createHTML(input.value)
//         input.value = ""
//     }
// }
// function createHTML(a){
//     body.innerHTML += `<div>
//                 <p>${a}</p>
//                 <button onclick="deleteproduct('${a}')" >Delete</button>
//             </div>`
// }


// function deleteproduct(a){
//     x.splice(a , 1)
//     localStorage.setItem("task" , JSON.stringify(x))
    
//     body.innerHTML = ""
//     x.forEach((task) => createHTML(task))

// }

// window.onload = function(){  
//     x.forEach((a)=>{
//         createHTML(a)
//     })
// }

//****************************************************/
//****************************************************/

// let input = document.querySelector("[type='text']")
// let btn = document.getElementById("btn")
// let body = document.getElementById("body")

// // add task
// btn.onclick = function(){

// }