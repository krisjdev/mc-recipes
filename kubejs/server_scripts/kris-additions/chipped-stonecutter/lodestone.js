// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:lodestone"
	var block_ids = [
		"chipped:lodestone_bricks", "chipped:lodestone_mini_tiles", "chipped:lodestone_pillar", "chipped:lodestone_pillar_top",
		"chipped:lodestone_scales", "chipped:angry_lodestone", "chipped:blank_lodestone_carving", "chipped:blank_lodestone_side",
		"chipped:carved_lodestone", "chipped:checkered_lodestone_tiles", "chipped:cobbled_lodestone", "chipped:cracked_lodestone_bricks",
		"chipped:cracked_disordered_lodestone_bricks", "chipped:cracked_flat_lodestone_tiles", "chipped:creeper_lodestone_carving", "chipped:crying_lodestone",
		"chipped:cut_blank_lodestone", "chipped:glad_lodestone", "chipped:diamond_lodestone", "chipped:dot_lodestone",
		"chipped:duh_lodestone", "chipped:engraved_lodestone", "chipped:eroded_lodestone", "chipped:etched_lodestone_bricks",
		"chipped:flat_lodestone_tiles", "chipped:inlayed_lodestone", "chipped:inscribed_lodestone", "chipped:layed_lodestone_bricks",
		"chipped:offset_lodestone_bricks", "chipped:pillar_lodestone_bricks", "chipped:prismal_lodestone_remnants", "chipped:ring_lodestone",
		"chipped:ring_lodestone_side", "chipped:rough_lodestone", "chipped:rounded_lodestone_bricks", "chipped:runic_carved_lodestone",
		"chipped:sad_lodestone", "chipped:sanded_lodestone", "chipped:sea_lantern_lodestone", "chipped:small_lodestone_bricks",
		"chipped:smooth_ringed_lodestone", "chipped:smoothed_double_inlayed_lodestone", "chipped:spider_lodestone_carving", "chipped:spiraled_lodestone",
		"chipped:stacked_lodestone_bricks", "chipped:tiled_lodestone", "chipped:tiny_lodestone_bricks", "chipped:tiny_layered_lodestone_bricks",
		"chipped:tiny_layered_lodestone_slabs", "chipped:trodden_lodestone", "chipped:unamused_lodestone", "chipped:vertical_cut_lodestone",
		"chipped:vertical_disordered_lodestone_bricks", "chipped:watching_lodestone", "chipped:weathered_lodestone", "chipped:wider_diamond_lodestone",
		"chipped:wider_ring_lodestone", "chipped:wider_watching_lodestone", "chipped:bordered_lodestone", "chipped:brick_bordered_lodestone",
		"chipped:cut_lodestone_column", "chipped:edged_lodestone_bricks", "chipped:overlapping_lodestone_tiles", "chipped:polished_lodestone",
		"chipped:smooth_lodestone_column", "chipped:thick_inlayed_lodestone", "chipped:tiled_lodestone_column", "chipped:tiled_bordered_lodestone",
		"chipped:tiny_brick_bordered_lodestone", "chipped:curly_lodestone_pillar", "chipped:fine_lodestone_pillar", "chipped:ornate_lodestone_pillar",
		"chipped:simple_lodestone_pillar", "chipped:massive_lodestone_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
