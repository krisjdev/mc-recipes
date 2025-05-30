// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:magma_block"
	var block_ids = [
		"chipped:magma_block_bricks", "chipped:magma_block_mini_tiles", "chipped:magma_block_pillar", "chipped:magma_block_pillar_top",
		"chipped:magma_block_scales", "chipped:angry_magma_block", "chipped:blank_magma_block_carving", "chipped:carved_magma_block",
		"chipped:checkered_magma_block_tiles", "chipped:cobbled_magma_block", "chipped:cracked_magma_block_bricks", "chipped:cracked_disordered_magma_block_bricks",
		"chipped:cracked_flat_magma_block_tiles", "chipped:creeper_magma_block_carving", "chipped:crying_magma_block", "chipped:cut_blank_magma_block",
		"chipped:glad_magma_block", "chipped:duh_magma_block", "chipped:engraved_magma_block", "chipped:eroded_magma_block",
		"chipped:etched_magma_block_bricks", "chipped:flat_magma_block_tiles", "chipped:inlayed_magma_block", "chipped:inscribed_magma_block",
		"chipped:layed_magma_block_bricks", "chipped:loded_magma_block", "chipped:offset_magma_block_bricks", "chipped:pillar_magma_block_bricks",
		"chipped:prismal_magma_block_remnants", "chipped:rough_magma_block", "chipped:rounded_magma_block_bricks", "chipped:runic_carved_magma_block",
		"chipped:sad_magma_block", "chipped:sanded_magma_block", "chipped:small_magma_block_bricks", "chipped:smooth_inlayed_magma_block",
		"chipped:smooth_ringed_magma_block", "chipped:smoothed_double_inlayed_magma_block", "chipped:spider_magma_block_carving", "chipped:spiraled_magma_block",
		"chipped:stacked_magma_block_bricks", "chipped:tiled_magma_block", "chipped:tiny_magma_block_bricks", "chipped:tiny_layered_magma_block_bricks",
		"chipped:tiny_layered_magma_block_slabs", "chipped:trodden_magma_block", "chipped:unamused_magma_block", "chipped:vertical_cut_magma_block",
		"chipped:vertical_disordered_magma_block_bricks", "chipped:weathered_magma_block", "chipped:bordered_magma_block", "chipped:brick_bordered_magma_block",
		"chipped:cut_magma_block_column", "chipped:edged_magma_block_bricks", "chipped:overlapping_magma_block_tiles", "chipped:polished_magma_block",
		"chipped:smooth_magma_block_column", "chipped:thick_inlayed_magma_block", "chipped:tiled_magma_block_column", "chipped:tiled_bordered_magma_block",
		"chipped:tiny_brick_bordered_magma_block", "chipped:curly_magma_block_pillar", "chipped:fine_magma_block_pillar", "chipped:ornate_magma_block_pillar",
		"chipped:simple_magma_block_pillar", "chipped:massive_magma_block_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
