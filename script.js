const notesContainer=document.querySelector(".notes-container")
const createBtn=document.querySelector(".btn")
let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes")
}
const button=document.createElement("button");
button.classList.add("btn")
button.innerHTML="Show Notes";
const body=document.querySelector("body");
notesContainer.appendChild(button)
button.addEventListener("click",()=>{
    showNotes();
})


createBtn.addEventListener("click",()=>{
  let inputBox=document.createElement("p");
  let img =document.createElement("img");
  inputBox.className="input-box";
  inputBox.setAttribute("contenteditable","true");
  img.src="images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})



function updateStorage (){
    localStorage.setItem("notes",notesContainer.innerHTML)
}
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName=="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName=="p"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event,Key=="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})