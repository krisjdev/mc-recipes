ServerEvents.recipes(event => {

    var source = "minecraft:coal_block"

    var block_ids = [
        "angry_coal_block", "blank_coal_block_carving", "bordered_coal_block", "brick_bordered_coal_block",
        "carved_coal_block", "checkered_coal_block_tiles",
        "coal_block_bricks", "coal_block_mini_tiles", "coal_block_pillar", "coal_block_pillar_top",
        "coal_block_scales", "cobbled_coal_block", "cracked_coal_block_bricks", "cracked_disordered_coal_block_bricks",
        "cracked_flat_coal_block_tiles", "creeper_coal_block_carving", "crying_coal_block", "curly_coal_block_pillar",
        "cut_blank_coal_block", "cut_coal_block_column", "duh_coal_block", "edged_coal_block_bricks",
        "engraved_coal_block", "eroded_coal_block", "etched_coal_block_bricks", "fine_coal_block_pillar",
        "flat_coal_block_tiles", "glad_coal_block", "inlayed_coal_block", "inscribed_coal_block",
        "layed_coal_block_bricks", "loded_coal_block", "massive_coal_block_bricks", "offset_coal_block_bricks",
        "ornate_coal_block_pillar", "overlapping_coal_block_tiles", "pillar_coal_block_bricks", "polished_coal_block",
        "prismal_coal_block_remnants", "rough_coal_block", "rounded_coal_block_bricks", "runic_carved_coal_block",
        "sad_coal_block", "sanded_coal_block", "simple_coal_block_pillar", "small_coal_block_bricks",
        "smooth_coal_block_column", "smooth_inlayed_coal_block", "smooth_ringed_coal_block", "smoothed_double_inlayed_coal_block",
        "spider_coal_block_carving", "spiraled_coal_block", "stacked_coal_block_bricks", "thick_inlayed_coal_block",
        "tiled_bordered_coal_block", "tiled_coal_block", "tiled_coal_block_column", "tiny_brick_bordered_coal_block",
        "tiny_coal_block_bricks", "tiny_layered_coal_block_bricks", "tiny_layered_coal_block_slabs", "trodden_coal_block",
        "unamused_coal_block", "vertical_cut_coal_block", "vertical_disordered_coal_block_bricks", "weathered_coal_block",
    ]

    block_ids.forEach(block => {
        event.stonecutting("chipped:" + block, source)
    })

})