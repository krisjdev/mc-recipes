// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:amethyst_block"
	var block_ids = [
		"chipped:amethyst_block_bricks", "chipped:amethyst_block_mini_tiles", "chipped:amethyst_block_pillar", "chipped:amethyst_block_pillar_top",
		"chipped:amethyst_block_scales", "chipped:angry_amethyst_block", "chipped:blank_amethyst_block_carving", "chipped:carved_amethyst_block",
		"chipped:checkered_amethyst_block_tiles", "chipped:cobbled_amethyst_block", "chipped:cracked_amethyst_block_bricks", "chipped:cracked_disordered_amethyst_block_bricks",
		"chipped:cracked_flat_amethyst_block_tiles", "chipped:creeper_amethyst_block_carving", "chipped:crying_amethyst_block", "chipped:cut_blank_amethyst_block",
		"chipped:glad_amethyst_block", "chipped:duh_amethyst_block", "chipped:engraved_amethyst_block", "chipped:eroded_amethyst_block",
		"chipped:etched_amethyst_block_bricks", "chipped:flat_amethyst_block_tiles", "chipped:inlayed_amethyst_block", "chipped:inscribed_amethyst_block",
		"chipped:layed_amethyst_block_bricks", "chipped:loded_amethyst_block", "chipped:offset_amethyst_block_bricks", "chipped:pillar_amethyst_block_bricks",
		"chipped:prismal_amethyst_block_remnants", "chipped:rough_amethyst_block", "chipped:rounded_amethyst_block_bricks", "chipped:runic_carved_amethyst_block",
		"chipped:sad_amethyst_block", "chipped:sanded_amethyst_block", "chipped:small_amethyst_block_bricks", "chipped:smooth_inlayed_amethyst_block",
		"chipped:smooth_ringed_amethyst_block", "chipped:smoothed_double_inlayed_amethyst_block", "chipped:spider_amethyst_block_carving", "chipped:spiraled_amethyst_block",
		"chipped:stacked_amethyst_block_bricks", "chipped:tiled_amethyst_block", "chipped:tiny_amethyst_block_bricks", "chipped:tiny_layered_amethyst_block_bricks",
		"chipped:tiny_layered_amethyst_block_slabs", "chipped:trodden_amethyst_block", "chipped:unamused_amethyst_block", "chipped:vertical_cut_amethyst_block",
		"chipped:vertical_disordered_amethyst_block_bricks", "chipped:weathered_amethyst_block", "chipped:bordered_amethyst_block", "chipped:brick_bordered_amethyst_block",
		"chipped:cut_amethyst_block_column", "chipped:edged_amethyst_block_bricks", "chipped:overlapping_amethyst_block_tiles", "chipped:polished_amethyst_block",
		"chipped:smooth_amethyst_block_column", "chipped:thick_inlayed_amethyst_block", "chipped:tiled_amethyst_block_column", "chipped:tiled_bordered_amethyst_block",
		"chipped:tiny_brick_bordered_amethyst_block", "chipped:curly_amethyst_block_pillar", "chipped:fine_amethyst_block_pillar", "chipped:ornate_amethyst_block_pillar",
		"chipped:simple_amethyst_block_pillar", "chipped:massive_amethyst_block_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
