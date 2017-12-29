{
//banner栏的js效果
    let imgs=document.querySelectorAll(".banner-center");
    let pagers=document.querySelectorAll(".lunbo-box ul li");
    let banners=document.querySelector(".banner");
    let prebtn=document.querySelector(".left-jiantou");
    let nextbtn=document.querySelector(".right-jiantou");
    console.log(imgs);
    console.log(pagers);
    console.log(nextbtn);
    console.log(prebtn);
    console.log(banners);
    pagers.forEach(function(ele,index){
        ele.onclick=function(){
            for(var i=0;i<pagers.length;i++){
                pagers[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    var n=0;
    function Myfunction(dir="R"){
        if(dir === "R"){
            n++;
            if(n === imgs.length){
                n=0;
            }
        }else if(dir === "L"){
            n--;
            if(n === -1){
                n=imgs.length-1;
            }
        }
        for(var i=0;i<imgs.length;i++){
            pagers[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        pagers[n].classList.add("active");
        imgs[n].classList.add("active");
    }
    var st=setInterval(Myfunction,3000);
    banners.onmouseover=function(){
        clearInterval(st);
    };
    banners.onmouseout=function(){
        st=setInterval(Myfunction,3000);
    };
    let flag=true;
    prebtn.onclick=function(){
        if(flag){
            flag=false;
            Myfunction("L");
        }
    };
    nextbtn.onclick=function(){
        if(flag){
            flag=false;
            Myfunction();
        }
    };
    imgs.forEach(function(ele,index){
        ele.addEventListener("transitionend",function(){
            flag=true;
        })
    })
}