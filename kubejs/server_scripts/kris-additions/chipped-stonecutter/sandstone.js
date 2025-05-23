// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:sandstone"
	var block_ids = [
		"chipped:sandstone_bricks", "chipped:sandstone_mini_tiles", "chipped:sandstone_pillar", "chipped:sandstone_pillar_top",
		"chipped:sandstone_scales", "chipped:angry_sandstone", "chipped:blank_sandstone_carving", "chipped:carved_sandstone",
		"chipped:checkered_sandstone_tiles", "chipped:cobbled_sandstone", "chipped:cracked_sandstone_bricks", "chipped:cracked_disordered_sandstone_bricks",
		"chipped:cracked_flat_sandstone_tiles", "chipped:creeper_sandstone_carving", "chipped:crying_sandstone", "chipped:cut_blank_sandstone",
		"chipped:glad_sandstone", "chipped:duh_sandstone", "chipped:engraved_sandstone", "chipped:eroded_sandstone",
		"chipped:etched_sandstone_bricks", "chipped:flat_sandstone_tiles", "chipped:inlayed_sandstone", "chipped:inscribed_sandstone",
		"chipped:layed_sandstone_bricks", "chipped:loded_sandstone", "chipped:offset_sandstone_bricks", "chipped:pillar_sandstone_bricks",
		"chipped:prismal_sandstone_remnants", "chipped:rough_sandstone", "chipped:rounded_sandstone_bricks", "chipped:runic_carved_sandstone",
		"chipped:sad_sandstone", "chipped:sanded_sandstone", "chipped:small_sandstone_bricks", "chipped:smooth_inlayed_sandstone",
		"chipped:smooth_ringed_sandstone", "chipped:smoothed_double_inlayed_sandstone", "chipped:spider_sandstone_carving", "chipped:spiraled_sandstone",
		"chipped:stacked_sandstone_bricks", "chipped:tiled_sandstone", "chipped:tiny_sandstone_bricks", "chipped:tiny_layered_sandstone_bricks",
		"chipped:tiny_layered_sandstone_slabs", "chipped:trodden_sandstone", "chipped:unamused_sandstone", "chipped:vertical_cut_sandstone",
		"chipped:vertical_disordered_sandstone_bricks", "chipped:weathered_sandstone", "chipped:bordered_sandstone", "chipped:brick_bordered_sandstone",
		"chipped:cut_sandstone_column", "chipped:edged_sandstone_bricks", "chipped:overlapping_sandstone_tiles", "chipped:polished_sandstone",
		"chipped:smooth_sandstone_column", "chipped:thick_inlayed_sandstone", "chipped:tiled_sandstone_column", "chipped:tiled_bordered_sandstone",
		"chipped:tiny_brick_bordered_sandstone", "chipped:curly_sandstone_pillar", "chipped:fine_sandstone_pillar", "chipped:ornate_sandstone_pillar",
		"chipped:simple_sandstone_pillar", "chipped:massive_sandstone_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
