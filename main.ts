player.onChat("iaiaayeyeyeye", function () {
    mobs.applyEffect(NIGHT_VISION, mobs.target(NEAREST_PLAYER), 1e+221, 255)
    castles.buildSimpleCastle(COBBLESTONE)
    pixelArt.drawImage(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 f f 5 5 5 5 5 5 5 5 5 5 f f 5 
        5 f 1 5 5 5 5 5 5 5 5 5 5 1 f 5 
        5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 f 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
        5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5 
        5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5 
        5 5 5 5 f f f f f f f f 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `, pos(0, 100, 0), WEST)
    player.execute(
    "say Vale bro"
    )
})
