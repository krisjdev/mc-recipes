// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:lapis_block"
	var block_ids = [
		"chipped:lapis_block_bricks", "chipped:lapis_block_mini_tiles", "chipped:lapis_block_pillar", "chipped:lapis_block_pillar_top",
		"chipped:lapis_block_scales", "chipped:angry_lapis_block", "chipped:blank_lapis_block_carving", "chipped:carved_lapis_block",
		"chipped:checkered_lapis_block_tiles", "chipped:cobbled_lapis_block", "chipped:cracked_lapis_block_bricks", "chipped:cracked_disordered_lapis_block_bricks",
		"chipped:cracked_flat_lapis_block_tiles", "chipped:creeper_lapis_block_carving", "chipped:crying_lapis_block", "chipped:cut_blank_lapis_block",
		"chipped:glad_lapis_block", "chipped:duh_lapis_block", "chipped:engraved_lapis_block", "chipped:eroded_lapis_block",
		"chipped:etched_lapis_block_bricks", "chipped:flat_lapis_block_tiles", "chipped:inlayed_lapis_block", "chipped:inscribed_lapis_block",
		"chipped:layed_lapis_block_bricks", "chipped:loded_lapis_block", "chipped:offset_lapis_block_bricks", "chipped:pillar_lapis_block_bricks",
		"chipped:prismal_lapis_block_remnants", "chipped:rough_lapis_block", "chipped:rounded_lapis_block_bricks", "chipped:runic_carved_lapis_block",
		"chipped:sad_lapis_block", "chipped:sanded_lapis_block", "chipped:small_lapis_block_bricks", "chipped:smooth_inlayed_lapis_block",
		"chipped:smooth_ringed_lapis_block", "chipped:smoothed_double_inlayed_lapis_block", "chipped:spider_lapis_block_carving", "chipped:spiraled_lapis_block",
		"chipped:stacked_lapis_block_bricks", "chipped:tiled_lapis_block", "chipped:tiny_lapis_block_bricks", "chipped:tiny_layered_lapis_block_bricks",
		"chipped:tiny_layered_lapis_block_slabs", "chipped:trodden_lapis_block", "chipped:unamused_lapis_block", "chipped:vertical_cut_lapis_block",
		"chipped:vertical_disordered_lapis_block_bricks", "chipped:weathered_lapis_block", "chipped:bordered_lapis_block", "chipped:brick_bordered_lapis_block",
		"chipped:cut_lapis_block_column", "chipped:edged_lapis_block_bricks", "chipped:overlapping_lapis_block_tiles", "chipped:polished_lapis_block",
		"chipped:smooth_lapis_block_column", "chipped:thick_inlayed_lapis_block", "chipped:tiled_lapis_block_column", "chipped:tiled_bordered_lapis_block",
		"chipped:tiny_brick_bordered_lapis_block", "chipped:curly_lapis_block_pillar", "chipped:fine_lapis_block_pillar", "chipped:ornate_lapis_block_pillar",
		"chipped:simple_lapis_block_pillar", "chipped:massive_lapis_block_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
