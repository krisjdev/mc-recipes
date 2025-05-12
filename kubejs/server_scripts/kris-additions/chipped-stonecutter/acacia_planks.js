ServerEvents.recipes(event => {

    var source = "minecraft:acacia_planks"

    var block_ids = [
        "acacia_planks_mosaic", "acacia_planks_panel", "acacia_planks_shavings", "basket_woven_acacia_planks", 
        "boxed_acacia_planks", "brick_bond_acacia_planks", "bricky_acacia_planks", "cornered_acacia_planks", 
        "crated_acacia_planks", "cross_laced_acacia_planks", "crossed_acacia_planks", "detailed_acacia_planks", 
        "diagonal_acacia_planks", "diamond_acacia_planks", "double_herringbone_acacia_planks", "enclosed_acacia_planks", 
        "fine_acacia_planks", "fine_vertical_acacia_planks", "framed_acacia_planks", "herringbone_acacia_planks", 
        "hewn_acacia_planks", "laced_acacia_planks", "nailed_acacia_planks", "natural_acacia_planks", 
        "pegged_acacia_planks", "polished_acacia_planks", "railed_acacia_planks", "shifted_acacia_planks", 
        "slanted_acacia_planks", "smooth_acacia_planks", "stacked_acacia_planks", "thin_acacia_planks", 
        "tiled_acacia_planks", "versailles_acacia_planks", "vertical_acacia_planks", "vertically_railed_acacia_planks", 
        "whirlwind_acacia_planks", "wickered_acacia_planks"
    ]

    block_ids.forEach(block => {
        event.stonecutting("chipped:" + block, source)
    })

})