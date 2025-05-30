// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:netherrack"
	var block_ids = [
		"chipped:netherrack_bricks", "chipped:netherrack_mini_tiles", "chipped:netherrack_pillar", "chipped:netherrack_pillar_top",
		"chipped:netherrack_scales", "chipped:angry_netherrack", "chipped:blank_netherrack_carving", "chipped:carved_netherrack",
		"chipped:checkered_netherrack_tiles", "chipped:cobbled_netherrack", "chipped:cracked_netherrack_bricks", "chipped:cracked_disordered_netherrack_bricks",
		"chipped:cracked_flat_netherrack_tiles", "chipped:creeper_netherrack_carving", "chipped:crying_netherrack", "chipped:cut_blank_netherrack",
		"chipped:glad_netherrack", "chipped:duh_netherrack", "chipped:engraved_netherrack", "chipped:eroded_netherrack",
		"chipped:etched_netherrack_bricks", "chipped:flat_netherrack_tiles", "chipped:inlayed_netherrack", "chipped:inscribed_netherrack",
		"chipped:layed_netherrack_bricks", "chipped:loded_netherrack", "chipped:offset_netherrack_bricks", "chipped:pillar_netherrack_bricks",
		"chipped:prismal_netherrack_remnants", "chipped:rough_netherrack", "chipped:rounded_netherrack_bricks", "chipped:runic_carved_netherrack",
		"chipped:sad_netherrack", "chipped:sanded_netherrack", "chipped:small_netherrack_bricks", "chipped:smooth_inlayed_netherrack",
		"chipped:smooth_ringed_netherrack", "chipped:smoothed_double_inlayed_netherrack", "chipped:spider_netherrack_carving", "chipped:spiraled_netherrack",
		"chipped:stacked_netherrack_bricks", "chipped:tiled_netherrack", "chipped:tiny_netherrack_bricks", "chipped:tiny_layered_netherrack_bricks",
		"chipped:tiny_layered_netherrack_slabs", "chipped:trodden_netherrack", "chipped:unamused_netherrack", "chipped:vertical_cut_netherrack",
		"chipped:vertical_disordered_netherrack_bricks", "chipped:weathered_netherrack", "chipped:bordered_netherrack", "chipped:brick_bordered_netherrack",
		"chipped:cut_netherrack_column", "chipped:edged_netherrack_bricks", "chipped:overlapping_netherrack_tiles", "chipped:polished_netherrack",
		"chipped:smooth_netherrack_column", "chipped:thick_inlayed_netherrack", "chipped:tiled_netherrack_column", "chipped:tiled_bordered_netherrack",
		"chipped:tiny_brick_bordered_netherrack", "chipped:curly_netherrack_pillar", "chipped:fine_netherrack_pillar", "chipped:ornate_netherrack_pillar",
		"chipped:simple_netherrack_pillar", "chipped:massive_netherrack_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
