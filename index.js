
var divv = document.createElement("div");
divv.setAttribute("class","content");
divv.innerHTML=10;

setTimeout(()=>{
    divv.innerHTML=10;
    setTimeout(()=>{
        divv.innerHTML=9;
        setTimeout(()=>{
            divv.innerHTML=8;
            setTimeout(()=>{
                divv.innerHTML=7;
                setTimeout(()=>{
                    divv.innerHTML=6;
                    setTimeout(()=>{
                        divv.innerHTML=5;
                        setTimeout(()=>{
                            divv.innerHTML=4;
                            setTimeout(()=>{
                                divv.innerHTML=3;
                                setTimeout(()=>{
                                    divv.innerHTML=2;
                                    setTimeout(()=>{
                                        divv.innerHTML=1;
                                        setTimeout(()=>{
                                            divv.innerHTML="Happy Independence Day";
                                            divv.style.left="400px";
                                        
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);


document.body.append(divv); 

