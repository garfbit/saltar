input.onButtonPressed(Button.A, function () {
    cabeza.change(LedSpriteProperty.X, -1)
    pies.change(LedSpriteProperty.X, -1)
})
function piedrita () {
    piedra = game.createSprite(4, 4)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        piedra.change(LedSpriteProperty.X, -1)
        if (piedra.isTouching(pies)) {
            basic.showIcon(IconNames.Sad)
            music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
            game.gameOver()
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    cabeza.change(LedSpriteProperty.Y, -1)
    pies.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    cabeza.change(LedSpriteProperty.Y, 1)
    pies.change(LedSpriteProperty.Y, 1)
    game.addScore(1)
})
input.onButtonPressed(Button.B, function () {
    cabeza.change(LedSpriteProperty.X, 1)
    pies.change(LedSpriteProperty.X, 1)
})
let piedra: game.LedSprite = null
let pies: game.LedSprite = null
let cabeza: game.LedSprite = null
cabeza = game.createSprite(0, 3)
pies = game.createSprite(0, 4)
piedrita()
basic.forever(function () {
    if (piedra.isTouchingEdge()) {
        basic.pause(1000)
        piedra.delete()
        piedrita()
    }
})
