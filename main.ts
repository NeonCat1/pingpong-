input.onButtonPressed(Button.A, function () {
    if (0 < X_you) {
        led.unplot(X_you, Y_you)
        X_you += -1
        led.plot(X_you, Y_you)
    }
})
input.onButtonPressed(Button.B, function () {
    if (4 > X_you) {
        led.unplot(X_you, Y_you)
        X_you += 1
        led.plot(X_you, Y_you)
    }
})
let Ball_slope = 0
let X_you = 0
let Y_you = 0
let Y_ball = 0
let X_ball = 2
let Y_oposite = 0
let X_oposite = 2
Y_you = 4
X_you = 2
let If_touch_oponent = Y_ball
If_touch_oponent += 1
let If_touch_you = Y_ball
If_touch_you += -1
let Ball_Direction_11 = 1
basic.forever(function () {
    if (If_touch_you == Y_you) {
        if (X_ball != X_you) {
            basic.showString("You Lost L")
            X_ball = 2
            Y_ball = 0
        } else {
            Ball_Direction_11 += 2
        }
    }
    if (If_touch_oponent == Y_oposite) {
        if (X_ball != X_oposite) {
            basic.showString("You won W")
        } else {
            Ball_Direction_11 += -2
        }
    }
    if (Y_ball == 2) {
        if (Ball_Direction_11 == 1) {
            if (X_ball > X_you) {
                Ball_slope = 1
            } else if (X_ball == X_you) {
                Ball_slope = 0
            } else {
                Ball_slope = -1
            }
        } else {
            if (X_ball > X_oposite) {
                Ball_slope = -1
            } else if (X_ball == X_oposite) {
                Ball_slope = 0
            } else {
                Ball_slope = 1
            }
        }
    }
})
basic.forever(function () {
    basic.pause(500)
    led.unplot(X_ball, Y_ball)
    X_ball += Ball_slope
    Y_ball += Ball_Direction_11
    led.plot(X_ball, Y_ball)
})
