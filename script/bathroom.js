var check_status=1;
function change_struc() {
    check_status+=1;
    if(check_status==1){
        document.getElementById("water_structure").src="../image/bathroom/water_bluprint.png";
    }
    if(check_status==2){
        document.getElementById("water_structure").src="../image/bathroom/n1.png";
        check_status=0;
    }
    console.log(check_status)
}

function check_water_pipe_status() {
    axios.get("http:localhost:5000/bathroom/water_pipe_controller",{
        method:"GET",
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        console.log(res);
        if(res.data["pipe1_status"]==0){
            document.getElementById("water_structure").src="../image/bathroom/n3.png";
            document.getElementById("pipe_status1").className="fa-solid fa-xmark";
            document.getElementById("pipe_status1").style.color="red";
            document.getElementById("pipe_status_txt1").innerHTML="ท่อน้ำจุดที่ 1 มีการรั่วไหล"
            document.getElementById("btn_change_structure").style.display="none";
        }else{
            console.log("1 การทำงานปกติ");
        }
        if(res.data["pipe2_status"]==0){
            document.getElementById("water_structure").src="../image/bathroom/n5.png";
            document.getElementById("pipe_status2").className="fa-solid fa-xmark";
            document.getElementById("pipe_status2").style.color="red";
            document.getElementById("pipe_status_txt2").innerHTML="ท่อน้ำจุดที่ 2 มีการรั่วไหล"
            document.getElementById("btn_change_structure").style.display="none";
        }else{
            console.log("2 การทำงานปกติ");
        }
        if(res.data["pipe3_status"]==0){
            document.getElementById("water_structure").src="../image/bathroom/n2.png";
            document.getElementById("pipe_status3").className="fa-solid fa-xmark";
            document.getElementById("pipe_status3").style.color="red";
            document.getElementById("pipe_status_txt3").innerHTML="ท่อน้ำจุดที่ 3 มีการรั่วไหล";
            document.getElementById("btn_change_structure").style.display="none";
        }else{
            console.log("3 การทำงานปกติ");
        }
    }).catch((err) => {
        
    });
}

check_water_pipe_status()

$(document).ready(function(){
    $("#water_structure")
    .hide()
    .fadeIn(1000)
    $("#point_1").hide().slideDown(1000),
    $("#point_2").hide().slideDown(1200),
    $("#point_3").hide().slideDown(1400)
})


