function diaSemana (dia: number) {
    nombreDia = text_list[dia]
}
let nombreDia = ""
let text_list: string[] = []
OLED.init(128, 64)
basic.showIcon(IconNames.Sad)
text_list = [
"lun",
"mar",
"mie",
"jue",
"vie",
"sab",
"dom"
]
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("iPhone de Claudio", "Sapirujo1959")
while (ESP8266_IoT.wifiState(false)) {
    basic.pause(100)
}
basic.showIcon(IconNames.Happy)
basic.pause(500)
OLED.writeStringNewLine(control.deviceName())
OLED.writeNumNewLine(control.deviceSerialNumber())
basic.forever(function () {
    ESP8266_IoT.connectKidsiot("aab56pcmVZQtmgw6", "1")
    basic.pause(2000)
    if (ESP8266_IoT.kidsiotState(true)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        ESP8266_IoT.uploadKidsiot(input.temperature())
        basic.pause(10000)
        OLED.clear()
        diaSemana(RTC_DS1307.getWeekday())
    }
    OLED.writeStringNewLine("Dia: " + nombreDia + ", " + RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY))
    OLED.writeStringNewLine("Hora: " + RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) + "" + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND))
    OLED.newLine()
    OLED.writeStringNewLine(control.deviceName())
    OLED.writeNumNewLine(control.deviceSerialNumber())
    OLED.newLine()
    OLED.writeStringNewLine("Temperatura:" + input.temperature())
})
