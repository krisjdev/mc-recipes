// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:ancient_debris"
	var block_ids = [
		"chipped:ancient_debris_bricks", "chipped:ancient_debris_mini_tiles", "chipped:ancient_debris_pillar", "chipped:ancient_debris_pillar_top",
		"chipped:ancient_debris_scales", "chipped:angry_ancient_debris", "chipped:blank_ancient_debris_carving", "chipped:carved_ancient_debris",
		"chipped:checkered_ancient_debris_tiles", "chipped:cobbled_ancient_debris", "chipped:cracked_ancient_debris_bricks", "chipped:cracked_disordered_ancient_debris_bricks",
		"chipped:cracked_flat_ancient_debris_tiles", "chipped:creeper_ancient_debris_carving", "chipped:crying_ancient_debris", "chipped:cut_blank_ancient_debris",
		"chipped:glad_ancient_debris", "chipped:duh_ancient_debris", "chipped:engraved_ancient_debris", "chipped:eroded_ancient_debris",
		"chipped:etched_ancient_debris_bricks", "chipped:flat_ancient_debris_tiles", "chipped:inlayed_ancient_debris", "chipped:inscribed_ancient_debris",
		"chipped:layed_ancient_debris_bricks", "chipped:loded_ancient_debris", "chipped:offset_ancient_debris_bricks", "chipped:pillar_ancient_debris_bricks",
		"chipped:prismal_ancient_debris_remnants", "chipped:rough_ancient_debris", "chipped:rounded_ancient_debris_bricks", "chipped:runic_carved_ancient_debris",
		"chipped:sad_ancient_debris", "chipped:sanded_ancient_debris", "chipped:small_ancient_debris_bricks", "chipped:smooth_inlayed_ancient_debris",
		"chipped:smooth_ringed_ancient_debris", "chipped:smoothed_double_inlayed_ancient_debris", "chipped:spider_ancient_debris_carving", "chipped:spiraled_ancient_debris",
		"chipped:stacked_ancient_debris_bricks", "chipped:tiled_ancient_debris", "chipped:tiny_ancient_debris_bricks", "chipped:tiny_layered_ancient_debris_bricks",
		"chipped:tiny_layered_ancient_debris_slabs", "chipped:trodden_ancient_debris", "chipped:unamused_ancient_debris", "chipped:vertical_cut_ancient_debris",
		"chipped:vertical_disordered_ancient_debris_bricks", "chipped:weathered_ancient_debris", "chipped:bordered_ancient_debris", "chipped:brick_bordered_ancient_debris",
		"chipped:cut_ancient_debris_column", "chipped:edged_ancient_debris_bricks", "chipped:overlapping_ancient_debris_tiles", "chipped:polished_ancient_debris",
		"chipped:smooth_ancient_debris_column", "chipped:thick_inlayed_ancient_debris", "chipped:tiled_ancient_debris_column", "chipped:tiled_bordered_ancient_debris",
		"chipped:tiny_brick_bordered_ancient_debris", "chipped:curly_ancient_debris_pillar", "chipped:fine_ancient_debris_pillar", "chipped:ornate_ancient_debris_pillar",
		"chipped:simple_ancient_debris_pillar", "chipped:massive_ancient_debris_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
