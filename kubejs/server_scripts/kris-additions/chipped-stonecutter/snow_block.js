// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:snow_block"
	var block_ids = [
		"chipped:snow_block_bricks", "chipped:snow_block_mini_tiles", "chipped:snow_block_pillar", "chipped:snow_block_pillar_top",
		"chipped:snow_block_scales", "chipped:angry_snow_block", "chipped:blank_snow_block_carving", "chipped:carved_snow_block",
		"chipped:checkered_snow_block_tiles", "chipped:cobbled_snow_block", "chipped:cracked_snow_block_bricks", "chipped:cracked_disordered_snow_block_bricks",
		"chipped:cracked_flat_snow_block_tiles", "chipped:creeper_snow_block_carving", "chipped:crying_snow_block", "chipped:cut_blank_snow_block",
		"chipped:glad_snow_block", "chipped:duh_snow_block", "chipped:engraved_snow_block", "chipped:eroded_snow_block",
		"chipped:etched_snow_block_bricks", "chipped:flat_snow_block_tiles", "chipped:inlayed_snow_block", "chipped:inscribed_snow_block",
		"chipped:layed_snow_block_bricks", "chipped:loded_snow_block", "chipped:offset_snow_block_bricks", "chipped:pillar_snow_block_bricks",
		"chipped:prismal_snow_block_remnants", "chipped:rough_snow_block", "chipped:rounded_snow_block_bricks", "chipped:runic_carved_snow_block",
		"chipped:sad_snow_block", "chipped:sanded_snow_block", "chipped:small_snow_block_bricks", "chipped:smooth_inlayed_snow_block",
		"chipped:smooth_ringed_snow_block", "chipped:smoothed_double_inlayed_snow_block", "chipped:spider_snow_block_carving", "chipped:spiraled_snow_block",
		"chipped:stacked_snow_block_bricks", "chipped:tiled_snow_block", "chipped:tiny_snow_block_bricks", "chipped:tiny_layered_snow_block_bricks",
		"chipped:tiny_layered_snow_block_slabs", "chipped:trodden_snow_block", "chipped:unamused_snow_block", "chipped:vertical_cut_snow_block",
		"chipped:vertical_disordered_snow_block_bricks", "chipped:weathered_snow_block", "chipped:bordered_snow_block", "chipped:brick_bordered_snow_block",
		"chipped:cut_snow_block_column", "chipped:edged_snow_block_bricks", "chipped:overlapping_snow_block_tiles", "chipped:polished_snow_block",
		"chipped:smooth_snow_block_column", "chipped:thick_inlayed_snow_block", "chipped:tiled_snow_block_column", "chipped:tiled_bordered_snow_block",
		"chipped:tiny_brick_bordered_snow_block", "chipped:curly_snow_block_pillar", "chipped:fine_snow_block_pillar", "chipped:ornate_snow_block_pillar",
		"chipped:simple_snow_block_pillar", "chipped:massive_snow_block_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
