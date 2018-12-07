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

let ledA = 5 // IO5
let ledB = 4 // IO4

blink(ledA, 300)
blink(ledB, 301)
