// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:redstone_block"
	var block_ids = [
		"chipped:redstone_block_bricks", "chipped:redstone_block_mini_tiles", "chipped:redstone_block_pillar", "chipped:redstone_block_pillar_top",
		"chipped:redstone_block_scales", "chipped:angry_redstone_block", "chipped:blank_redstone_block_carving", "chipped:carved_redstone_block",
		"chipped:checkered_redstone_block_tiles", "chipped:cobbled_redstone_block", "chipped:cracked_redstone_block_bricks", "chipped:cracked_disordered_redstone_block_bricks",
		"chipped:cracked_flat_redstone_block_tiles", "chipped:creeper_redstone_block_carving", "chipped:crying_redstone_block", "chipped:cut_blank_redstone_block",
		"chipped:glad_redstone_block", "chipped:duh_redstone_block", "chipped:engraved_redstone_block", "chipped:eroded_redstone_block",
		"chipped:etched_redstone_block_bricks", "chipped:flat_redstone_block_tiles", "chipped:inlayed_redstone_block", "chipped:inscribed_redstone_block",
		"chipped:layed_redstone_block_bricks", "chipped:loded_redstone_block", "chipped:offset_redstone_block_bricks", "chipped:pillar_redstone_block_bricks",
		"chipped:prismal_redstone_block_remnants", "chipped:rough_redstone_block", "chipped:rounded_redstone_block_bricks", "chipped:runic_carved_redstone_block",
		"chipped:sad_redstone_block", "chipped:sanded_redstone_block", "chipped:small_redstone_block_bricks", "chipped:smooth_inlayed_redstone_block",
		"chipped:smooth_ringed_redstone_block", "chipped:smoothed_double_inlayed_redstone_block", "chipped:spider_redstone_block_carving", "chipped:spiraled_redstone_block",
		"chipped:stacked_redstone_block_bricks", "chipped:tiled_redstone_block", "chipped:tiny_redstone_block_bricks", "chipped:tiny_layered_redstone_block_bricks",
		"chipped:tiny_layered_redstone_block_slabs", "chipped:trodden_redstone_block", "chipped:unamused_redstone_block", "chipped:vertical_cut_redstone_block",
		"chipped:vertical_disordered_redstone_block_bricks", "chipped:weathered_redstone_block", "chipped:bordered_redstone_block", "chipped:brick_bordered_redstone_block",
		"chipped:cut_redstone_block_column", "chipped:edged_redstone_block_bricks", "chipped:overlapping_redstone_block_tiles", "chipped:polished_redstone_block",
		"chipped:smooth_redstone_block_column", "chipped:thick_inlayed_redstone_block", "chipped:tiled_redstone_block_column", "chipped:tiled_bordered_redstone_block",
		"chipped:tiny_brick_bordered_redstone_block", "chipped:curly_redstone_block_pillar", "chipped:fine_redstone_block_pillar", "chipped:ornate_redstone_block_pillar",
		"chipped:simple_redstone_block_pillar", "chipped:massive_redstone_block_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
