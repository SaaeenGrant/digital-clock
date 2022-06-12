const displayTime = () => {
    const days = ["Monday","Tuesday","Wendsday","Thursday","Friday","Saturday","Sunday"]
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    let dayIndex = new Date().getDay()
    let monthIndex = new Date().getMonth()

    let day = document.querySelector('.day')
    let month = document.querySelector('.month')
    let dayNumber = document.querySelector('.day-number')
    let year = document.querySelector('.year')

    day.textContent = days[dayIndex - 1]
    month.textContent = months[monthIndex - 1]
    dayNumber.textContent = new Date().getDate()
    year.textContent = new Date().getFullYear()
    setInterval(UpdateTime, 1000)
    
}

const UpdateTime = () => {
    let hours = document.querySelector('.hours')
    let minutes = document.querySelector('.minutes')
    let seconds = document.querySelector('.seconds')
    let time0fDay = document.querySelector('.time-of-day')
    let convertButton = document.querySelector('section button')
    let section = document.querySelector('.time')

    let hoursData = new Date().getHours()
    let minutesData = new Date().getMinutes()
    let secondsData = new Date().getSeconds()

    if(hoursData > 12) {
        hoursData = new Date().getHours() - 12
        time0fDay.textContent =  "PM"
    } else {
        hoursData = new Date().getHours()
    }

    if(hoursData < 10) {
        hours.textContent = `0${hoursData}` 
    } else {
        hours.textContent = hoursData 
    }
    if(minutesData < 10) {
        minutes.textContent = `0${minutesData}` 
    } else {
        minutes.textContent = minutesData 
    }
    if(secondsData < 10 ) {
        seconds.textContent = `0${secondsData}` 
    } else {
        seconds.textContent = secondsData 
    }
} 
    
displayTime()