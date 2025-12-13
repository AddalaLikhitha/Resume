let addEmpBtn=document.getElementById("addEmpBtn")

addEmpBtn.addEventListener("click",(e)=>{
    let allEmps=JSON.parse(localStorage.getItem("emps")) || []

    e.preventDefault()

    let newEmp={
        name:document.getElementById("empName").value,
        email:document.getElementById("empEmail").value,
        salary:document.getElementById("empSal").value
    }
    // console.log(newEmp)
    fetch("/api/create_emp/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newEmp)
    }).then(res=>res.json()).then(res=>{
        console.log(res)
        allEmps.push(res.data)
        localStorage.setItem("emp",JSON.stringify(allEmps))
        // alert("emp added to ls")
    })
})