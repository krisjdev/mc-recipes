ServerEvents.recipes(event => {

    var source = "minecraft:acacia_door"

    var block_ids = [
        "beach_acacia_door", "boarded_acacia_door", "dual_paneled_acacia_door", "fortified_acacia_door", 
        "gated_acacia_door", "glass_acacia_door", "heavy_acacia_door", "overgrown_acacia_door", 
        "paneled_acacia_door", "paper_acacia_door", "pressed_acacia_door", "screen_acacia_door", 
        "secret_acacia_door", "shack_acacia_door", "sliding_acacia_door", "supported_acacia_door", 
        "tile_windowed_acacia_door", "tiled_acacia_door", "windowed_acacia_door"
    ]

    block_ids.forEach(block => {
        event.stonecutting("chipped:" + block, source)
    })

})