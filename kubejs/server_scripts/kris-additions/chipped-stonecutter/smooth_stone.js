// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:smooth_stone"
	var block_ids = [
		"chipped:smooth_stone_bricks", "chipped:smooth_stone_mini_tiles", "chipped:smooth_stone_pillar", "chipped:smooth_stone_pillar_top",
		"chipped:smooth_stone_scales", "chipped:angry_smooth_stone", "chipped:blank_smooth_stone_carving", "chipped:carved_smooth_stone",
		"chipped:checkered_smooth_stone_tiles", "chipped:cobbled_smooth_stone", "chipped:cracked_smooth_stone_bricks", "chipped:cracked_disordered_smooth_stone_bricks",
		"chipped:cracked_flat_smooth_stone_tiles", "chipped:creeper_smooth_stone_carving", "chipped:crying_smooth_stone", "chipped:cut_blank_smooth_stone",
		"chipped:glad_smooth_stone", "chipped:duh_smooth_stone", "chipped:engraved_smooth_stone", "chipped:eroded_smooth_stone",
		"chipped:etched_smooth_stone_bricks", "chipped:flat_smooth_stone_tiles", "chipped:inlayed_smooth_stone", "chipped:inscribed_smooth_stone",
		"chipped:layed_smooth_stone_bricks", "chipped:loded_smooth_stone", "chipped:offset_smooth_stone_bricks", "chipped:pillar_smooth_stone_bricks",
		"chipped:prismal_smooth_stone_remnants", "chipped:rough_smooth_stone", "chipped:rounded_smooth_stone_bricks", "chipped:runic_carved_smooth_stone",
		"chipped:sad_smooth_stone", "chipped:sanded_smooth_stone", "chipped:small_smooth_stone_bricks", "chipped:smooth_inlayed_smooth_stone",
		"chipped:smooth_ringed_smooth_stone", "chipped:smoothed_double_inlayed_smooth_stone", "chipped:spider_smooth_stone_carving", "chipped:spiraled_smooth_stone",
		"chipped:stacked_smooth_stone_bricks", "chipped:tiled_smooth_stone", "chipped:tiny_smooth_stone_bricks", "chipped:tiny_layered_smooth_stone_bricks",
		"chipped:tiny_layered_smooth_stone_slabs", "chipped:trodden_smooth_stone", "chipped:unamused_smooth_stone", "chipped:vertical_cut_smooth_stone",
		"chipped:vertical_disordered_smooth_stone_bricks", "chipped:weathered_smooth_stone", "chipped:bordered_smooth_stone", "chipped:brick_bordered_smooth_stone",
		"chipped:cut_smooth_stone_column", "chipped:edged_smooth_stone_bricks", "chipped:overlapping_smooth_stone_tiles", "chipped:polished_smooth_stone",
		"chipped:smooth_smooth_stone_column", "chipped:thick_inlayed_smooth_stone", "chipped:tiled_smooth_stone_column", "chipped:tiled_bordered_smooth_stone",
		"chipped:tiny_brick_bordered_smooth_stone", "chipped:curly_smooth_stone_pillar", "chipped:fine_smooth_stone_pillar", "chipped:ornate_smooth_stone_pillar",
		"chipped:simple_smooth_stone_pillar", "chipped:massive_smooth_stone_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
