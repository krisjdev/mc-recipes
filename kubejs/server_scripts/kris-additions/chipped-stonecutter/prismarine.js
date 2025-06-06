// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:prismarine"
	var block_ids = [
		"chipped:prismarine_bricks", "chipped:prismarine_mini_tiles", "chipped:prismarine_pillar", "chipped:prismarine_pillar_top",
		"chipped:prismarine_scales", "chipped:angry_prismarine", "chipped:blank_prismarine_carving", "chipped:carved_prismarine",
		"chipped:checkered_prismarine_tiles", "chipped:cobbled_prismarine", "chipped:cracked_prismarine_bricks", "chipped:cracked_disordered_prismarine_bricks",
		"chipped:cracked_flat_prismarine_tiles", "chipped:creeper_prismarine_carving", "chipped:crying_prismarine", "chipped:cut_blank_prismarine",
		"chipped:glad_prismarine", "chipped:duh_prismarine", "chipped:engraved_prismarine", "chipped:eroded_prismarine",
		"chipped:etched_prismarine_bricks", "chipped:flat_prismarine_tiles", "chipped:inlayed_prismarine", "chipped:inscribed_prismarine",
		"chipped:layed_prismarine_bricks", "chipped:loded_prismarine", "chipped:offset_prismarine_bricks", "chipped:pillar_prismarine_bricks",
		"chipped:rough_prismarine", "chipped:rounded_prismarine_bricks", "chipped:runic_carved_prismarine", "chipped:sad_prismarine",
		"chipped:sanded_prismarine", "chipped:small_prismarine_bricks", "chipped:smooth_inlayed_prismarine", "chipped:smooth_ringed_prismarine",
		"chipped:smoothed_double_inlayed_prismarine", "chipped:spider_prismarine_carving", "chipped:spiraled_prismarine", "chipped:stacked_prismarine_bricks",
		"chipped:tiled_prismarine", "chipped:tiny_prismarine_bricks", "chipped:tiny_layered_prismarine_bricks", "chipped:tiny_layered_prismarine_slabs",
		"chipped:trodden_prismarine", "chipped:unamused_prismarine", "chipped:vertical_cut_prismarine", "chipped:vertical_disordered_prismarine_bricks",
		"chipped:weathered_prismarine", "chipped:bordered_prismarine", "chipped:brick_bordered_prismarine", "chipped:cut_prismarine_column",
		"chipped:edged_prismarine_bricks", "chipped:overlapping_prismarine_tiles", "chipped:polished_prismarine", "chipped:smooth_prismarine_column",
		"chipped:thick_inlayed_prismarine", "chipped:tiled_prismarine_column", "chipped:tiled_bordered_prismarine", "chipped:tiny_brick_bordered_prismarine",
		"chipped:curly_prismarine_pillar", "chipped:fine_prismarine_pillar", "chipped:ornate_prismarine_pillar", "chipped:simple_prismarine_pillar",
		"chipped:massive_prismarine_bricks", "chipped:granite_prismarine", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
