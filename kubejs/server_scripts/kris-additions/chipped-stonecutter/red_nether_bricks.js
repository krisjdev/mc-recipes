// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:red_nether_bricks"
	var block_ids = [
		"chipped:red_nether_bricks_bricks", "chipped:red_nether_bricks_mini_tiles", "chipped:red_nether_bricks_pillar", "chipped:red_nether_bricks_pillar_top",
		"chipped:red_nether_bricks_scales", "chipped:angry_red_nether_bricks", "chipped:blank_red_nether_bricks_carving", "chipped:carved_red_nether_bricks",
		"chipped:checkered_red_nether_bricks_tiles", "chipped:cobbled_red_nether_bricks", "chipped:cracked_red_nether_bricks_bricks", "chipped:cracked_disordered_red_nether_bricks_bricks",
		"chipped:cracked_flat_red_nether_bricks_tiles", "chipped:creeper_red_nether_bricks_carving", "chipped:crying_red_nether_bricks", "chipped:cut_blank_red_nether_bricks",
		"chipped:glad_red_nether_bricks", "chipped:duh_red_nether_bricks", "chipped:engraved_red_nether_bricks", "chipped:eroded_red_nether_bricks",
		"chipped:etched_red_nether_bricks_bricks", "chipped:flat_red_nether_bricks_tiles", "chipped:inlayed_red_nether_bricks", "chipped:inscribed_red_nether_bricks",
		"chipped:layed_red_nether_bricks_bricks", "chipped:loded_red_nether_bricks", "chipped:offset_red_nether_bricks_bricks", "chipped:pillar_red_nether_bricks_bricks",
		"chipped:prismal_red_nether_bricks_remnants", "chipped:rough_red_nether_bricks", "chipped:rounded_red_nether_bricks_bricks", "chipped:runic_carved_red_nether_bricks",
		"chipped:sad_red_nether_bricks", "chipped:sanded_red_nether_bricks", "chipped:small_red_nether_bricks_bricks", "chipped:smooth_inlayed_red_nether_bricks",
		"chipped:smooth_ringed_red_nether_bricks", "chipped:smoothed_double_inlayed_red_nether_bricks", "chipped:spider_red_nether_bricks_carving", "chipped:spiraled_red_nether_bricks",
		"chipped:stacked_red_nether_bricks_bricks", "chipped:tiled_red_nether_bricks", "chipped:tiny_red_nether_bricks_bricks", "chipped:tiny_layered_red_nether_bricks_bricks",
		"chipped:tiny_layered_red_nether_bricks_slabs", "chipped:trodden_red_nether_bricks", "chipped:unamused_red_nether_bricks", "chipped:vertical_cut_red_nether_bricks",
		"chipped:vertical_disordered_red_nether_bricks_bricks", "chipped:weathered_red_nether_bricks", "chipped:bordered_red_nether_bricks", "chipped:brick_bordered_red_nether_bricks",
		"chipped:cut_red_nether_bricks_column", "chipped:edged_red_nether_bricks_bricks", "chipped:overlapping_red_nether_bricks_tiles", "chipped:polished_red_nether_bricks",
		"chipped:smooth_red_nether_bricks_column", "chipped:thick_inlayed_red_nether_bricks", "chipped:tiled_red_nether_bricks_column", "chipped:tiled_bordered_red_nether_bricks",
		"chipped:tiny_brick_bordered_red_nether_bricks", "chipped:curly_red_nether_bricks_pillar", "chipped:fine_red_nether_bricks_pillar", "chipped:ornate_red_nether_bricks_pillar",
		"chipped:simple_red_nether_bricks_pillar", "chipped:massive_red_nether_bricks_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
