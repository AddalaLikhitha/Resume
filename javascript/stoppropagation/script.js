let parent=document.getElementById("parent")
let child=document.getElementById("child")

parent.addEventListener('click',() =>{
    console.log("parent clicked")
},true)

child.addEventListener('click',() =>{
    console.log("child clicked")
})