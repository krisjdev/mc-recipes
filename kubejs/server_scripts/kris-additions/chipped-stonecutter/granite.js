// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:granite"
	var block_ids = [
		"chipped:granite_bricks", "chipped:granite_mini_tiles", "chipped:granite_pillar", "chipped:granite_pillar_top",
		"chipped:granite_scales", "chipped:angry_granite", "chipped:blank_granite_carving", "chipped:carved_granite",
		"chipped:checkered_granite_tiles", "chipped:cobbled_granite", "chipped:cracked_granite_bricks", "chipped:cracked_disordered_granite_bricks",
		"chipped:cracked_flat_granite_tiles", "chipped:creeper_granite_carving", "chipped:crying_granite", "chipped:cut_blank_granite",
		"chipped:glad_granite", "chipped:duh_granite", "chipped:engraved_granite", "chipped:eroded_granite",
		"chipped:etched_granite_bricks", "chipped:flat_granite_tiles", "chipped:inlayed_granite", "chipped:inscribed_granite",
		"chipped:layed_granite_bricks", "chipped:loded_granite", "chipped:offset_granite_bricks", "chipped:pillar_granite_bricks",
		"chipped:prismal_granite_remnants", "chipped:rough_granite", "chipped:rounded_granite_bricks", "chipped:runic_carved_granite",
		"chipped:sad_granite", "chipped:sanded_granite", "chipped:small_granite_bricks", "chipped:smooth_inlayed_granite",
		"chipped:smooth_ringed_granite", "chipped:smoothed_double_inlayed_granite", "chipped:spider_granite_carving", "chipped:spiraled_granite",
		"chipped:stacked_granite_bricks", "chipped:tiled_granite", "chipped:tiny_granite_bricks", "chipped:tiny_layered_granite_bricks",
		"chipped:tiny_layered_granite_slabs", "chipped:trodden_granite", "chipped:unamused_granite", "chipped:vertical_cut_granite",
		"chipped:vertical_disordered_granite_bricks", "chipped:weathered_granite", "chipped:bordered_granite", "chipped:brick_bordered_granite",
		"chipped:cut_granite_column", "chipped:edged_granite_bricks", "chipped:overlapping_granite_tiles", "chipped:polished_granite",
		"chipped:smooth_granite_column", "chipped:thick_inlayed_granite", "chipped:tiled_granite_column", "chipped:tiled_bordered_granite",
		"chipped:tiny_brick_bordered_granite", "chipped:curly_granite_pillar", "chipped:fine_granite_pillar", "chipped:ornate_granite_pillar",
		"chipped:simple_granite_pillar", "chipped:massive_granite_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
