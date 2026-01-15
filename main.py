def on_on_chat():
    mobs.apply_effect(NIGHT_VISION, mobs.target(NEAREST_PLAYER), 1e+221, 255)
    castles.build_simple_castle(COBBLESTONE)
    player.execute("say Vale bro")
player.on_chat("iaiaayeyeyeye", on_on_chat)

pixelArt.draw_image(img("""
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
        """),
    pos(0, 100, 0),
    WEST)