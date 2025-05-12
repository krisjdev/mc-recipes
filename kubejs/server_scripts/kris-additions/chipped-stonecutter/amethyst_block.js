ServerEvents.recipes(event => {

    var source = "minecraft:amethyst_block"

    var block_ids = [
        "amethyst_block_bricks", "amethyst_block_mini_tiles", "amethyst_block_pillar", "amethyst_block_pillar_top",
        "amethyst_block_scales", "angry_amethyst_block", "blank_amethyst_block_carving", "bordered_amethyst_block",
        "brick_bordered_amethyst_block", "carved_amethyst_block", "checkered_amethyst_block_tiles", "cobbled_amethyst_block",
        "cracked_amethyst_block_bricks", "cracked_disordered_amethyst_block_bricks", "cracked_flat_amethyst_block_tiles", 
        "creeper_amethyst_block_carving", "crying_amethyst_block", "curly_amethyst_block_pillar", "cut_amethyst_block_column",
        "cut_blank_amethyst_block", "duh_amethyst_block", "edged_amethyst_block_bricks", "engraved_amethyst_block", "eroded_amethyst_block",
        "etched_amethyst_block_bricks", "fine_amethyst_block_pillar", "flat_amethyst_block_tiles", "glad_amethyst_block", 
        "inlayed_amethyst_block", "inscribed_amethyst_block", "layed_amethyst_block_bricks", "loded_amethyst_block", 
        "massive_amethyst_block_bricks", "offset_amethyst_block_bricks", "ornate_amethyst_block_pillar", "overlapping_amethyst_block_tiles",
        "pillar_amethyst_block_bricks", "polished_amethyst_block", "prismal_amethyst_block_remnants", "rough_amethyst_block",
        "rounded_amethyst_block_bricks", "runic_carved_amethyst_block", "sad_amethyst_block", "sanded_amethyst_block",
        "simple_amethyst_block_pillar", "small_amethyst_block_bricks", "smooth_amethyst_block_column", "smooth_inlayed_amethyst_block",
        "smooth_ringed_amethyst_block", "smoothed_double_inlayed_amethyst_block", "spider_amethyst_block_carving", "spiraled_amethyst_block",
        "stacked_amethyst_block_bricks", "thick_inlayed_amethyst_block", "tiled_amethyst_block", "tiled_amethyst_block_column",
        "tiled_bordered_amethyst_block", "tiny_amethyst_block_bricks", "tiny_brick_bordered_amethyst_block", "tiny_layered_amethyst_block_bricks",
        "tiny_layered_amethyst_block_slabs", "trodden_amethyst_block", "unamused_amethyst_block", "vertical_cut_amethyst_block",
        "vertical_disordered_amethyst_block_bricks", "weathered_amethyst_block"
    ]

    block_ids.forEach(block => {
        event.stonecutting("chipped:" + block, source)
    })

})