// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:purpur_block"
	var block_ids = [
		"chipped:purpur_block_bricks", "chipped:purpur_block_mini_tiles", "chipped:purpur_block_pillar", "chipped:purpur_block_pillar_top",
		"chipped:purpur_block_scales", "chipped:angry_purpur_block", "chipped:blank_purpur_block_carving", "chipped:carved_purpur_block",
		"chipped:cobbled_purpur_block", "chipped:cracked_purpur_block_bricks", "chipped:cracked_disordered_purpur_block_bricks", "chipped:cracked_flat_purpur_block_tiles",
		"chipped:creeper_purpur_block_carving", "chipped:crying_purpur_block", "chipped:cut_blank_purpur_block", "chipped:glad_purpur_block",
		"chipped:duh_purpur_block", "chipped:engraved_purpur_block", "chipped:eroded_purpur_block", "chipped:etched_purpur_block_bricks",
		"chipped:flat_purpur_block_tiles", "chipped:inlayed_purpur_block", "chipped:inscribed_purpur_block", "chipped:layed_purpur_block_bricks",
		"chipped:loded_purpur_block", "chipped:offset_purpur_block_bricks", "chipped:pillar_purpur_block_bricks", "chipped:prismal_purpur_block_remnants",
		"chipped:rough_purpur_block", "chipped:rounded_purpur_block_bricks", "chipped:runic_carved_purpur_block", "chipped:sad_purpur_block",
		"chipped:sanded_purpur_block", "chipped:small_purpur_block_bricks", "chipped:smooth_inlayed_purpur_block", "chipped:smooth_ringed_purpur_block",
		"chipped:smoothed_double_inlayed_purpur_block", "chipped:spider_purpur_block_carving", "chipped:spiraled_purpur_block", "chipped:stacked_purpur_block_bricks",
		"chipped:tiled_purpur_block", "chipped:tiny_purpur_block_bricks", "chipped:tiny_layered_purpur_block_bricks", "chipped:tiny_layered_purpur_block_slabs",
		"chipped:trodden_purpur_block", "chipped:unamused_purpur_block", "chipped:vertical_cut_purpur_block", "chipped:vertical_disordered_purpur_block_bricks",
		"chipped:weathered_purpur_block", "chipped:bordered_purpur_block", "chipped:brick_bordered_purpur_block", "chipped:cut_purpur_block_column",
		"chipped:edged_purpur_block_bricks", "chipped:overlapping_purpur_block_tiles", "chipped:polished_purpur_block", "chipped:smooth_purpur_block_column",
		"chipped:thick_inlayed_purpur_block", "chipped:tiled_purpur_block_column", "chipped:tiled_bordered_purpur_block", "chipped:tiny_brick_bordered_purpur_block",
		"chipped:curly_purpur_block_pillar", "chipped:fine_purpur_block_pillar", "chipped:ornate_purpur_block_pillar", "chipped:simple_purpur_block_pillar",
		"chipped:massive_purpur_block_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
