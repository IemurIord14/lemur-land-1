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
function monster () {
    Monster = sprites.create(img`
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
    Monster,
    assets.animation`kaijuMomWalkLeft`,
    100,
    true
    )
    tiles.placeOnTile(Monster, tiles.getTileLocation(3, 12))
    Monster.setVelocity(0, 45)
}
function bigmonster () {
	
}
function functions () {
    extras()
    LemurLad()
    background()
    monster()
}
function extras () {
    pixelstometers = 30
}
let pixelstometers = 0
let Monster: Sprite = null
let lemurlad: Sprite = null
functions()
game.onUpdate(function () {
    if (lemurlad.isHittingTile(CollisionDirection.Bottom) && controller.A.isPressed()) {
        lemurlad.setVelocity(0, -100000000000000000 * pixelstometers)
    }
})
forever(function () {
    pause(100)
    if (!(lemurlad.isHittingTile(CollisionDirection.Bottom))) {
        lemurlad.setVelocity(0, 45)
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
forever(function () {
    pause(100)
    lemurlad.setVelocity(0, 45)
})
