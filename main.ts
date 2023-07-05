let tel = 0
basic.forever(function () {
    if (tel > 7) {
        led.plot(1, 0)
    } else {
        led.unplot(1, 0)
    }
})
basic.forever(function () {
    if (tel < 16) {
        basic.pause(500)
        tel += 1
    } else {
        tel = 0
    }
})
basic.forever(function () {
    if (tel > 3 && tel < 8 || tel > 11) {
        led.plot(2, 0)
    } else {
        led.unplot(2, 0)
    }
})
basic.forever(function () {
    if (tel % 2 == 1) {
        led.plot(4, 0)
    } else {
        led.unplot(4, 0)
    }
})
basic.forever(function () {
    if (tel == 2 || tel == 3 || (tel == 14 || tel == 15 || (tel == 10 || tel == 11 || (tel == 6 || tel == 7)))) {
        led.plot(3, 0)
    } else {
        led.unplot(3, 0)
    }
})
