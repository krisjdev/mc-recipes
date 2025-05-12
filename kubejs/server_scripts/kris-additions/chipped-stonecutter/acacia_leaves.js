ServerEvents.recipes(event => {

    var source = "minecraft:acacia_leaves"

    var block_ids = [
        "apple_acacia_leaves", "cherry_acacia_leaves", "dead_acacia_leaves", "frosted_acacia_leaves",
        "golden_acacia_leaves", "golden_apple_acacia_leaves", "golden_cherry_acacia_leaves", "magenta_flower_acacia_leaves",
        "orange_acacia_leaves", "red_acacia_leaves","white_flower_acacia_leaves"
    ]

    block_ids.forEach(block => {
        event.stonecutting("chipped:" + block, source)
    })

})