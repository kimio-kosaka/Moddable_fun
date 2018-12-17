import Timer from 'timer'
import Digital from 'pins/digital'

// Blink LED
function blink (led, interval) {
  let sts = 0
  Timer.repeat(() => {
    sts = ~sts
    Digital.write(led, sts)
  }, interval)
}

let ledA = 16 // IO16
let ledB = 17 // IO17

blink(ledA, 300)
blink(ledB, 301)
