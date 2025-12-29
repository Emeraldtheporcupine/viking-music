namespace SpriteKind {
  export const Title = SpriteKind.create()
  export const Boat = SpriteKind.create()
}
function Start() {
  mySprite = sprites.create(assets.image`16x16`, SpriteKind.Title)
  mySprite.setPosition(8, 8)
  animation.runImageAnimation(mySprite, assets.animation`Scroll out`, 50, false)
  pause(700)
  animation.runImageAnimation(
    mySprite,
    assets.animation`Title Fade in`,
    100,
    false
  )
  pause(400)
  sprites.destroy(mySprite)
  scene.setBackgroundImage(assets.image`Title`)
  pause(1000)
  mySprite2 = sprites.create(assets.image`BoatFront`, SpriteKind.Boat)
  mySprite2.setPosition(180, 65)
  mySprite2.vx += -10
  mySprite2.vy += 4
  pause(3500)
  mySprite2.vx += 10
  mySprite2.vy += -4
}
let mySprite2: Sprite = null
let mySprite: Sprite = null

// scene.setBackgroundImage(assets.image`GameOver`)
