function LemurLad () {
    lemurlad = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    lemurlad,
    assets.animation`forestMonkeyWalkLeft1`,
    100,
    true
    )
    scene.cameraFollowSprite(lemurlad)
}
function background () {
    tiles.setCurrentTilemap(tilemap`level`)
    tiles.placeOnTile(lemurlad, tiles.getTileLocation(3, 13))
}
function functions () {
    extras()
    LemurLad()
    background()
}
function extras () {
    pixelstometers = 30
    gravity = 9.81 * pixelstometers
}
let gravity = 0
let pixelstometers = 0
let lemurlad: Sprite = null
functions()
game.onUpdate(function () {
    if (lemurlad.isHittingTile(CollisionDirection.Bottom) && controller.A.isPressed()) {
        lemurlad.setVelocity(0, -20000 * pixelstometers)
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        lemurlad,
        assets.animation`forestMonkeyWalkLeft`,
        100,
        true
        )
        lemurlad.x += -2
    }
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        lemurlad,
        assets.animation`forestMonkeyWalkLeft0`,
        100,
        true
        )
        lemurlad.x += 2
    }
})
game.onUpdateInterval(100, function () {
    if (!(lemurlad.isHittingTile(CollisionDirection.Bottom))) {
        lemurlad.setVelocity(0, 45)
    }
})
