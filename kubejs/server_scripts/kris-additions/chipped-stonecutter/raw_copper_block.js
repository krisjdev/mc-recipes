// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:raw_copper_block"
	var block_ids = [
		"chipped:raw_copper_block_bricks", "chipped:raw_copper_block_mini_tiles", "chipped:raw_copper_block_pillar", "chipped:raw_copper_block_pillar_top",
		"chipped:raw_copper_block_scales", "chipped:angry_raw_copper_block", "chipped:blank_raw_copper_block_carving", "chipped:carved_raw_copper_block",
		"chipped:checkered_raw_copper_block_tiles", "chipped:cobbled_raw_copper_block", "chipped:cracked_raw_copper_block_bricks", "chipped:cracked_disordered_raw_copper_block_bricks",
		"chipped:cracked_flat_raw_copper_block_tiles", "chipped:creeper_raw_copper_block_carving", "chipped:crying_raw_copper_block", "chipped:cut_blank_raw_copper_block",
		"chipped:glad_raw_copper_block", "chipped:duh_raw_copper_block", "chipped:engraved_raw_copper_block", "chipped:eroded_raw_copper_block",
		"chipped:etched_raw_copper_block_bricks", "chipped:flat_raw_copper_block_tiles", "chipped:inlayed_raw_copper_block", "chipped:inscribed_raw_copper_block",
		"chipped:layed_raw_copper_block_bricks", "chipped:loded_raw_copper_block", "chipped:offset_raw_copper_block_bricks", "chipped:pillar_raw_copper_block_bricks",
		"chipped:prismal_raw_copper_block_remnants", "chipped:rough_raw_copper_block", "chipped:rounded_raw_copper_block_bricks", "chipped:runic_carved_raw_copper_block",
		"chipped:sad_raw_copper_block", "chipped:sanded_raw_copper_block", "chipped:small_raw_copper_block_bricks", "chipped:smooth_inlayed_raw_copper_block",
		"chipped:smooth_ringed_raw_copper_block", "chipped:smoothed_double_inlayed_raw_copper_block", "chipped:spider_raw_copper_block_carving", "chipped:spiraled_raw_copper_block",
		"chipped:stacked_raw_copper_block_bricks", "chipped:tiled_raw_copper_block", "chipped:tiny_raw_copper_block_bricks", "chipped:tiny_layered_raw_copper_block_bricks",
		"chipped:tiny_layered_raw_copper_block_slabs", "chipped:trodden_raw_copper_block", "chipped:unamused_raw_copper_block", "chipped:vertical_cut_raw_copper_block",
		"chipped:vertical_disordered_raw_copper_block_bricks", "chipped:weathered_raw_copper_block", "chipped:bordered_raw_copper_block", "chipped:brick_bordered_raw_copper_block",
		"chipped:cut_raw_copper_block_column", "chipped:edged_raw_copper_block_bricks", "chipped:overlapping_raw_copper_block_tiles", "chipped:polished_raw_copper_block",
		"chipped:smooth_raw_copper_block_column", "chipped:thick_inlayed_raw_copper_block", "chipped:tiled_raw_copper_block_column", "chipped:tiled_bordered_raw_copper_block",
		"chipped:tiny_brick_bordered_raw_copper_block", "chipped:curly_raw_copper_block_pillar", "chipped:fine_raw_copper_block_pillar", "chipped:ornate_raw_copper_block_pillar",
		"chipped:simple_raw_copper_block_pillar", "chipped:massive_raw_copper_block_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
