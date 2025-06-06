// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:dark_prismarine"
	var block_ids = [
		"chipped:dark_prismarine_bricks", "chipped:dark_prismarine_pillar", "chipped:dark_prismarine_pillar_top", "chipped:dark_prismarine_scales",
		"chipped:angry_dark_prismarine", "chipped:blank_dark_prismarine_carving", "chipped:carved_dark_prismarine", "chipped:checkered_dark_prismarine_tiles",
		"chipped:cobbled_dark_prismarine", "chipped:cracked_dark_prismarine_bricks", "chipped:cracked_disordered_dark_prismarine_bricks", "chipped:cracked_flat_dark_prismarine_tiles",
		"chipped:creeper_dark_prismarine_carving", "chipped:crying_dark_prismarine", "chipped:cut_blank_dark_prismarine", "chipped:glad_dark_prismarine",
		"chipped:duh_dark_prismarine", "chipped:engraved_dark_prismarine", "chipped:eroded_dark_prismarine", "chipped:etched_dark_prismarine_bricks",
		"chipped:flat_dark_prismarine_tiles", "chipped:inlayed_dark_prismarine", "chipped:inscribed_dark_prismarine", "chipped:layed_dark_prismarine_bricks",
		"chipped:loded_dark_prismarine", "chipped:offset_dark_prismarine_bricks", "chipped:pillar_dark_prismarine_bricks", "chipped:prismal_dark_prismarine_remnants",
		"chipped:rough_dark_prismarine", "chipped:rounded_dark_prismarine_bricks", "chipped:runic_carved_dark_prismarine", "chipped:sad_dark_prismarine",
		"chipped:sanded_dark_prismarine", "chipped:small_dark_prismarine_bricks", "chipped:smooth_inlayed_dark_prismarine", "chipped:smooth_ringed_dark_prismarine",
		"chipped:smoothed_double_inlayed_dark_prismarine", "chipped:spider_dark_prismarine_carving", "chipped:spiraled_dark_prismarine", "chipped:stacked_dark_prismarine_bricks",
		"chipped:tiled_dark_prismarine", "chipped:tiny_dark_prismarine_bricks", "chipped:tiny_layered_dark_prismarine_bricks", "chipped:tiny_layered_dark_prismarine_slabs",
		"chipped:trodden_dark_prismarine", "chipped:unamused_dark_prismarine", "chipped:vertical_cut_dark_prismarine", "chipped:vertical_disordered_dark_prismarine_bricks",
		"chipped:weathered_dark_prismarine", "chipped:bordered_dark_prismarine", "chipped:brick_bordered_dark_prismarine", "chipped:cut_dark_prismarine_column",
		"chipped:edged_dark_prismarine_bricks", "chipped:overlapping_dark_prismarine_tiles", "chipped:polished_dark_prismarine", "chipped:smooth_dark_prismarine_column",
		"chipped:thick_inlayed_dark_prismarine", "chipped:tiled_dark_prismarine_column", "chipped:tiled_bordered_dark_prismarine", "chipped:tiny_brick_bordered_dark_prismarine",
		"chipped:curly_dark_prismarine_pillar", "chipped:fine_dark_prismarine_pillar", "chipped:ornate_dark_prismarine_pillar", "chipped:simple_dark_prismarine_pillar",
		"chipped:massive_dark_prismarine_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
