// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:end_stone"
	var block_ids = [
		"chipped:end_stone_bricks", "chipped:end_stone_mini_tiles", "chipped:end_stone_pillar", "chipped:end_stone_pillar_top",
		"chipped:end_stone_scales", "chipped:angry_end_stone", "chipped:blank_end_stone_carving", "chipped:carved_end_stone",
		"chipped:checkered_end_stone_tiles", "chipped:cobbled_end_stone", "chipped:cracked_end_stone_bricks", "chipped:cracked_disordered_end_stone_bricks",
		"chipped:cracked_flat_end_stone_tiles", "chipped:creeper_end_stone_carving", "chipped:crying_end_stone", "chipped:cut_blank_end_stone",
		"chipped:glad_end_stone", "chipped:duh_end_stone", "chipped:engraved_end_stone", "chipped:eroded_end_stone",
		"chipped:etched_end_stone_bricks", "chipped:flat_end_stone_tiles", "chipped:inlayed_end_stone", "chipped:inscribed_end_stone",
		"chipped:layed_end_stone_bricks", "chipped:loded_end_stone", "chipped:offset_end_stone_bricks", "chipped:pillar_end_stone_bricks",
		"chipped:prismal_end_stone_remnants", "chipped:rough_end_stone", "chipped:rounded_end_stone_bricks", "chipped:runic_carved_end_stone",
		"chipped:sad_end_stone", "chipped:sanded_end_stone", "chipped:small_end_stone_bricks", "chipped:smooth_inlayed_end_stone",
		"chipped:smooth_ringed_end_stone", "chipped:smoothed_double_inlayed_end_stone", "chipped:spider_end_stone_carving", "chipped:spiraled_end_stone",
		"chipped:stacked_end_stone_bricks", "chipped:tiled_end_stone", "chipped:tiny_end_stone_bricks", "chipped:tiny_layered_end_stone_bricks",
		"chipped:tiny_layered_end_stone_slabs", "chipped:trodden_end_stone", "chipped:unamused_end_stone", "chipped:vertical_cut_end_stone",
		"chipped:vertical_disordered_end_stone_bricks", "chipped:weathered_end_stone", "chipped:bordered_end_stone", "chipped:brick_bordered_end_stone",
		"chipped:cut_end_stone_column", "chipped:edged_end_stone_bricks", "chipped:overlapping_end_stone_tiles", "chipped:polished_end_stone",
		"chipped:smooth_end_stone_column", "chipped:thick_inlayed_end_stone", "chipped:tiled_end_stone_column", "chipped:tiled_bordered_end_stone",
		"chipped:tiny_brick_bordered_end_stone", "chipped:curly_end_stone_pillar", "chipped:fine_end_stone_pillar", "chipped:ornate_end_stone_pillar",
		"chipped:simple_end_stone_pillar", "chipped:massive_end_stone_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
