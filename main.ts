function stop () {
    magicbit.MotorRun(magicbit.Motors.M1, 0)
    magicbit.MotorRun(magicbit.Motors.M2, 0)
    magicbit.MotorRun(magicbit.Motors.M3, 0)
    magicbit.MotorRun(magicbit.Motors.M4, 0)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.House)
    go_for_20()
    basic.pause(2000)
    stop()
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.B, function () {
    stop()
    basic.showIcon(IconNames.SmallHeart)
    if (lightOn == 0) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        lightOn = 1
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        lightOn = 0
    }
    magicbit.rgb().setPixelColor(0, neopixel.colors(NeoPixelColors.Indigo))
    magicbit.rgb().show()
    basic.pause(1000)
    magicbit.rgb().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    magicbit.rgb().show()
    basic.pause(1000)
    magicbit.rgb().setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    magicbit.rgb().show()
    basic.pause(1000)
    magicbit.rgb().setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
    magicbit.rgb().show()
    basic.pause(1000)
    magicbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
})
function go_for_20 () {
    magicbit.MotorRun(magicbit.Motors.M1, 100)
    magicbit.MotorRun(magicbit.Motors.M2, 100)
    magicbit.MotorRun(magicbit.Motors.M3, -100)
    magicbit.MotorRun(magicbit.Motors.M4, -100)
}
let lightOn = 0
basic.showIcon(IconNames.Ghost)
lightOn = 0
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(500)
})
