// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:mossy_stone_bricks"
	var block_ids = [
		"chipped:mossy_stone_bricks_mini_tiles", "chipped:mossy_stone_bricks_pillar", "chipped:mossy_stone_bricks_pillar_top", "chipped:mossy_stone_bricks_scales",
		"chipped:angry_mossy_stone_bricks", "chipped:blank_mossy_stone_bricks_carving", "chipped:carved_mossy_stone_bricks", "chipped:checkered_mossy_stone_bricks_tiles",
		"chipped:cobbled_mossy_stone_bricks", "chipped:cracked_mossy_stone_bricks_bricks", "chipped:cracked_disordered_mossy_stone_bricks_bricks", "chipped:cracked_flat_mossy_stone_bricks_tiles",
		"chipped:creeper_mossy_stone_bricks_carving", "chipped:crying_mossy_stone_bricks", "chipped:cut_blank_mossy_stone_bricks", "chipped:glad_mossy_stone_bricks",
		"chipped:duh_mossy_stone_bricks", "chipped:engraved_mossy_stone_bricks", "chipped:eroded_mossy_stone_bricks", "chipped:etched_mossy_stone_bricks_bricks",
		"chipped:flat_mossy_stone_bricks_tiles", "chipped:inlayed_mossy_stone_bricks", "chipped:inscribed_mossy_stone_bricks", "chipped:layed_mossy_stone_bricks_bricks",
		"chipped:loded_mossy_stone_bricks", "chipped:offset_mossy_stone_bricks_bricks", "chipped:pillar_mossy_stone_bricks_bricks", "chipped:prismal_mossy_stone_bricks_remnants",
		"chipped:rough_mossy_stone_bricks", "chipped:rounded_mossy_stone_bricks_bricks", "chipped:runic_carved_mossy_stone_bricks", "chipped:sad_mossy_stone_bricks",
		"chipped:sanded_mossy_stone_bricks", "chipped:small_mossy_stone_bricks_bricks", "chipped:smooth_inlayed_mossy_stone_bricks", "chipped:smooth_ringed_mossy_stone_bricks",
		"chipped:smoothed_double_inlayed_mossy_stone_bricks", "chipped:spider_mossy_stone_bricks_carving", "chipped:spiraled_mossy_stone_bricks", "chipped:stacked_mossy_stone_bricks_bricks",
		"chipped:tiled_mossy_stone_bricks", "chipped:tiny_mossy_stone_bricks_bricks", "chipped:tiny_layered_mossy_stone_bricks_bricks", "chipped:tiny_layered_mossy_stone_bricks_slabs",
		"chipped:trodden_mossy_stone_bricks", "chipped:unamused_mossy_stone_bricks", "chipped:vertical_cut_mossy_stone_bricks", "chipped:vertical_disordered_mossy_stone_bricks_bricks",
		"chipped:weathered_mossy_stone_bricks", "chipped:bordered_mossy_stone_bricks", "chipped:brick_bordered_mossy_stone_bricks", "chipped:cut_mossy_stone_bricks_column",
		"chipped:edged_mossy_stone_bricks_bricks", "chipped:overlapping_mossy_stone_bricks_tiles", "chipped:polished_mossy_stone_bricks", "chipped:smooth_mossy_stone_bricks_column",
		"chipped:thick_inlayed_mossy_stone_bricks", "chipped:tiled_mossy_stone_bricks_column", "chipped:tiled_bordered_mossy_stone_bricks", "chipped:tiny_brick_bordered_mossy_stone_bricks",
		"chipped:curly_mossy_stone_bricks_pillar", "chipped:fine_mossy_stone_bricks_pillar", "chipped:ornate_mossy_stone_bricks_pillar", "chipped:simple_mossy_stone_bricks_pillar",
		"chipped:massive_mossy_stone_bricks_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
