var count=1;
document.querySelector('.btn-1').addEventListener("click",(e)=>{
    if(count>2)
    {
        count--;
    }else{
        count=4;
    }
    document.querySelector('.container-two-image').src="./Images/image"+count+".jpg"
})

document.querySelector('.btn-2').addEventListener("click",(e)=>{
    if(count==4)
    {
        count=1;
    }else{
        count++;
    }
    document.querySelector('.container-two-image').src="./Images/image"+count+".jpg"
})