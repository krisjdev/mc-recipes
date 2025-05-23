// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:dripstone_block"
	var block_ids = [
		"chipped:dripstone_block_bricks", "chipped:dripstone_block_mini_tiles", "chipped:dripstone_block_pillar", "chipped:dripstone_block_pillar_top",
		"chipped:dripstone_block_scales", "chipped:angry_dripstone_block", "chipped:blank_dripstone_block_carving", "chipped:carved_dripstone_block",
		"chipped:checkered_dripstone_block_tiles", "chipped:cobbled_dripstone_block", "chipped:cracked_dripstone_block_bricks", "chipped:cracked_disordered_dripstone_block_bricks",
		"chipped:cracked_flat_dripstone_block_tiles", "chipped:creeper_dripstone_block_carving", "chipped:crying_dripstone_block", "chipped:cut_blank_dripstone_block",
		"chipped:glad_dripstone_block", "chipped:duh_dripstone_block", "chipped:engraved_dripstone_block", "chipped:eroded_dripstone_block",
		"chipped:etched_dripstone_block_bricks", "chipped:flat_dripstone_block_tiles", "chipped:inlayed_dripstone_block", "chipped:inscribed_dripstone_block",
		"chipped:layed_dripstone_block_bricks", "chipped:loded_dripstone_block", "chipped:offset_dripstone_block_bricks", "chipped:pillar_dripstone_block_bricks",
		"chipped:prismal_dripstone_block_remnants", "chipped:rough_dripstone_block", "chipped:rounded_dripstone_block_bricks", "chipped:runic_carved_dripstone_block",
		"chipped:sad_dripstone_block", "chipped:sanded_dripstone_block", "chipped:small_dripstone_block_bricks", "chipped:smooth_inlayed_dripstone_block",
		"chipped:smooth_ringed_dripstone_block", "chipped:smoothed_double_inlayed_dripstone_block", "chipped:spider_dripstone_block_carving", "chipped:spiraled_dripstone_block",
		"chipped:stacked_dripstone_block_bricks", "chipped:tiled_dripstone_block", "chipped:tiny_dripstone_block_bricks", "chipped:tiny_layered_dripstone_block_bricks",
		"chipped:tiny_layered_dripstone_block_slabs", "chipped:trodden_dripstone_block", "chipped:unamused_dripstone_block", "chipped:vertical_cut_dripstone_block",
		"chipped:vertical_disordered_dripstone_block_bricks", "chipped:weathered_dripstone_block", "chipped:bordered_dripstone_block", "chipped:brick_bordered_dripstone_block",
		"chipped:cut_dripstone_block_column", "chipped:edged_dripstone_block_bricks", "chipped:overlapping_dripstone_block_tiles", "chipped:polished_dripstone_block",
		"chipped:smooth_dripstone_block_column", "chipped:thick_inlayed_dripstone_block", "chipped:tiled_dripstone_block_column", "chipped:tiled_bordered_dripstone_block",
		"chipped:tiny_brick_bordered_dripstone_block", "chipped:curly_dripstone_block_pillar", "chipped:fine_dripstone_block_pillar", "chipped:ornate_dripstone_block_pillar",
		"chipped:simple_dripstone_block_pillar", "chipped:massive_dripstone_block_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
