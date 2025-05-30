// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:clay"
	var block_ids = [
		"chipped:clay_bricks", "chipped:clay_mini_tiles", "chipped:clay_pillar", "chipped:clay_pillar_top",
		"chipped:clay_scales", "chipped:angry_clay", "chipped:blank_clay_carving", "chipped:carved_clay",
		"chipped:checkered_clay_tiles", "chipped:cobbled_clay", "chipped:cracked_clay_bricks", "chipped:cracked_disordered_clay_bricks",
		"chipped:cracked_flat_clay_tiles", "chipped:creeper_clay_carving", "chipped:crying_clay", "chipped:cut_blank_clay",
		"chipped:glad_clay", "chipped:duh_clay", "chipped:engraved_clay", "chipped:etched_clay_bricks",
		"chipped:flat_clay_tiles", "chipped:inlayed_clay", "chipped:inscribed_clay", "chipped:layed_clay_bricks",
		"chipped:loded_clay", "chipped:offset_clay_bricks", "chipped:pillar_clay_bricks", "chipped:prismal_clay_remnants",
		"chipped:rough_clay", "chipped:rounded_clay_bricks", "chipped:runic_carved_clay", "chipped:sad_clay",
		"chipped:sanded_clay", "chipped:small_clay_bricks", "chipped:smooth_inlayed_clay", "chipped:smooth_ringed_clay",
		"chipped:smoothed_double_inlayed_clay", "chipped:spider_clay_carving", "chipped:spiraled_clay", "chipped:stacked_clay_bricks",
		"chipped:tiled_clay", "chipped:tiny_clay_bricks", "chipped:tiny_layered_clay_bricks", "chipped:tiny_layered_clay_slabs",
		"chipped:trodden_clay", "chipped:unamused_clay", "chipped:vertical_cut_clay", "chipped:vertical_disordered_clay_bricks",
		"chipped:weathered_clay", "chipped:bordered_clay", "chipped:brick_bordered_clay", "chipped:cut_clay_column",
		"chipped:edged_clay_bricks", "chipped:overlapping_clay_tiles", "chipped:polished_clay", "chipped:smooth_clay_column",
		"chipped:thick_inlayed_clay", "chipped:tiled_clay_column", "chipped:tiled_bordered_clay", "chipped:tiny_brick_bordered_clay",
		"chipped:curly_clay_pillar", "chipped:fine_clay_pillar", "chipped:ornate_clay_pillar", "chipped:simple_clay_pillar",
		"chipped:massive_clay_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
