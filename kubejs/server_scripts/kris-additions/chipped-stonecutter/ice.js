// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:ice"
	var block_ids = [
		"chipped:ice_bricks", "chipped:ice_mini_tiles", "chipped:ice_pillar", "chipped:ice_pillar_top",
		"chipped:ice_scales", "chipped:angry_ice", "chipped:blank_ice_carving", "chipped:carved_ice",
		"chipped:checkered_ice_tiles", "chipped:cobbled_ice", "chipped:cracked_ice_bricks", "chipped:cracked_disordered_ice_bricks",
		"chipped:cracked_flat_ice_tiles", "chipped:creeper_ice_carving", "chipped:crying_ice", "chipped:cut_blank_ice",
		"chipped:glad_ice", "chipped:duh_ice", "chipped:engraved_ice", "chipped:eroded_ice",
		"chipped:etched_ice_bricks", "chipped:flat_ice_tiles", "chipped:inlayed_ice", "chipped:inscribed_ice",
		"chipped:layed_ice_bricks", "chipped:loded_ice", "chipped:offset_ice_bricks", "chipped:pillar_ice_bricks",
		"chipped:prismal_ice_remnants", "chipped:rough_ice", "chipped:rounded_ice_bricks", "chipped:runic_carved_ice",
		"chipped:sad_ice", "chipped:sanded_ice", "chipped:small_ice_bricks", "chipped:smooth_inlayed_ice",
		"chipped:smooth_ringed_ice", "chipped:smoothed_double_inlayed_ice", "chipped:spider_ice_carving", "chipped:spiraled_ice",
		"chipped:stacked_ice_bricks", "chipped:tiled_ice", "chipped:tiny_ice_bricks", "chipped:tiny_layered_ice_bricks",
		"chipped:tiny_layered_ice_slabs", "chipped:trodden_ice", "chipped:unamused_ice", "chipped:vertical_cut_ice",
		"chipped:vertical_disordered_ice_bricks", "chipped:weathered_ice", "chipped:bordered_ice", "chipped:brick_bordered_ice",
		"chipped:cut_ice_column", "chipped:edged_ice_bricks", "chipped:overlapping_ice_tiles", "chipped:polished_ice",
		"chipped:smooth_ice_column", "chipped:thick_inlayed_ice", "chipped:tiled_ice_column", "chipped:tiled_bordered_ice",
		"chipped:tiny_brick_bordered_ice", "chipped:curly_ice_pillar", "chipped:fine_ice_pillar", "chipped:ornate_ice_pillar",
		"chipped:simple_ice_pillar", "chipped:massive_ice_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
