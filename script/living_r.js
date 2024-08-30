var control_data = {};
$(document).ready(function () {
    $("#control_manue")
        .hide()
        .show(1000)
})
function btn_switch_layout(id) {
    if (id == 1) {
        console.log(id)
        $(document).ready(function () {
            $("#ctn-1").show(function () {
                $("#ctn-1").fadeIn(1500)
            })
            $("#ctn-2").hide()
            $("#ctn-3").hide()
            $("#ctn-4").hide()
        })
        fetch("http://192.168.1.1/led1on")
        .then(response=>response.json())
        .then(data=>console.log(data))
    }
    if (id == 2) {
        console.log(id)
        $(document).ready(function () {
            $("#ctn-2").show(function () {
                $("#ctn-2").fadeIn(1500)
            })
            $("#ctn-1").hide()
            $("#ctn-3").hide()
            $("#ctn-4").hide()
        })
    }
    if (id == 3) {
        console.log(id)
        $(document).ready(function () {
            $("#ctn-3").show(function () {
                $("#ctn-3").fadeIn(1500)
            })
            $("#ctn-1").hide()
            $("#ctn-2").hide()
            $("#ctn-4").hide()
        })
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(myMap);
          } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
    }
    if (id == 4) {
        $(document).ready(function () {
            $("#ctn-4").show(function () {
                $("#ctn-4").fadeIn(1500)
            })
            $("#ctn-1").hide()
            $("#ctn-3").hide()
            $("#ctn-2").hide()
        })
    }
}
var mn_ckk_status = 0;
function click_icon_bar() {
    document.getElementById("control_manue").style.width = '88px';
    document.getElementById("control_manue").style.height = '88px';
    document.getElementById("control_manue").style.overflow = 'hidden';
    document.getElementById("control_manue").style.transition = "width 2s, height 2s";
    mn_ckk_status += 1;
    if (mn_ckk_status == 2) {
        mn_ckk_status = 0;
        $("#control_manue")
            .fadeIn(1000, function () {
                document.getElementById("control_manue").style.width = '1280px';
                document.getElementById("control_manue").style.height = '800px';
            })
    }
}
//air controller
var airObj = document.getElementById("airStatus");
var light1Status = document.getElementById("light1Status");
var light2Status = document.getElementById("light2Status");
var light3Status = document.getElementById("light3Status");
var light4Status = document.getElementById("light4Status");
var light5Status = document.getElementById("light5Status");
var light6Status = document.getElementById("light6Status");
var air_count = 0;
var temp_val = parseInt(document.getElementById("temp_val").innerHTML.slice(0, 2));
function check_on_off(ckk_val) {
    if (ckk_val == 1) {
        fetch("http://192.168.1.1/fan_on")
        document.getElementById("set_air_con_image").src = "../image/house/air_on.png";
        document.getElementById("temp_val").innerHTML = "25&#186";
        console.log("open_air");
        temp_val = 25;
        airObj.innerHTML = "- Air conditioner temp:25"
        air_count += 1;
        //Sent Command to IoT controller
    }
    if (air_count == 0) {
        fetch("http://192.168.1.1/fan_off")
        document.getElementById("set_air_con_image").src = "../image/house/air_off.png";
        document.getElementById("temp_val").innerHTML = "0&#186";
        air_count = 0;
        temp_val = 0;
        airObj.innerHTML = "- Air conditioner temp:off"
    }
    console.log("Air cout=>", air_count)
}

function btn_increase_temp() {
    if (air_count == 0) {
        alert("โปรดเปิดเเอร์")
        document.getElementById("temp_val").innerHTML = "0" + "&#186";
    } else {
        document.getElementById("check_bx").checked = true;
        temp_val += 1;
        document.getElementById("temp_val").innerHTML = temp_val.toString() + "&#186";
        airObj.innerHTML = "- Air conditioner temp:" + temp_val;
    }
}

function btn_reduce_temp() {
    if (air_count == 0) {
        alert("โปรดเปิดเเอร์")
        document.getElementById("temp_val").innerHTML = "0" + "&#186";
    } else {
        document.getElementById("check_bx").checked = true;
        temp_val -= 1;
        document.getElementById("temp_val").innerHTML = temp_val.toString() + "&#186";
        airObj.innerHTML = "- Air conditioner temp:" + temp_val;
    }
}

