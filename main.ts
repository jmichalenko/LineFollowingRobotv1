input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(40, 40)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(0, 0)
})
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let LED0 = strip.range(0, 1)
let LED1 = strip.range(1, 1)
let LED2 = strip.range(2, 1)
let LED3 = strip.range(3, 1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        LED1.showColor(neopixel.colors(NeoPixelColors.Green))
        LED2.showColor(neopixel.colors(NeoPixelColors.Green))
        wuKong.setAllMotor(75, -40)
    } else {
        LED1.showColor(neopixel.colors(NeoPixelColors.White))
        LED2.showColor(neopixel.colors(NeoPixelColors.White))
        wuKong.setAllMotor(40, 40)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        LED0.showColor(neopixel.colors(NeoPixelColors.Yellow))
        LED3.showColor(neopixel.colors(NeoPixelColors.Yellow))
        wuKong.setAllMotor(-40, 75)
    } else {
        LED0.showColor(neopixel.colors(NeoPixelColors.White))
        LED3.showColor(neopixel.colors(NeoPixelColors.White))
        wuKong.setAllMotor(40, 40)
    }
})
