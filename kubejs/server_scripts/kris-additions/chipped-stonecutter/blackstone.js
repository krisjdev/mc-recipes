// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:blackstone"
	var block_ids = [
		"chipped:blackstone_mini_tiles", "chipped:blackstone_pillar", "chipped:blackstone_pillar_top", "chipped:blackstone_scales",
		"chipped:angry_blackstone", "chipped:blank_blackstone_carving", "chipped:carved_blackstone", "chipped:checkered_blackstone_tiles",
		"chipped:cobbled_blackstone", "chipped:cracked_disordered_blackstone_bricks", "chipped:cracked_flat_blackstone_tiles", "chipped:creeper_blackstone_carving",
		"chipped:crying_blackstone", "chipped:cut_blank_blackstone", "chipped:glad_blackstone", "chipped:duh_blackstone",
		"chipped:engraved_blackstone", "chipped:eroded_blackstone", "chipped:etched_blackstone_bricks", "chipped:flat_blackstone_tiles",
		"chipped:inlayed_blackstone", "chipped:inscribed_blackstone", "chipped:layed_blackstone_bricks", "chipped:loded_blackstone",
		"chipped:offset_blackstone_bricks", "chipped:pillar_blackstone_bricks", "chipped:prismal_blackstone_remnants", "chipped:rounded_blackstone_bricks",
		"chipped:runic_carved_blackstone", "chipped:sad_blackstone", "chipped:sanded_blackstone", "chipped:small_blackstone_bricks",
		"chipped:smooth_inlayed_blackstone", "chipped:smooth_ringed_blackstone", "chipped:smoothed_double_inlayed_blackstone", "chipped:spider_blackstone_carving",
		"chipped:spiraled_blackstone", "chipped:stacked_blackstone_bricks", "chipped:tiled_blackstone", "chipped:tiny_blackstone_bricks",
		"chipped:tiny_layered_blackstone_bricks", "chipped:tiny_layered_blackstone_slabs", "chipped:trodden_blackstone", "chipped:unamused_blackstone",
		"chipped:vertical_cut_blackstone", "chipped:vertical_disordered_blackstone_bricks", "chipped:bordered_blackstone", "chipped:brick_bordered_blackstone",
		"chipped:cut_blackstone_column", "chipped:edged_blackstone_bricks", "chipped:overlapping_blackstone_tiles", "chipped:polished_blackstone",
		"chipped:smooth_blackstone_column", "chipped:thick_inlayed_blackstone", "chipped:tiled_blackstone_column", "chipped:tiled_bordered_blackstone",
		"chipped:tiny_brick_bordered_blackstone", "chipped:curly_blackstone_pillar", "chipped:fine_blackstone_pillar", "chipped:ornate_blackstone_pillar",
		"chipped:simple_blackstone_pillar", "chipped:massive_blackstone_bricks", "chipped:smooth_blackstone_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
