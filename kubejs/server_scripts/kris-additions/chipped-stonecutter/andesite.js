// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:andesite"
	var block_ids = [
		"chipped:andesite_bricks", "chipped:andesite_mini_tiles", "chipped:andesite_pillar", "chipped:andesite_pillar_top",
		"chipped:andesite_scales", "chipped:angry_andesite", "chipped:blank_andesite_carving", "chipped:carved_andesite",
		"chipped:checkered_andesite_tiles", "chipped:cobbled_andesite", "chipped:cracked_andesite_bricks", "chipped:cracked_disordered_andesite_bricks",
		"chipped:cracked_flat_andesite_tiles", "chipped:creeper_andesite_carving", "chipped:crying_andesite", "chipped:cut_blank_andesite",
		"chipped:glad_andesite", "chipped:duh_andesite", "chipped:engraved_andesite", "chipped:eroded_andesite",
		"chipped:etched_andesite_bricks", "chipped:flat_andesite_tiles", "chipped:inlayed_andesite", "chipped:inscribed_andesite",
		"chipped:layed_andesite_bricks", "chipped:loded_andesite", "chipped:offset_andesite_bricks", "chipped:pillar_andesite_bricks",
		"chipped:prismal_andesite_remnants", "chipped:rough_andesite", "chipped:rounded_andesite_bricks", "chipped:runic_carved_andesite",
		"chipped:sad_andesite", "chipped:sanded_andesite", "chipped:small_andesite_bricks", "chipped:smooth_inlayed_andesite",
		"chipped:smooth_ringed_andesite", "chipped:smoothed_double_inlayed_andesite", "chipped:spider_andesite_carving", "chipped:spiraled_andesite",
		"chipped:stacked_andesite_bricks", "chipped:tiled_andesite", "chipped:tiny_andesite_bricks", "chipped:tiny_layered_andesite_bricks",
		"chipped:tiny_layered_andesite_slabs", "chipped:trodden_andesite", "chipped:unamused_andesite", "chipped:vertical_cut_andesite",
		"chipped:vertical_disordered_andesite_bricks", "chipped:weathered_andesite", "chipped:bordered_andesite", "chipped:brick_bordered_andesite",
		"chipped:cut_andesite_column", "chipped:edged_andesite_bricks", "chipped:overlapping_andesite_tiles", "chipped:polished_andesite",
		"chipped:smooth_andesite_column", "chipped:thick_inlayed_andesite", "chipped:tiled_andesite_column", "chipped:tiled_bordered_andesite",
		"chipped:tiny_brick_bordered_andesite", "chipped:curly_andesite_pillar", "chipped:fine_andesite_pillar", "chipped:ornate_andesite_pillar",
		"chipped:simple_andesite_pillar", "chipped:massive_andesite_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
