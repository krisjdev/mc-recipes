// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:coal_block"
	var block_ids = [
		"chipped:coal_block_bricks", "chipped:coal_block_mini_tiles", "chipped:coal_block_pillar", "chipped:coal_block_pillar_top",
		"chipped:coal_block_scales", "chipped:angry_coal_block", "chipped:blank_coal_block_carving", "chipped:carved_coal_block",
		"chipped:checkered_coal_block_tiles", "chipped:cobbled_coal_block", "chipped:cracked_coal_block_bricks", "chipped:cracked_disordered_coal_block_bricks",
		"chipped:cracked_flat_coal_block_tiles", "chipped:creeper_coal_block_carving", "chipped:crying_coal_block", "chipped:cut_blank_coal_block",
		"chipped:glad_coal_block", "chipped:duh_coal_block", "chipped:engraved_coal_block", "chipped:eroded_coal_block",
		"chipped:etched_coal_block_bricks", "chipped:flat_coal_block_tiles", "chipped:inlayed_coal_block", "chipped:inscribed_coal_block",
		"chipped:layed_coal_block_bricks", "chipped:loded_coal_block", "chipped:offset_coal_block_bricks", "chipped:pillar_coal_block_bricks",
		"chipped:prismal_coal_block_remnants", "chipped:rough_coal_block", "chipped:rounded_coal_block_bricks", "chipped:runic_carved_coal_block",
		"chipped:sad_coal_block", "chipped:sanded_coal_block", "chipped:small_coal_block_bricks", "chipped:smooth_inlayed_coal_block",
		"chipped:smooth_ringed_coal_block", "chipped:smoothed_double_inlayed_coal_block", "chipped:spider_coal_block_carving", "chipped:spiraled_coal_block",
		"chipped:stacked_coal_block_bricks", "chipped:tiled_coal_block", "chipped:tiny_coal_block_bricks", "chipped:tiny_layered_coal_block_bricks",
		"chipped:tiny_layered_coal_block_slabs", "chipped:trodden_coal_block", "chipped:unamused_coal_block", "chipped:vertical_cut_coal_block",
		"chipped:vertical_disordered_coal_block_bricks", "chipped:weathered_coal_block", "chipped:bordered_coal_block", "chipped:brick_bordered_coal_block",
		"chipped:cut_coal_block_column", "chipped:edged_coal_block_bricks", "chipped:overlapping_coal_block_tiles", "chipped:polished_coal_block",
		"chipped:smooth_coal_block_column", "chipped:thick_inlayed_coal_block", "chipped:tiled_coal_block_column", "chipped:tiled_bordered_coal_block",
		"chipped:tiny_brick_bordered_coal_block", "chipped:curly_coal_block_pillar", "chipped:fine_coal_block_pillar", "chipped:ornate_coal_block_pillar",
		"chipped:simple_coal_block_pillar", "chipped:massive_coal_block_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
