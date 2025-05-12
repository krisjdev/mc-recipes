ServerEvents.recipes(event => {

    var source = "minecraft:acacia_trapdoor"

    var block_ids = [
        "barred_acacia_trapdoor", "checkered_acacia_trapdoor", "classic_acacia_trapdoor", "classic_windowed_acacia_trapdoor", 
        "cobweb_acacia_trapdoor", "distorted_acacia_trapdoor", "fancy_acacia_trapdoor", "golden_barred_acacia_trapdoor", 
        "heavy_acacia_trapdoor", "iron_barred_acacia_trapdoor", "leafy_acacia_trapdoor", "meshed_acacia_trapdoor", 
        "overgrown_acacia_trapdoor", "pointless_acacia_trapdoor", "slotted_acacia_trapdoor", "solid_acacia_trapdoor", 
        "suspicious_acacia_trapdoor", "twisted_acacia_trapdoor", "vined_acacia_trapdoor", "warted_acacia_trapdoor", 
        "windowed_acacia_trapdoor", "woven_acacia_trapdoor"
    ]

    block_ids.forEach(block => {
        event.stonecutting("chipped:" + block, source)
    })

})