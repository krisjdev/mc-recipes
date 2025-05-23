// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:diorite"
	var block_ids = [
		"chipped:diorite_bricks", "chipped:diorite_mini_tiles", "chipped:diorite_pillar", "chipped:diorite_pillar_top",
		"chipped:diorite_scales", "chipped:angry_diorite", "chipped:blank_diorite_carving", "chipped:carved_diorite",
		"chipped:checkered_diorite_tiles", "chipped:cobbled_diorite", "chipped:cracked_diorite_bricks", "chipped:cracked_disordered_diorite_bricks",
		"chipped:cracked_flat_diorite_tiles", "chipped:creeper_diorite_carving", "chipped:crying_diorite", "chipped:cut_blank_diorite",
		"chipped:glad_diorite", "chipped:duh_diorite", "chipped:engraved_diorite", "chipped:eroded_diorite",
		"chipped:etched_diorite_bricks", "chipped:flat_diorite_tiles", "chipped:inlayed_diorite", "chipped:inscribed_diorite",
		"chipped:layed_diorite_bricks", "chipped:loded_diorite", "chipped:offset_diorite_bricks", "chipped:pillar_diorite_bricks",
		"chipped:prismal_diorite_remnants", "chipped:rough_diorite", "chipped:rounded_diorite_bricks", "chipped:runic_carved_diorite",
		"chipped:sad_diorite", "chipped:sanded_diorite", "chipped:small_diorite_bricks", "chipped:smooth_inlayed_diorite",
		"chipped:smooth_ringed_diorite", "chipped:smoothed_double_inlayed_diorite", "chipped:spider_diorite_carving", "chipped:spiraled_diorite",
		"chipped:stacked_diorite_bricks", "chipped:tiled_diorite", "chipped:tiny_diorite_bricks", "chipped:tiny_layered_diorite_bricks",
		"chipped:tiny_layered_diorite_slabs", "chipped:trodden_diorite", "chipped:unamused_diorite", "chipped:vertical_cut_diorite",
		"chipped:vertical_disordered_diorite_bricks", "chipped:weathered_diorite", "chipped:bordered_diorite", "chipped:brick_bordered_diorite",
		"chipped:cut_diorite_column", "chipped:edged_diorite_bricks", "chipped:overlapping_diorite_tiles", "chipped:polished_diorite",
		"chipped:smooth_diorite_column", "chipped:thick_inlayed_diorite", "chipped:tiled_diorite_column", "chipped:tiled_bordered_diorite",
		"chipped:tiny_brick_bordered_diorite", "chipped:curly_diorite_pillar", "chipped:fine_diorite_pillar", "chipped:ornate_diorite_pillar",
		"chipped:simple_diorite_pillar", "chipped:massive_diorite_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