//light controller
function sentData(room_num, status) {
    axios.get("http://localhost:5000/living_room/light_controller", {
        method: 'GET',
        params: {
            room_num: room_num,
            opn_status: status
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    })
        .then(
            function (res) {
                console.log(res);
            })
        .catch(function (error) {
            console.log(error)
        })
}
//light controller
var light1 = 0, light2 = 0, light3 = 0, light4 = 0, light5 = 0, light6 = 0;
function ctrl_light(light_n, status) {
    if (light_n == 1) {
        light1Status.innerHTML = "on";
        light1 += 1
        sentData(1,light1);
        console.log(light_n)
        document.getElementById("light1").src = "../image/house/light_on.png";
        fetch("http://192.168.1.1/led1on")
        if (light1 == 2) {
            sentData(light_n,status);
            fetch("http://192.168.1.1/led1off")
            light1Status.innerHTML = "off";
            document.getElementById("light1").src = "../image/house/light_off.png";
            light1 = 0;
            sentData(1,light1);
        }
    }
    if (light_n == 2) {
        light2Status.innerHTML = "on";
        light2 += 1
        sentData(2,light1);
        console.log(light_n)
        document.getElementById("light2").src = "../image/house/light_on.png";
        fetch("http://192.168.1.1/led2on")
        if (light2 == 2) {
            fetch("http://192.168.1.1/led2off")
            light2Status.innerHTML = "off";
            document.getElementById("light2").src = "../image/house/light_off.png";
            light2 = 0;
            sentData(2,light2);
        }
    }
    if (light_n == 3) {
        light3Status.innerHTML = "on";
        light3 += 1
        console.log(light_n)
        sentData(3,light3);
        document.getElementById("light3").src = "../image/house/light_on.png";
        fetch("http://192.168.1.1/led3on")
        if (light3 == 2) {
            light3Status.innerHTML = "off";
            fetch("http://192.168.1.1/led3off")
            document.getElementById("light3").src = "../image/house/light_off.png";
            light3 = 0;
            sentData(3,light3);
        }
    }
    if (light_n == 4) {
        light4Status.innerHTML = "on";
        light4 += 1
        console.log(light_n)
        sentData(4,light4);
        document.getElementById("light4").src = "../image/house/light_on.png";
        fetch("http://192.168.1.1/led4on")
        if (light4 == 2) {
            light4Status.innerHTML = "off";
            fetch("http://192.168.1.1/led4off")
            document.getElementById("light4").src = "../image/house/light_off.png";
            light4 = 0;
            sentData(4,light4);
        }
    }
    if (light_n == 5) {
        light5Status.innerHTML = "on";
        light5 += 1
        console.log(light_n)
        sentData(5,light5);
        fetch("http://192.168.1.1/led5on")
        document.getElementById("light5").src = "../image/house/light_on.png";
        if (light5 == 2) {
            fetch("http://192.168.1.1/led5off")
            light5Status.innerHTML = "off";
            document.getElementById("light5").src = "../image/house/light_off.png";
            light5 = 0;
            sentData(5,light5);
        }
    }
    if (light_n == 6) {
        light6Status.innerHTML = "on";
        light6 += 1
        sentData(6,light6);
        console.log(light_n)
        fetch("http://192.168.1.1/led6on")
        document.getElementById("light6").src = "../image/house/light_on.png";
        if (light6 == 2) {
            light6Status.innerHTML = "off";
            fetch("http://192.168.1.1/led6off")
            document.getElementById("light6").src = "../image/house/light_off.png";
            light6 = 0;
            sentData(6,light6);
        }
    }
}
function btn_set_speed_air(air_val) {
    temp_val = air_val;
    document.getElementById("temp_val").innerHTML = air_val + "&#186";
    document.getElementById("set_air_con_image").src = "../image/house/air_on.png";
    document.getElementById("check_bx").checked = true;
    air_count = 1;
    airObj.innerHTML = "- Air conditioner temp:" + air_val;
}





function myMap(position) {
    let latitude = position.coords.latitude;
    let longitude= position.coords.longitude;
    console.log("Lati:",latitude);
    console.log("Longi:",longitude);
    var map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 17,
        center: { lat: latitude, lng: longitude },
    });
    const bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
}




