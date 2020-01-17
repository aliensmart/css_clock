const hoursHand = document.querySelector('.hours-hand')
const minutesHand = document.querySelector('.minutes-hand')
const secondsHand = document.querySelector('.seconds-hand')

const setClock = ()=>{
    const now = new Date()
    const secondRatio = now.getSeconds()/60
    const minutesRatio = (secondRatio + now.getMinutes())/60
    const hoursRatio = (minutesRatio + now.getHours())/12
    setRotation(secondsHand, secondRatio)
    setRotation(minutesHand, minutesRatio)
    setRotation(hoursHand, hoursRatio)
    
}

const setRotation = (e, r)=>{
    e.style.setProperty('--rotation', r * 360)
    console.log(r)
}

setClock()

setInterval(setClock, 1000)