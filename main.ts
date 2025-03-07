basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    if (maqueen.Ultrasonic() < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(500)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
})
