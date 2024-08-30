document.addEventListener("DOMContentLoaded", () => {
    let video = document.getElementById("vid");
    let mediaDevices = navigator.mediaDevices;
    vid.muted = true;
    mediaDevices
        .getUserMedia({
            video: true,
            audio: true,
        })
        .then((stream) => {
            video.srcObject = stream;
            video.addEventListener("loadedmetadata", () => {
                video.play();
            });
        })
        .catch(alert);
})
function turn_on_door(){
    fetch("http://192.168.1.1/gate_on").then(res=>{
        console.log(res)
    }).catch(error=>{
        console.log(error)
    })
}
function turn_off_door(){
    fetch("http://192.168.1.1/gate_off").then(res=>{
        console.log(res)
    }).catch(error=>{
        console.log(error)
    })
}

