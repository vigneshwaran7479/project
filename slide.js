let arr=["./image/scard1.jpg","./image/scard5.jpg",
"./image/scard3.jpg","./image/scard4.jpg",
"./image/v3.jpg","./image/v4.jpg","./image/scard6.jpg","./image/scard7.jpg"]

let x=document.getElementsByClassName("a11")

let count=1;
function fun()
{
    count++
    let y=document.getElementsByClassName("fa-sharp")
    count=count%arr.length
    for(let i=0;i<x.length;i++){
        let cc=(count+i)%arr.length
        x[i].src=arr[cc]
}
for (let i=0;i<y.length;i++){ 
    if(i==count){
        y[i].classList.remove('fa-regular')
        y[i].classList.add('fa-solid')
        

    }
    else{
        y[i].classList.add('fa-regular')
        y[i].classList.remove('fa-solid')
}
}
};
let fun2=num=>{count=num-1;fun()};
setInterval(fun,3000)


