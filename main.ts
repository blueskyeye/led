input.onButtonPressed(Button.A, function () {
    亮度 += -10
    if (亮度 < 0) {
        亮度 = 0
    }
    led.setBrightness(亮度)
    basic.showNumber(亮度)
})
input.onButtonPressed(Button.B, function () {
    亮度 += 10
    if (亮度 > 255) {
        亮度 = 255
    }
    led.setBrightness(亮度)
    basic.showNumber(亮度)
})
let 亮度 = 0
亮度 = 200
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
