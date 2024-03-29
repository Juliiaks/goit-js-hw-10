import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    },
});

let userSelectedDate;
flatpickr(element{
    onClose: function (selectedDates, dateStr, instance) {
        if (selectedDates > 0) {
            userSelectedDate = selectedDates[0];
        }
    }
}); 

const btnStart = document.querySelector("button[data-start]");
const timePicker = document.querySelector("#datetime-picker");

class Timer {
    constructor({ onTick }) {
        this.onTick = onTick;
        this.isActive = false;
    }

    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        const startTime = Date.now();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = convertMs;
        }, 1000)
    }

}

const timer = new Timer({
    onClose: updateClockFace;
})

function updateClockFace({ hours, mins, seconds }) {
    clockface.innerHTML = `${hours}:${mins}:${seconds} `
}

btnStart.addEventListener("click", timer.start)

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
