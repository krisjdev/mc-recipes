// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:nether_bricks"
	var block_ids = [
		"chipped:nether_bricks_bricks", "chipped:nether_bricks_mini_tiles", "chipped:nether_bricks_pillar", "chipped:nether_bricks_pillar_top",
		"chipped:nether_bricks_scales", "chipped:angry_nether_bricks", "chipped:blank_nether_bricks_carving", "chipped:carved_nether_bricks",
		"chipped:checkered_nether_bricks_tiles", "chipped:cobbled_nether_bricks", "chipped:cracked_nether_bricks_bricks", "chipped:cracked_disordered_nether_bricks_bricks",
		"chipped:cracked_flat_nether_bricks_tiles", "chipped:creeper_nether_bricks_carving", "chipped:crying_nether_bricks", "chipped:cut_blank_nether_bricks",
		"chipped:glad_nether_bricks", "chipped:duh_nether_bricks", "chipped:engraved_nether_bricks", "chipped:eroded_nether_bricks",
		"chipped:etched_nether_bricks_bricks", "chipped:flat_nether_bricks_tiles", "chipped:inlayed_nether_bricks", "chipped:inscribed_nether_bricks",
		"chipped:layed_nether_bricks_bricks", "chipped:loded_nether_bricks", "chipped:offset_nether_bricks_bricks", "chipped:pillar_nether_bricks_bricks",
		"chipped:prismal_nether_bricks_remnants", "chipped:rough_nether_bricks", "chipped:rounded_nether_bricks_bricks", "chipped:runic_carved_nether_bricks",
		"chipped:sad_nether_bricks", "chipped:sanded_nether_bricks", "chipped:small_nether_bricks_bricks", "chipped:smooth_inlayed_nether_bricks",
		"chipped:smooth_ringed_nether_bricks", "chipped:smoothed_double_inlayed_nether_bricks", "chipped:spider_nether_bricks_carving", "chipped:spiraled_nether_bricks",
		"chipped:stacked_nether_bricks_bricks", "chipped:tiled_nether_bricks", "chipped:tiny_nether_bricks_bricks", "chipped:tiny_layered_nether_bricks_bricks",
		"chipped:tiny_layered_nether_bricks_slabs", "chipped:trodden_nether_bricks", "chipped:unamused_nether_bricks", "chipped:vertical_cut_nether_bricks",
		"chipped:vertical_disordered_nether_bricks_bricks", "chipped:weathered_nether_bricks", "chipped:bordered_nether_bricks", "chipped:brick_bordered_nether_bricks",
		"chipped:cut_nether_bricks_column", "chipped:edged_nether_bricks_bricks", "chipped:overlapping_nether_bricks_tiles", "chipped:polished_nether_bricks",
		"chipped:smooth_nether_bricks_column", "chipped:thick_inlayed_nether_bricks", "chipped:tiled_nether_bricks_column", "chipped:tiled_bordered_nether_bricks",
		"chipped:tiny_brick_bordered_nether_bricks", "chipped:curly_nether_bricks_pillar", "chipped:fine_nether_bricks_pillar", "chipped:ornate_nether_bricks_pillar",
		"chipped:simple_nether_bricks_pillar", "chipped:massive_nether_bricks_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
