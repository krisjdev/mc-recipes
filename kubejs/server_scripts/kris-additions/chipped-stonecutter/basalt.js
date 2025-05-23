// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:basalt"
	var block_ids = [
		"chipped:basalt_bricks", "chipped:basalt_mini_tiles", "chipped:basalt_pillar", "chipped:basalt_pillar_top",
		"chipped:basalt_scales", "chipped:angry_basalt", "chipped:blank_basalt_carving", "chipped:carved_basalt",
		"chipped:checkered_basalt_tiles", "chipped:cobbled_basalt", "chipped:cracked_basalt_bricks", "chipped:cracked_disordered_basalt_bricks",
		"chipped:cracked_flat_basalt_tiles", "chipped:creeper_basalt_carving", "chipped:crying_basalt", "chipped:cut_blank_basalt",
		"chipped:glad_basalt", "chipped:duh_basalt", "chipped:engraved_basalt", "chipped:eroded_basalt",
		"chipped:etched_basalt_bricks", "chipped:flat_basalt_tiles", "chipped:inlayed_basalt", "chipped:inscribed_basalt",
		"chipped:layed_basalt_bricks", "chipped:loded_basalt", "chipped:offset_basalt_bricks", "chipped:pillar_basalt_bricks",
		"chipped:prismal_basalt_remnants", "chipped:rounded_basalt_bricks", "chipped:runic_carved_basalt", "chipped:sad_basalt",
		"chipped:sanded_basalt", "chipped:small_basalt_bricks", "chipped:smooth_inlayed_basalt", "chipped:smooth_ringed_basalt",
		"chipped:smoothed_double_inlayed_basalt", "chipped:spider_basalt_carving", "chipped:spiraled_basalt", "chipped:stacked_basalt_bricks",
		"chipped:tiled_basalt", "chipped:tiny_basalt_bricks", "chipped:tiny_layered_basalt_bricks", "chipped:tiny_layered_basalt_slabs",
		"chipped:unamused_basalt", "chipped:vertical_cut_basalt", "chipped:vertical_disordered_basalt_bricks", "chipped:weathered_basalt",
		"chipped:bordered_basalt", "chipped:brick_bordered_basalt", "chipped:cut_basalt_column", "chipped:edged_basalt_bricks",
		"chipped:overlapping_basalt_tiles", "chipped:polished_basalt", "chipped:smooth_basalt_column", "chipped:thick_inlayed_basalt",
		"chipped:tiled_basalt_column", "chipped:tiled_bordered_basalt", "chipped:tiny_brick_bordered_basalt", "chipped:curly_basalt_pillar",
		"chipped:fine_basalt_pillar", "chipped:ornate_basalt_pillar", "chipped:simple_basalt_pillar", "chipped:massive_basalt_bricks",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
