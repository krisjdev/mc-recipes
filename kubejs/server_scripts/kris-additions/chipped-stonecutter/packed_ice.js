// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:packed_ice"
	var block_ids = [
		"chipped:packed_ice_bricks", "chipped:packed_ice_mini_tiles", "chipped:packed_ice_pillar", "chipped:packed_ice_pillar_top",
		"chipped:packed_ice_scales", "chipped:angry_packed_ice", "chipped:blank_packed_ice_carving", "chipped:carved_packed_ice",
		"chipped:checkered_packed_ice_tiles", "chipped:cobbled_packed_ice", "chipped:cracked_packed_ice_bricks", "chipped:cracked_disordered_packed_ice_bricks",
		"chipped:cracked_flat_packed_ice_tiles", "chipped:creeper_packed_ice_carving", "chipped:crying_packed_ice", "chipped:cut_blank_packed_ice",
		"chipped:glad_packed_ice", "chipped:duh_packed_ice", "chipped:engraved_packed_ice", "chipped:eroded_packed_ice",
		"chipped:etched_packed_ice_bricks", "chipped:flat_packed_ice_tiles", "chipped:inlayed_packed_ice", "chipped:inscribed_packed_ice",
		"chipped:layed_packed_ice_bricks", "chipped:loded_packed_ice", "chipped:offset_packed_ice_bricks", "chipped:pillar_packed_ice_bricks",
		"chipped:prismal_packed_ice_remnants", "chipped:rough_packed_ice", "chipped:rounded_packed_ice_bricks", "chipped:runic_carved_packed_ice",
		"chipped:sad_packed_ice", "chipped:sanded_packed_ice", "chipped:small_packed_ice_bricks", "chipped:smooth_inlayed_packed_ice",
		"chipped:smooth_ringed_packed_ice", "chipped:smoothed_double_inlayed_packed_ice", "chipped:spider_packed_ice_carving", "chipped:spiraled_packed_ice",
		"chipped:stacked_packed_ice_bricks", "chipped:tiled_packed_ice", "chipped:tiny_packed_ice_bricks", "chipped:tiny_layered_packed_ice_bricks",
		"chipped:tiny_layered_packed_ice_slabs", "chipped:trodden_packed_ice", "chipped:unamused_packed_ice", "chipped:vertical_cut_packed_ice",
		"chipped:vertical_disordered_packed_ice_bricks", "chipped:weathered_packed_ice", "chipped:bordered_packed_ice", "chipped:brick_bordered_packed_ice",
		"chipped:cut_packed_ice_column", "chipped:edged_packed_ice_bricks", "chipped:overlapping_packed_ice_tiles", "chipped:polished_packed_ice",
		"chipped:smooth_packed_ice_column", "chipped:thick_inlayed_packed_ice", "chipped:tiled_packed_ice_column", "chipped:tiled_bordered_packed_ice",
		"chipped:tiny_brick_bordered_packed_ice", "chipped:curly_packed_ice_pillar", "chipped:fine_packed_ice_pillar", "chipped:ornate_packed_ice_pillar",
		"chipped:simple_packed_ice_pillar", "chipped:massive_packed_ice_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
