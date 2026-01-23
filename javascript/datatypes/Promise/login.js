function login(value){
    return new Promise((res,rej)=>{
        res(value)
    })
}
function bookaTv(price){
    return new Promise((res,rej)=>{
        res(price)
    })
}
function address(value){
    return new Promise((res,rej)=>{
        res(value)
    })
}
function payment(total){
    return new Promise((res,rej)=>{
        res(total)
    })
}
function place(order){
    return new Promise((res,rej)=>{
        res(order)
    })
}
function order(delivery){
    return new Promise((res,rej)=>{
        res(delivery)
    })
}
login("successfully Login")
.then(result=>{
    console.log(result)
    
})