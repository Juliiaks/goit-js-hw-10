import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate < new Date()) {
            iziToast.error({
    title: 'Error',
    message: 'Please choose a date in the future',
            });
            btnStart.setAttribute("disabled", true)
        } else {
            userSelectedDate = selectedDate;
            btnStart.removeAttribute("diabled");
        }
    // console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);


const btnStart = document.querySelector("button[data-start]");
const timePicker = document.querySelector("#datetime-picker");

btnStart.addEventListener("click", startCount);

function startCount() {
    btnStart.setAttribute("disabled", true);
    timePicker.setAttribute("disabled", true);
    const timerInterval = setInterval(() => {
        const remainingTime = userSelectedDate - new Date();
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            return;
        }
        const { days, hours, minutes, seconds } = convertMs(remainingTime);
        document.querySelector('[data-days]').textContent = addLeadingZero(days);
        document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
        document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
        document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
    }, 1000);
}
    
function addLeadingZero(value) {
    if (value < 10) {
        return "0" + value;
    } else {
        return value;
    }
}



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
