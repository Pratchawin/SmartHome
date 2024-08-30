function addZero(time){
    var add_i;
    if(time<10){
        add_i="0"+time;
        return add_i;
    }else{
        return time;
    }
}

function showTime(){
    var hTxt=document.getElementById("timeHour");
    var mTxt=document.getElementById("timeMinute");
    var secTxt=document.getElementById("timeSecond");
    const d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    hTxt.innerHTML=addZero(h);
    mTxt.innerHTML=addZero(m);
    secTxt.innerHTML=addZero(s);
    if(d.getHours()==24){
        console.log("reload page")
        location.reload();
    }
}
setInterval(function(){
    showTime();
},1000);

function showDate(){
    let monthArr= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var showDateEle=document.getElementById("showDate");
    var showMonthEle=document.getElementById("showMonth");
    var showYearEle=document.getElementById("showYear")
    var dateObj=new Date();
    showDateEle.innerHTML=dateObj.getDate();
    showMonthEle.innerHTML=monthArr[dateObj.getMonth()];
    showYearEle.innerHTML=dateObj.getFullYear();
}
showDate();

/* function changeBackHome(){
    window.location.href="../index.html"
} */

$(document).ready(function(){
    $("#arClock")
    .hide()
    .fadeIn(1000)
})

let bed_status=0;
function bedroom_right(){
    fetch("http://192.168.1.1/led7on",{
        method:"GET",
        mode:"no-cors",
        credentials:"include",
        headers:{
            "Content-type":"application/json"
        }
    })
    bed_status+=1;
    console.log("bed_status:",bed_status)
    if(bed_status==2){
        fetch("http://192.168.1.1/led7off",{
            method:"GET",
            mode:"no-cors",
            credentials:"include",
            headers:{
                "Content-type":"application/json"
            }
        })
        bed_status=0;
    }
}

function hideTimeSet(){
    document.getElementById("timeSet").style.display="none";
}


let videoList=["P62lstrwuZk","GytyA6ujAa8","K_jBdpKZk7k","fZmF_kpIId4","3zb3t4FglmM","jS5iZXOn-a4","luPQHvfyUu4","d58dAfkkP3s","HZQyJHpo-ag","AJEoJYgktb4","6B84ng6UAKI","F5ep6n5oSqQ","wqJsZYibWcI","XqQMisU5En8","ZRQXFiAc8yQ","w3POF1Coq5U","AJGM_ScVgr8","BTctCmUiNX8"];
let vedeoTage="";
function loopVedioLink(){
    for(let i=0; i<=videoList.length-1; i++){
        var data=videoList[i];
        vedeoTage+="<div id='musicBx"+i+"' class='ar-music-bx'><iframe class='set-ifram-tage' id='iframTage"+i+"' src='https://www.youtube.com/embed/"+data+"?autoplay=0&mute=1'></iframe></div>";
    }
    document.getElementById("videoID").innerHTML=vedeoTage;
}
loopVedioLink();
let count=0;
function extractScreen() {
    document.getElementById("clockArea").style.display="none";
    document.getElementById("areaLeftContent").style.width="1500px";
    document.getElementById("searchInp").style.width="500px";
    document.getElementById("videoID").style.display="flex";
    document.getElementById("videoID").style.textAlign="center";
    document.getElementById("videoID").style.flexWrap="wrap";
    count+=1;
    for(let num=0;num<=videoList.length-1;num++){
        document.getElementById("iframTage"+num).style.width="100%";
        document.getElementById("iframTage"+num).style.height="300px";
        document.getElementById("iframTage"+num).style.border="none";
        document.getElementById("musicBx"+num).style.width="30%";
        document.getElementById("musicBx"+num).style.marginRight="20px";
        document.getElementById("musicBx"+num).style.marginLeft="20px";
        document.getElementById("musicBx"+num).style.marginTop="10px";
    }
    if(count==2){
        //ย่อหน้าจอ
        document.getElementById("areaLeftContent").style.width="350px";
        document.getElementById("clockArea").style.display="block";
        document.getElementById("searchInp").style.width="80%";
        document.getElementById("videoID").style.display="block";
        for(let num=0;num<=videoList.length-1;num++){
            document.getElementById("musicBx"+num).style.width="100%";
            document.getElementById("iframTage"+num).style.height="173px";
            document.getElementById("musicBx"+num).style.marginRight="0px";
            document.getElementById("musicBx"+num).style.marginLeft="0px";
            document.getElementById("musicBx"+num).style.marginTop="0px";
        }
        count=0;
    }
}

function saveTime(){
    let inpTimeValue=document.getElementById("inpTimeVal").value;
    document.getElementById("timeAlert").innerHTML=inpTimeValue;
    document.getElementById("timeAlert").style.display="block";
    console.log(inpTimeValue)
    document.getElementById("btnCancleTime").style.display="block";
    /* document.getElementById("timeSetTxt").innerHTML=inpTimeValue; */
}

function btnCancle(){
    document.getElementById("timeAlert").style.display="none";
    document.getElementById("btnCancleTime").style.display="none";
}

let btnCount=0;
function showSetTimeBox(){
    document.getElementById("alertBox").style.display="block";
    btnCount+=1;
    if(btnCount==2){
        document.getElementById("alertBox").style.display="none";
        btnCount=0;
    }
}