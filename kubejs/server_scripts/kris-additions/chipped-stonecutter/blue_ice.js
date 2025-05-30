// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:blue_ice"
	var block_ids = [
		"chipped:blue_ice_bricks", "chipped:blue_ice_mini_tiles", "chipped:blue_ice_pillar", "chipped:blue_ice_pillar_top",
		"chipped:blue_ice_scales", "chipped:angry_blue_ice", "chipped:blank_blue_ice_carving", "chipped:carved_blue_ice",
		"chipped:checkered_blue_ice_tiles", "chipped:cobbled_blue_ice", "chipped:cracked_blue_ice_bricks", "chipped:cracked_disordered_blue_ice_bricks",
		"chipped:cracked_flat_blue_ice_tiles", "chipped:creeper_blue_ice_carving", "chipped:crying_blue_ice", "chipped:cut_blank_blue_ice",
		"chipped:glad_blue_ice", "chipped:duh_blue_ice", "chipped:engraved_blue_ice", "chipped:eroded_blue_ice",
		"chipped:etched_blue_ice_bricks", "chipped:flat_blue_ice_tiles", "chipped:inlayed_blue_ice", "chipped:inscribed_blue_ice",
		"chipped:layed_blue_ice_bricks", "chipped:loded_blue_ice", "chipped:offset_blue_ice_bricks", "chipped:pillar_blue_ice_bricks",
		"chipped:prismal_blue_ice_remnants", "chipped:rough_blue_ice", "chipped:rounded_blue_ice_bricks", "chipped:runic_carved_blue_ice",
		"chipped:sad_blue_ice", "chipped:sanded_blue_ice", "chipped:small_blue_ice_bricks", "chipped:smooth_inlayed_blue_ice",
		"chipped:smooth_ringed_blue_ice", "chipped:smoothed_double_inlayed_blue_ice", "chipped:spider_blue_ice_carving", "chipped:spiraled_blue_ice",
		"chipped:stacked_blue_ice_bricks", "chipped:tiled_blue_ice", "chipped:tiny_blue_ice_bricks", "chipped:tiny_layered_blue_ice_bricks",
		"chipped:tiny_layered_blue_ice_slabs", "chipped:trodden_blue_ice", "chipped:unamused_blue_ice", "chipped:vertical_cut_blue_ice",
		"chipped:vertical_disordered_blue_ice_bricks", "chipped:weathered_blue_ice", "chipped:bordered_blue_ice", "chipped:brick_bordered_blue_ice",
		"chipped:cut_blue_ice_column", "chipped:edged_blue_ice_bricks", "chipped:overlapping_blue_ice_tiles", "chipped:polished_blue_ice",
		"chipped:smooth_blue_ice_column", "chipped:thick_inlayed_blue_ice", "chipped:tiled_blue_ice_column", "chipped:tiled_bordered_blue_ice",
		"chipped:tiny_brick_bordered_blue_ice", "chipped:curly_blue_ice_pillar", "chipped:fine_blue_ice_pillar", "chipped:ornate_blue_ice_pillar",
		"chipped:simple_blue_ice_pillar", "chipped:massive_blue_ice_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
