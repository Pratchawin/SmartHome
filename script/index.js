
function show_time() {
    var climate_status;
    const result = axios.post('https://api.openweathermap.org/data/2.5/weather?=&units=metric', null, {
        params: {
            zip: `${90180},th`,
            appid: 'd0bb0f5eb844b8fe2426c10cac48b429'
        }
    })
        .then(res => {
            climate_status = res.data.weather[0]["description"];
            //climate_status = "rain";overcast clouds

            if (climate_status == "overcast clouds") {
                if (getTime >= 18) {
                    getBody.style.backgroundImage = "linear-gradient(#000000, #191970)";
                    document.getElementById("set-sun-and-moon").src = "./image/cloud/rain.png";
                } else {
                    getBody.style.backgroundImage = "linear-gradient(#2F4F4F, #778899)";
                    document.getElementById("set-sun-and-moon").src = "./image/cloud/rain.png";
                }
            } else if (climate_status == "rain") {
                $("document").ready(function () {
                    $("#set-font-color").css("color", "white")
                    $("#weather_today").css("color", "white")
                    $("#manue_left_slide_1").css("border", "5px solid white")
                    $("#manue_left_slide_2").css("border", "5px solid white")
                    $("#manue_left_slide_3").css("border", "5px solid white")

                    $("#manue_right_slide1").css("border", "5px solid white")
                    $("#manue_right_slide2").css("border", "5px solid white")
                    $("#manue_right_slide3").css("border", "5px solid white")

                    $("#set-for-dark-mode1").css("color", "white")
                    $("#set-for-dark-mode2").css("color", "white")
                    $("#set-for-dark-mode3").css("color", "white")
                    $("#set-for-dark-mode4").css("color", "white")

                    $("#sea_val-icon").css("color", "white")
                    $("#wind-speed-icon").css("color", "white")
                    $("#plessure-icon").css("color", "white")
                })
                console.log("Rain");
                console.log("Rain<===");
                getBody.style.backgroundImage = "linear-gradient(#000000, #F8F8FF)";
                document.getElementById("set-sun-and-moon").src = "./image/cloud/rain.png";
            } else if (climate_status == "light rain") {
                $("document").ready(function () {
                    $("#set-font-color").css("color", "white")
                    $("#weather_today").css("color", "white")
                    $("#manue_left_slide_1").css("border", "5px solid white")
                    $("#manue_left_slide_2").css("border", "5px solid white")
                    $("#manue_left_slide_3").css("border", "5px solid white")

                    $("#manue_right_slide1").css("border", "5px solid white")
                    $("#manue_right_slide2").css("border", "5px solid white")
                    $("#manue_right_slide3").css("border", "5px solid white")

                    $("#set-for-dark-mode1").css("color", "white")
                    $("#set-for-dark-mode2").css("color", "white")
                    $("#set-for-dark-mode3").css("color", "white")
                    $("#set-for-dark-mode4").css("color", "white")

                    $("#sea_val-icon").css("color", "white")
                    $("#wind-speed-icon").css("color", "white")
                    $("#plessure-icon").css("color", "white")
                })
                console.log("Rain");
                console.log("Rain<===");
                getBody.style.backgroundImage = "linear-gradient(#000000, #F8F8FF)";
                document.getElementById("set-sun-and-moon").src = "./image/cloud/light_rain.png";
            } else if (climate_status == "moderate rain") {
                $("document").ready(function () {
                    $("#set-font-color").css("color", "white")
                    $("#weather_today").css("color", "white")
                    $("#manue_left_slide_1").css("border", "5px solid white")
                    $("#manue_left_slide_2").css("border", "5px solid white")
                    $("#manue_left_slide_3").css("border", "5px solid white")

                    $("#manue_right_slide1").css("border", "5px solid white")
                    $("#manue_right_slide2").css("border", "5px solid white")
                    $("#manue_right_slide3").css("border", "5px solid white")

                    $("#set-for-dark-mode1").css("color", "white")
                    $("#set-for-dark-mode2").css("color", "white")
                    $("#set-for-dark-mode3").css("color", "white")
                    $("#set-for-dark-mode4").css("color", "white")

                    $("#sea_val-icon").css("color", "white")
                    $("#wind-speed-icon").css("color", "white")
                    $("#plessure-icon").css("color", "white")
                })
                console.log("Rain");
                console.log("Rain<===");
                getBody.style.backgroundImage = "linear-gradient(#000000, #F8F8FF)";
                document.getElementById("set-sun-and-moon").src = "./image/cloud/light_rain.png";
            }
        })
        .catch(err => {
            console.error(err);
        })
    const d = new Date();
    var getTime = d.getHours();/*d.getHours()*/
    //document.getElementById("show_time").innerHTML=d.getHours()+":"+d.getMinutes();
    document.getElementById("show_time").innerHTML = d.getHours() + ":" + d.getMinutes();
    var getBody = document.getElementById("set_body_bg");
    if (getTime >= 6 && getTime < 12) {
        getBody.style.backgroundImage = "linear-gradient(#00BFFF, #ffffff)";
        document.getElementById("link_color").style.color = "black";
        document.getElementById("link_color1").style.color = "black";
        document.getElementById("link_color2").style.color = "black";
        document.getElementById("link_color3").style.color = "black";
        document.getElementById("link_color4").style.color = "black";
        document.getElementById("link_color5").style.color = "black";
    } else if (getTime >= 12 && getTime < 16) {
        console.log("ช่วงบ่าย");
        getBody.style.backgroundImage = "linear-gradient(#FF8C00, #ffffff)";
        document.getElementById("link_color").style.color = "black";
        document.getElementById("link_color1").style.color = "black";
        document.getElementById("link_color2").style.color = "black";
        document.getElementById("link_color3").style.color = "black";
        document.getElementById("link_color4").style.color = "black";
        document.getElementById("link_color5").style.color = "black";
    } else if (getTime >= 16 && getTime < 18) {
        console.log("ช่วงเย็น");
        getBody.style.backgroundImage = "linear-gradient(#A52A2A, #ffffff)";
        document.getElementById("link_color").style.color = "black";
        document.getElementById("link_color1").style.color = "black";
        document.getElementById("link_color2").style.color = "black";
        document.getElementById("link_color3").style.color = "black";
        document.getElementById("link_color4").style.color = "black";
        document.getElementById("link_color5").style.color = "black";
    } else if (getTime >= 18) {
        console.log("ช่วงค่ำ");
        getBody.style.backgroundImage = "linear-gradient(#000000, #191970)";
        document.getElementById("bedroom_color").style.color = "white";
        document.getElementById("set-font-color").style.color = "white";
        document.getElementById("weather_today").style.color = "white";
        document.getElementById("set-sun-and-moon").src = "./image/cloud/moon.png";
        $("document").ready(function () {
            $("#manue_left_slide_1").css("border", "5px solid white")
            $("#manue_left_slide_2").css("border", "5px solid white")
            $("#manue_left_slide_3").css("border", "5px solid white")

            $("#manue_right_slide1").css("border", "5px solid white")
            $("#manue_right_slide2").css("border", "5px solid white")
            $("#manue_right_slide3").css("border", "5px solid white")

            $("#set-for-dark-mode1").css("color", "white")
            $("#set-for-dark-mode2").css("color", "white")
            $("#set-for-dark-mode3").css("color", "white")
            $("#set-for-dark-mode4").css("color", "white")

            $("#sea_val-icon").css("color", "white")
            $("#wind-speed-icon").css("color", "white")
            $("#plessure-icon").css("color", "white")
        })
    }
}
show_time();

