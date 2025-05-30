// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:stone"
	var block_ids = [
		"chipped:stone_mini_tiles", "chipped:stone_pillar", "chipped:stone_pillar_top", "chipped:stone_scales",
		"chipped:angry_stone", "chipped:blank_stone_carving", "chipped:carved_stone", "chipped:checkered_stone_tiles",
		"chipped:cobbled_stone", "chipped:cracked_disordered_stone_bricks", "chipped:cracked_flat_stone_tiles", "chipped:creeper_stone_carving",
		"chipped:crying_stone", "chipped:cut_blank_stone", "chipped:glad_stone", "chipped:duh_stone",
		"chipped:engraved_stone", "chipped:etched_stone_bricks", "chipped:flat_stone_tiles", "chipped:inlayed_stone",
		"chipped:inscribed_stone", "chipped:layed_stone_bricks", "chipped:loded_stone", "chipped:offset_stone_bricks",
		"chipped:pillar_stone_bricks", "chipped:prismal_stone_remnants", "chipped:rough_stone", "chipped:rounded_stone_bricks",
		"chipped:runic_carved_stone", "chipped:sad_stone", "chipped:sanded_stone", "chipped:small_stone_bricks",
		"chipped:smooth_inlayed_stone", "chipped:smoothed_double_inlayed_stone", "chipped:spider_stone_carving", "chipped:spiraled_stone",
		"chipped:stacked_stone_bricks", "chipped:tiled_stone", "chipped:tiny_stone_bricks", "chipped:tiny_layered_stone_bricks",
		"chipped:tiny_layered_stone_slabs", "chipped:trodden_stone", "chipped:unamused_stone", "chipped:vertical_cut_stone",
		"chipped:vertical_disordered_stone_bricks", "chipped:weathered_stone", "chipped:bordered_stone", "chipped:brick_bordered_stone",
		"chipped:cut_stone_column", "chipped:edged_stone_bricks", "chipped:overlapping_stone_tiles", "chipped:polished_stone",
		"chipped:smooth_stone_column", "chipped:thick_inlayed_stone", "chipped:tiled_stone_column", "chipped:tiled_bordered_stone",
		"chipped:tiny_brick_bordered_stone", "chipped:curly_stone_pillar", "chipped:fine_stone_pillar", "chipped:ornate_stone_pillar",
		"chipped:simple_stone_pillar", "chipped:massive_stone_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
