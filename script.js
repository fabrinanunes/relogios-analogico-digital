let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

function updateClock(){
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    //relogio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    //relogio analógico
    //ponteiro do segundo
    let sDeg = ((360/60) * second) - 90
    sElement.style.transform = `rotate(${sDeg}deg)`

    //ponteiro do minuto
    let mDeg = ((360/60) * minute) - 90
    mElement.style.transform = `rotate(${mDeg}deg)`

    //ponteiro da hora
    let hDeg = ((360/12) * hour) - 90
    hElement.style.transform = `rotate(${hDeg}deg)`
}

//adiciona o 0 quando o horário for menor que 10
function fixZero(time){
    /*if(time <10){
        return '0'+time
    }else{
        return time
    }*/
    return time < 10 ? `0${time}` : time 
}
setInterval(updateClock, 1000)
updateClock()