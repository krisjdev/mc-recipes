// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:bricks"
	var block_ids = [
		"chipped:borderless_bricks_bricks", "chipped:borderless_bricks_mini_tiles", "chipped:borderless_bricks_pillar", "chipped:borderless_bricks_pillar_top",
		"chipped:borderless_bricks_scales", "chipped:angry_borderless_bricks", "chipped:blank_borderless_bricks_carving", "chipped:carved_borderless_bricks",
		"chipped:checkered_borderless_bricks_tiles", "chipped:cobbled_borderless_bricks", "chipped:cracked_borderless_bricks_bricks", "chipped:cracked_disordered_borderless_bricks_bricks",
		"chipped:cracked_flat_borderless_bricks_tiles", "chipped:creeper_borderless_bricks_carving", "chipped:crying_borderless_bricks", "chipped:cut_blank_borderless_bricks",
		"chipped:glad_borderless_bricks", "chipped:duh_borderless_bricks", "chipped:engraved_borderless_bricks", "chipped:eroded_borderless_bricks",
		"chipped:etched_borderless_bricks_bricks", "chipped:flat_borderless_bricks_tiles", "chipped:inlayed_borderless_bricks", "chipped:inscribed_borderless_bricks",
		"chipped:loded_borderless_bricks", "chipped:offset_borderless_bricks_bricks", "chipped:pillar_borderless_bricks_bricks", "chipped:prismal_borderless_bricks_remnants",
		"chipped:rough_borderless_bricks", "chipped:rounded_borderless_bricks_bricks", "chipped:runic_carved_borderless_bricks", "chipped:sad_borderless_bricks",
		"chipped:sanded_borderless_bricks", "chipped:small_borderless_bricks_bricks", "chipped:smooth_inlayed_borderless_bricks", "chipped:smooth_ringed_borderless_bricks",
		"chipped:smoothed_double_inlayed_borderless_bricks", "chipped:spider_borderless_bricks_carving", "chipped:spiraled_borderless_bricks", "chipped:stacked_borderless_bricks_bricks",
		"chipped:tiled_borderless_bricks", "chipped:tiny_borderless_bricks_bricks", "chipped:tiny_layered_borderless_bricks_bricks", "chipped:tiny_layered_borderless_bricks_slabs",
		"chipped:trodden_borderless_bricks", "chipped:unamused_borderless_bricks", "chipped:vertical_cut_borderless_bricks", "chipped:vertical_disordered_borderless_bricks_bricks",
		"chipped:weathered_borderless_bricks", "chipped:bordered_borderless_bricks", "chipped:brick_bordered_borderless_bricks", "chipped:cut_borderless_bricks_column",
		"chipped:edged_borderless_bricks_bricks", "chipped:overlapping_borderless_bricks_tiles", "chipped:polished_borderless_bricks", "chipped:smooth_borderless_bricks_column",
		"chipped:thick_inlayed_borderless_bricks", "chipped:tiled_borderless_bricks_column", "chipped:tiled_bordered_borderless_bricks", "chipped:tiny_brick_bordered_borderless_bricks",
		"chipped:curly_borderless_bricks_pillar", "chipped:fine_borderless_bricks_pillar", "chipped:ornate_borderless_bricks_pillar", "chipped:simple_borderless_bricks_pillar",
		"chipped:massive_borderless_bricks_bricks", 

		"chipped:bricks_bricks", "chipped:cracked_bricks_bricks", "chipped:cracked_disordered_bricks_bricks", "chipped:etched_bricks_bricks", "chipped:offset_bricks_bricks",
		"chipped:pillar_bricks_bricks", "chipped:rounded_bricks_bricks", "chipped:small_bricks_bricks", "chipped:stacked_bricks_bricks", "chipped:tiny_bricks_bricks",
		"chipped:tiny_layered_bricks_bricks", "chipped:vertical_disordered_bricks_bricks", "chipped:edged_bricks_bricks", "chipped:massive_bricks_bricks",
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
