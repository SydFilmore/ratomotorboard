radio.onReceivedValue(function (name, value) {
    if (name == "s1") {
        if (value < 50) {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
            basic.pause(1000)
            Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        } else {
            Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        }
    }
    if (name == "s2") {
        if (value < 50) {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
            basic.pause(1000)
            Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
        } else {
            Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
        }
    }
    if (name == "ti") {
        if (value > 30) {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 30)
            // fan
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        } else {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
        }
    }
    if (name == "h") {
        if (value > 30) {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 30)
            // fan
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        } else {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
        }
    }
})
basic.pause(200)
radio.setGroup(1)
