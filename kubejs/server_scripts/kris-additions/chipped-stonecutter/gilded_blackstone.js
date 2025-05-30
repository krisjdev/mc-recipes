// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:gilded_blackstone"
	var block_ids = [
		"chipped:gilded_blackstone_bricks", "chipped:gilded_blackstone_mini_tiles", "chipped:gilded_blackstone_pillar", "chipped:gilded_blackstone_pillar_top",
		"chipped:gilded_blackstone_scales", "chipped:angry_gilded_blackstone", "chipped:blank_gilded_blackstone_carving", "chipped:carved_gilded_blackstone",
		"chipped:checkered_gilded_blackstone_tiles", "chipped:cobbled_gilded_blackstone", "chipped:cracked_gilded_blackstone_bricks", "chipped:cracked_disordered_gilded_blackstone_bricks",
		"chipped:cracked_flat_gilded_blackstone_tiles", "chipped:creeper_gilded_blackstone_carving", "chipped:crying_gilded_blackstone", "chipped:cut_blank_gilded_blackstone",
		"chipped:glad_gilded_blackstone", "chipped:duh_gilded_blackstone", "chipped:engraved_gilded_blackstone", "chipped:eroded_gilded_blackstone",
		"chipped:etched_gilded_blackstone_bricks", "chipped:flat_gilded_blackstone_tiles", "chipped:inlayed_gilded_blackstone", "chipped:inscribed_gilded_blackstone",
		"chipped:layed_gilded_blackstone_bricks", "chipped:loded_gilded_blackstone", "chipped:offset_gilded_blackstone_bricks", "chipped:pillar_gilded_blackstone_bricks",
		"chipped:prismal_gilded_blackstone_remnants", "chipped:rounded_gilded_blackstone_bricks", "chipped:runic_carved_gilded_blackstone", "chipped:sad_gilded_blackstone",
		"chipped:sanded_gilded_blackstone", "chipped:small_gilded_blackstone_bricks", "chipped:smooth_inlayed_gilded_blackstone", "chipped:smooth_ringed_gilded_blackstone",
		"chipped:smoothed_double_inlayed_gilded_blackstone", "chipped:spider_gilded_blackstone_carving", "chipped:spiraled_gilded_blackstone", "chipped:stacked_gilded_blackstone_bricks",
		"chipped:tiled_gilded_blackstone", "chipped:tiny_gilded_blackstone_bricks", "chipped:tiny_layered_gilded_blackstone_bricks", "chipped:tiny_layered_gilded_blackstone_slabs",
		"chipped:trodden_gilded_blackstone", "chipped:unamused_gilded_blackstone", "chipped:vertical_cut_gilded_blackstone", "chipped:vertical_disordered_gilded_blackstone_bricks",
		"chipped:weathered_gilded_blackstone", "chipped:bordered_gilded_blackstone", "chipped:brick_bordered_gilded_blackstone", "chipped:cut_gilded_blackstone_column",
		"chipped:edged_gilded_blackstone_bricks", "chipped:overlapping_gilded_blackstone_tiles", "chipped:polished_gilded_blackstone", "chipped:smooth_gilded_blackstone_column",
		"chipped:thick_inlayed_gilded_blackstone", "chipped:tiled_gilded_blackstone_column", "chipped:tiled_bordered_gilded_blackstone", "chipped:tiny_brick_bordered_gilded_blackstone",
		"chipped:curly_gilded_blackstone_pillar", "chipped:fine_gilded_blackstone_pillar", "chipped:ornate_gilded_blackstone_pillar", "chipped:simple_gilded_blackstone_pillar",
		"chipped:massive_gilded_blackstone_bricks", "chipped:chunky_gilded_blackstone", "chipped:reinforced_gilded_blackstone", "chipped:special_gilded_blackstone",
		"chipped:spiral_gilded_blackstone", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
