function set_lcd (texte: string, num: number) {
    I2C_LCD1602.ShowString(texte, 0, num)
}
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
set_lcd("Fabrice DUSOLEIL", 0)
basic.forever(function () {
    set_lcd("Fabrice DUSOLEIL", 0)
    set_lcd("Temperature : " + convertToText(input.temperature()) + " °C", 17)
    basic.pause(2000)
    I2C_LCD1602.clear()
    set_lcd("Fabrice DUSOLEIL", 0)
    set_lcd("Luminosite : " + convertToText(input.lightLevel()) + " lux", 17)
    basic.pause(2000)
    I2C_LCD1602.clear()
    set_lcd("Fabrice DUSOLEIL", 0)
    set_lcd("Audio : " + convertToText(input.soundLevel()) + " db", 17)
    basic.pause(2000)
    I2C_LCD1602.clear()
})
