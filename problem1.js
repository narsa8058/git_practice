let num=17  
count=0
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }
    if(count==1){
        console.log("Yes")
    }else{
        console.log("No")
    }