//Call living room API
function main_living() {
    axios.get('http://localhost:5000/living_room/air_controller', {
        method: 'GET',
        withCredentials: false,
        credential: 'same-origin',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    })
        .then(
            function (res) {
                console.log(res);
            })
        .catch(function (error) {
            console.log(error)
        })
}
main_living();

//Security API
function security(param) {
    axios.get('http://localhost:5000/living_room/security', {
        method: 'GET',
        withCredentials: false,
        credential: 'same-origin',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    })
        .then(
            function (res) {
                const d = new Date();
                console.log(res["data"]["host"]);
                document.getElementById("host_name").innerHTML = "Client name: " + res["data"]["host"];
                document.getElementById("cli_ip").innerHTML = "IP: " + res["data"]["ip_addr"];
                document.getElementById('country').innerHTML = "Country: Thailand Province: SongKhla"
                document.getElementById("date_and_time").innerHTML = "Date and time: " + d;
            })
        .catch(function (error) {
            console.log(error)
        })
}
security();

function btn_turn_on_airConditioner() {
    console.log("Temp val", temp_val);
    axios.get('http://localhost:5000/living_room/turn_on_air_condition', {
        params: {
            temp_val: temp_val,
        }
    }, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    })
        .then(
            function (res) {
                console.log(res);
            })
        .catch(function (error) {
            console.log(error)
        })
}


//function เปิดขปิดไฟ
var light1Elem=document.getElementById("light1");
var light2Elem=document.getElementById("light2");
var light3Elem=document.getElementById("light3");
var light4Elem=document.getElementById("light4");
var light5Elem=document.getElementById("light5");
var light6Elem=document.getElementById("light6");

function btn_turn_on_airConditioner(status){
    if(status==0){
        console.log("Close all light");
        fetch("http://192.168.1.1/led1off")
        fetch("http://192.168.1.1/led2off")
        fetch("http://192.168.1.1/led3off")
        fetch("http://192.168.1.1/led4off")
        fetch("http://192.168.1.1/led5off")
        fetch("http://192.168.1.1/led6off")
        fetch("http://192.168.1.1/led7off")
        light1Elem.src="../image/house/light_off.png";
        light2Elem.src="../image/house/light_off.png";
        light3Elem.src="../image/house/light_off.png";
        light4Elem.src="../image/house/light_off.png";
        light5Elem.src="../image/house/light_off.png";
        light6Elem.src="../image/house/light_off.png";
        light1Status.innerHTML="off"
        light2Status.innerHTML="off"
        light3Status.innerHTML="off"
        light4Status.innerHTML="off"
        light5Status.innerHTML="off"
        light6Status.innerHTML="off"
    }else if(status==4){
        console.log("Open 4 light");
        fetch("http://192.168.1.1/led1on")
        fetch("http://192.168.1.1/led2on")
        fetch("http://192.168.1.1/led3off")
        fetch("http://192.168.1.1/led4off")
        fetch("http://192.168.1.1/led5on")
        fetch("http://192.168.1.1/led6on")
        light1Elem.src="../image/house/light_on.png";
        light2Elem.src="../image/house/light_on.png";
        light3Elem.src="../image/house/light_off.png";
        light4Elem.src="../image/house/light_off.png";
        light5Elem.src="../image/house/light_on.png";
        light6Elem.src="../image/house/light_on.png";
        light1Status.innerHTML="on"
        light2Status.innerHTML="on"
        light3Status.innerHTML="off"
        light4Status.innerHTML="off"
        light5Status.innerHTML="on"
        light6Status.innerHTML="on"
    }else{
        console.log("Open all light")
        fetch("http://192.168.1.1/led1on")
        fetch("http://192.168.1.1/led2on")
        fetch("http://192.168.1.1/led3on")
        fetch("http://192.168.1.1/led4on")
        fetch("http://192.168.1.1/led5on")
        fetch("http://192.168.1.1/led6on")
        light1Elem.src="../image/house/light_on.png";
        light2Elem.src="../image/house/light_on.png";
        light3Elem.src="../image/house/light_on.png";
        light4Elem.src="../image/house/light_on.png";
        light5Elem.src="../image/house/light_on.png";
        light6Elem.src="../image/house/light_on.png";
        light1Status.innerHTML="on"
        light2Status.innerHTML="on"
        light3Status.innerHTML="on"
        light4Status.innerHTML="on"
        light5Status.innerHTML="on"
        light6Status.innerHTML="on"

    }
}
