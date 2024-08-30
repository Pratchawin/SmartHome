var plant_data = [
    { id: 0, name: "Golden pothos (พลูด่าง)", details: "เป็นไม้ประดับหาง่าย ปลูกง่าย ราคาถูก จากการทดลองหลังเวลาผ่านไป 24 ชั่วโมง พบว่าพลูด่างสามารถลดเบนซีนได้ถึง 73.2 % ก๊าซคาร์บอนมอนอกไซด์75% และยังคายความชื้นในอากาศได้ดีมาก", temp: 15, humidity: 140, image: "../image/plant/pludang.png" },
    { id: 1, name: "Chinese Evergreen (เขียวหมื่นปี)", details: "เขียวหมื่นปี เป็นไม้ประดับที่อยู่ในวงค์ “อโกลนีมา” (Aglaonema) เขียวหมื่นปี ก็ยังมีอีกหลายชื่อไม่ว่าจะเป็น ว่านเขียวหมื่นปี, ว่านขันหมาก แก้วกาญจนา (เป็นชื่อพระราชทานจากสมเด็จพระเจ้าอยู่หัวมหาวชิราลงกรณ บดินทรเทพยวรางกูร และเป็นราชาแห่งไม้ประดับว่านเหนียนชิง (จีนกลาง)  ซึ่งโดยมากนั้นจะเป็นชื่อที่มีความหมายที่ดี และมีความหมายถึงการมี “โชคลาภ”", day: "", temp: 15, humidity: 140, image: "../image/plant/green_plant.png" },
    { id: 2, name: "Kuan Yin Bamboo (ไผ่กวนอิม)", details: "ไผ่กวนอิม หรือกวนอิม (Lucky Bamboo หรือ Chinese Water Bamboo) มีชื่อวิทยาศาสตร์ว่า Dracaena braunii Engl. มีต้นกำเนิดมาจากทวีปแอฟริกา ลักษณะเป็นไม้พุ่มเตี้ย สูงประมาณ 1 เมตร ลำต้นตั้งตรงและมีข้อปล้อง ก้านแตกยอดตามข้อ ใบเรียงสลับ ทรงหอก ปลายแหลม มีสีเขียวด่างต่างกันตามสายพันธุ์ ดอกออกเป็นช่อสีขาวขึ้นตามซอกกาบใบ ผลเป็นทรงกลมเล็ก นิยมขยายพันธุ์ด้วยการปักชำ ปลูกได้ทั้งในดินและในน้ำ หากปลูกในดินควรใช้ดินร่วน หากปลูกในน้ำควรให้รากโดนน้ำตลอด ชอบแสงแดดรำไร ต้องการน้ำมาก แต่ควรใช้น้ำกรองหรือน้ำฝน ควรใส่ปุ๋ยน้ำทุกเดือนและตัดแต่งทรงบ่อย ๆ", day: "", temp: 15, humidity: 140, image: "../image/plant/bamboo.png"},
    { id: 3, name: "Klassula tree (คลาสซูล่า)", details: "ต้นคลาสซูล่า (Crassula Ovata หรือ Jade Tree) หรือต้นใบเงิน มีถิ่นกำเนิดในแอฟริกา ลักษณะเป็นไม้อวบน้ำ ทรงพุ่ม กิ่งเรียบ ใบกลมหนา ผิวมันเงา สีเขียวหยก บางสายพันธุ์มีขอบสีแดงหรือสีเหลือง ออกดอกสีขาวอมชมพู ส่งกลิ่นหอมช่วงหน้าหนาว ทนแล้งและความชื้นได้ดี สามารถปลูกได้ทั้งในดินปลูกต้นไม้ทั่วไปและดินปลูกแคคตัส เพราะจัดอยู่ในกลุ่มเดียวกับต้นไม้อวบน้ำ ชอบแดดรำไร รดน้ำเฉพาะตอนดินแห้งเท่านั้น ควรเติมกาบมะพร้าวเพื่อช่วยกักเก็บความชุ่มชื้นให้กับดิน", day: "", temp: 15, humidity: 140, image: "../image/plant/klassula.png" },
    { id: 4, name: "abc", details: "", day: "", temp: 15, humidity: 140, image: "../image/plant/" },
    { id: 5, name: "abc", details: "", day: "", temp: 15, humidity: 140, image: "../image/plant/" },
]
console.log(plant_data)

var random_dark_color = ["#000000", "#6b0055", "#ff0000", "#ff9500", "#0c00ff", "#007411", "#4d0062", "#7c00ff"]
var random_light_color = ["#ffffff", "#e3f5b6", "#c9ff6e", "#6effdb", "#6eb0ff", "#a16eff", "#de6eff", "#ff6ecb"]
$("#btn_close_md").click(function () {
    $("#md_obj").fadeOut(500, function () {
        document.getElementById("click_to_hide").style.display = "block"
        $("#item_ot_01")
            .hide()
            .fadeIn(1000)
        $("#item_ot_02")
            .hide()
            .fadeIn(1300)
        $("#item_ot_03")
            .hide()
            .fadeIn(1600)
        $("#item_ot_04")
            .hide()
            .fadeIn(1900)
        $("#item_ot_05")
            .hide()
            .fadeIn(1000)
        $("#item_ot_06")
            .hide()
            .fadeIn(1300)
        $("#item_ot_07")
            .hide()
            .fadeIn(1600)
        $("#item_ot_08")
            .hide()
            .fadeIn(1900)
    })
})
$(document).ready(function () {
    $("#click_to_hide")
        .hide()
        .fadeIn(1000)
})
/* $("#item_ot_01").click(function () {
    
}) */

function show_modal_bx(ele_id) {
    $("#click_to_hide").hide()
    $("#md_obj").show(1000, function () {
        $("#vege_dt_left_ctrl").show()
        $("#dt_right_image").show()
        $("#txt_slide")
            .fadeIn(1000)
    })
    $("body").fadeIn(5000, function () {
        var ran_color = random_dark_color[Math.floor(Math.random() * 9)]
        var ran_light_col = random_light_color[Math.floor(Math.random() * 9)]
        $("body").css("background-image", "linear-gradient(to bottom right, " + ran_color + ", " + ran_light_col + ")")
    })
    //open image
    document.getElementById("show_plant_name").innerHTML = plant_data[ele_id].name;
    document.getElementById("h1_plant_name").innerHTML = plant_data[ele_id].name;
    document.getElementById("change_tree_img").src = plant_data[ele_id].image;
    document.getElementById("ornamental_plant_dt").innerHTML = plant_data[ele_id].details;

}
//Controller
function turnOnWater(){
    $("#water_down")
    .slideDown(1000,
        function(){
            document.getElementById("water_down").style.display="none";
        })
    console.log("Turn on water system");
    axios.get('http://localhost:5000/vegetable/water_controller',{
        method:'GET',
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
        },
    })
}

function turnOnFertilizer(){
    console.log("Turn on Fertilizer")
    axios.get('http://localhost:5000/vegetable/fertilizer_controller',{
        method:'GET',
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
        },
    })
}

function turnOnFan(){
    console.log("turn on fan")
    axios.get('http://localhost:5000/vegetable/fan_controller',{
        method:'GET',
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
        },
    })
}

function getDataFromIoT(){
    axios.get('http://localhost:5000/vegetable/ind_page',{
        method:'GET',
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
        },
    })
    .then((result) => {
        console.log("Get himidity and ph value...",result);
        document.getElementById('humidity').innerHTML=result["humidity"];
        document.getElementById('ph_id').innerHTML=result["ph"];
    }).catch((err) => {
        
    });
}
getDataFromIoT();