function jQuery_show_left_manue() {
    $(document).ready(function () {
        $(".house-image").fadeIn(1000, function () {
            $("#show-temp-intoday").fadeIn(500);
        });
        $(".scl-menue-left-list")
            .hide()
            .slideDown(2000);
        $("#test_img")
            .hide()
            .slideDown(2000);
        $("#test_img1")
            .hide()
            .slideDown(2000);
        $("#test_img2")
            .hide()
            .slideDown(2000);
        $(".scl-menue-right-list")
            .hide()
            .slideDown(2000);
        $("#img_right1")
            .hide()
            .slideDown(2000);
        $("#img_right2")
            .hide()
            .slideDown(2000);
        $("#img_right3")
            .hide()
            .slideDown(2000);
    })
}
jQuery_show_left_manue();

//Request weather from open weather
function getWeaTher() {
    const result = axios.post('https://api.openweathermap.org/data/2.5/weather?=&units=metric', null, {
        params: {
            zip: `${90180},th`,
            appid: 'd0bb0f5eb844b8fe2426c10cac48b429'
        }
    })
        .then(res => {
            console.log(res)
            //console.log("RES==>",res.data.weather[0]["description"])
            document.getElementById("weather_today").innerHTML = res.data.weather[0]["description"];
            climate_status = res.data.weather[0]["description"];
            document.getElementById("show_temp").innerHTML = res.data.main["temp"] + "&#186;";
            document.getElementById("canton").innerHTML = res.data.name;
            //document.getElementById("humidity_val").innerHTML=;
            document.getElementById("show_humidity").innerHTML = res.data.main["humidity"]
            document.getElementById("sea_val").innerHTML = res.data.main["sea_level"]
            document.getElementById("plessure_val").innerHTML = res.data.main["pressure"]
            document.getElementById("wind_speed").innerHTML = res.data.wind["speed"] + "km/h";
            console.log("RES==>", res.data.name);
        })
        .catch(err => {
            console.error(err);
        })
}
getWeaTher();

function connectSmartHomeServer() {
    const result = axios.get('http://localhost:5000/smart_home', {
        method: 'GET',
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
connectSmartHomeServer();

