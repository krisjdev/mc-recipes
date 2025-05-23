// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:quartz_block"
	var block_ids = [
		"chipped:quartz_block_bricks", "chipped:quartz_block_mini_tiles", "chipped:quartz_block_pillar", "chipped:quartz_block_scales",
		"chipped:angry_quartz_block", "chipped:blank_quartz_block_carving", "chipped:checkered_quartz_block_tiles", "chipped:cobbled_quartz_block",
		"chipped:cracked_quartz_block_bricks", "chipped:cracked_disordered_quartz_block_bricks", "chipped:cracked_flat_quartz_block_tiles", "chipped:creeper_quartz_block_carving",
		"chipped:crying_quartz_block", "chipped:cut_blank_quartz_block", "chipped:glad_quartz_block", "chipped:duh_quartz_block",
		"chipped:engraved_quartz_block", "chipped:eroded_quartz_block", "chipped:etched_quartz_block_bricks", "chipped:flat_quartz_block_tiles",
		"chipped:inlayed_quartz_block", "chipped:inscribed_quartz_block", "chipped:layed_quartz_block_bricks", "chipped:loded_quartz_block",
		"chipped:pillar_quartz_block_bricks", "chipped:prismal_quartz_block_remnants", "chipped:rough_quartz_block", "chipped:rounded_quartz_block_bricks",
		"chipped:runic_carved_quartz_block", "chipped:sad_quartz_block", "chipped:sanded_quartz_block", "chipped:small_quartz_block_bricks",
		"chipped:smooth_inlayed_quartz_block", "chipped:smooth_ringed_quartz_block", "chipped:smoothed_double_inlayed_quartz_block", "chipped:spider_quartz_block_carving",
		"chipped:stacked_quartz_block_bricks", "chipped:tiled_quartz_block", "chipped:tiny_quartz_block_bricks", "chipped:tiny_layered_quartz_block_bricks",
		"chipped:tiny_layered_quartz_block_slabs", "chipped:trodden_quartz_block", "chipped:unamused_quartz_block", "chipped:vertical_cut_quartz_block",
		"chipped:vertical_disordered_quartz_block_bricks", "chipped:weathered_quartz_block", "chipped:bordered_quartz_block", "chipped:brick_bordered_quartz_block",
		"chipped:cut_quartz_block_column", "chipped:edged_quartz_block_bricks", "chipped:overlapping_quartz_block_tiles", "chipped:polished_quartz_block",
		"chipped:smooth_quartz_block_column", "chipped:thick_inlayed_quartz_block", "chipped:tiled_quartz_block_column", "chipped:tiled_bordered_quartz_block",
		"chipped:tiny_brick_bordered_quartz_block", "chipped:curly_quartz_block_pillar", "chipped:fine_quartz_block_pillar", "chipped:ornate_quartz_block_pillar",
		"chipped:simple_quartz_block_pillar", "chipped:massive_quartz_block_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
