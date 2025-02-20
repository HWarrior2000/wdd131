function generateCalendar(year, month) {
    const totalDays = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();
    const calendarArea = document.querySelector("#calendar");
    calendarArea.innerHTML = "";

    let calendar = [];

    for (let i = 0; i < startDay; i++) {
        calendar.push(`<div class="empty"></div>`);
    }

    for (let day = 1; day <= totalDays; day++) {
        calendar.push(`<div class="week-day"><p>${day}</p></div>`);
    }

    while (calendar.length % 7 !== 0) {
        calendar.push(`<div class="empty"></div>`);
    }

    calendar.forEach(element => {
        calendarArea.insertAdjacentHTML("beforeend", element);
    });
}
function setMonths(startMonth) {
    const inputArea = document.querySelector("#month");
    console.log(inputArea);
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let input = "";
    let indexCounter = 0;
    months.forEach(element => {
        if (indexCounter >= startMonth) {
            input += `<option value="${indexCounter}">${element}</option>`;
        }
        indexCounter ++;
    });
    inputArea.insertAdjacentHTML("beforeend", input);
}

function setYears(startYear) {
    const inputArea = document.querySelector("#year");
    for (let i = 0; i <= 1; i++) {
        inputArea.insertAdjacentHTML("beforeend", `<option value="${startYear + i}">${startYear + i}</option>`)
    }
}

const thisMonth = new Date().getMonth();
const thisYear = new Date().getFullYear();
setMonths(thisMonth);
console.log(thisMonth);
setYears(thisYear);
console.log(thisYear);
generateCalendar(thisYear, thisMonth);

document.querySelector("#date-select").addEventListener("submit", function(event) {
    event.preventDefault();
    let userMonth = parseInt(event.target.month.value);
    console.log(userMonth);
    let userYear = parseInt(event.target.year.value);
    console.log(userYear);
    
    // reset the content area after searching
    document.querySelector("#calendar").innerHTML = "";

    // render the calendar
    generateCalendar(userYear, userMonth);
});