// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:red_sandstone"
	var block_ids = [
		"chipped:red_sandstone_bricks", "chipped:red_sandstone_mini_tiles", "chipped:red_sandstone_pillar", "chipped:red_sandstone_pillar_top",
		"chipped:red_sandstone_scales", "chipped:angry_red_sandstone", "chipped:blank_red_sandstone_carving", "chipped:carved_red_sandstone",
		"chipped:checkered_red_sandstone_tiles", "chipped:cobbled_red_sandstone", "chipped:cracked_red_sandstone_bricks", "chipped:cracked_disordered_red_sandstone_bricks",
		"chipped:cracked_flat_red_sandstone_tiles", "chipped:creeper_red_sandstone_carving", "chipped:crying_red_sandstone", "chipped:cut_blank_red_sandstone",
		"chipped:glad_red_sandstone", "chipped:duh_red_sandstone", "chipped:engraved_red_sandstone", "chipped:eroded_red_sandstone",
		"chipped:etched_red_sandstone_bricks", "chipped:flat_red_sandstone_tiles", "chipped:inlayed_red_sandstone", "chipped:inscribed_red_sandstone",
		"chipped:layed_red_sandstone_bricks", "chipped:loded_red_sandstone", "chipped:offset_red_sandstone_bricks", "chipped:pillar_red_sandstone_bricks",
		"chipped:prismal_red_sandstone_remnants", "chipped:rough_red_sandstone", "chipped:rounded_red_sandstone_bricks", "chipped:runic_carved_red_sandstone",
		"chipped:sad_red_sandstone", "chipped:sanded_red_sandstone", "chipped:small_red_sandstone_bricks", "chipped:smooth_inlayed_red_sandstone",
		"chipped:smooth_ringed_red_sandstone", "chipped:smoothed_double_inlayed_red_sandstone", "chipped:spider_red_sandstone_carving", "chipped:spiraled_red_sandstone",
		"chipped:stacked_red_sandstone_bricks", "chipped:tiled_red_sandstone", "chipped:tiny_red_sandstone_bricks", "chipped:tiny_layered_red_sandstone_bricks",
		"chipped:tiny_layered_red_sandstone_slabs", "chipped:trodden_red_sandstone", "chipped:unamused_red_sandstone", "chipped:vertical_cut_red_sandstone",
		"chipped:vertical_disordered_red_sandstone_bricks", "chipped:weathered_red_sandstone", "chipped:bordered_red_sandstone", "chipped:brick_bordered_red_sandstone",
		"chipped:cut_red_sandstone_column", "chipped:edged_red_sandstone_bricks", "chipped:overlapping_red_sandstone_tiles", "chipped:polished_red_sandstone",
		"chipped:smooth_red_sandstone_column", "chipped:thick_inlayed_red_sandstone", "chipped:tiled_red_sandstone_column", "chipped:tiled_bordered_red_sandstone",
		"chipped:tiny_brick_bordered_red_sandstone", "chipped:curly_red_sandstone_pillar", "chipped:fine_red_sandstone_pillar", "chipped:ornate_red_sandstone_pillar",
		"chipped:simple_red_sandstone_pillar", "chipped:massive_red_sandstone_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
