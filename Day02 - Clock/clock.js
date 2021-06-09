const secondHand = document.querySelector(".sec")
const minsHand = document.querySelector('.mint')
const hoursHand = document.querySelector('.hours')

function setDate(){
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360)
    secondHand.style.transform = `rotate(${secondsDegrees}deg`
    // console.log(seconds)

    const mins = now.getMinutes()
    const minsDegrees = (mins/60) *360
    minsHand.style.transform =`rotate(${minsDegrees}deg`

    const hours = now.getHours()
    const hoursDegrees = hours / 12 * 360
    hoursHand.style.transform = `rotate(${hoursDegrees}deg`

}

setInterval(setDate, 1000)