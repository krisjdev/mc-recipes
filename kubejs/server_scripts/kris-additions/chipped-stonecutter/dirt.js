// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:dirt"
	var block_ids = [
		"chipped:dirt_bricks", "chipped:dirt_mini_tiles", "chipped:dirt_pillar", "chipped:dirt_pillar_top",
		"chipped:dirt_scales", "chipped:angry_dirt", "chipped:blank_dirt_carving", "chipped:carved_dirt",
		"chipped:checkered_dirt_tiles", "chipped:cobbled_dirt", "chipped:cracked_dirt_bricks", "chipped:cracked_disordered_dirt_bricks",
		"chipped:cracked_flat_dirt_tiles", "chipped:creeper_dirt_carving", "chipped:crying_dirt", "chipped:cut_blank_dirt",
		"chipped:glad_dirt", "chipped:duh_dirt", "chipped:engraved_dirt", "chipped:eroded_dirt",
		"chipped:etched_dirt_bricks", "chipped:flat_dirt_tiles", "chipped:inlayed_dirt", "chipped:inscribed_dirt",
		"chipped:layed_dirt_bricks", "chipped:loded_dirt", "chipped:offset_dirt_bricks", "chipped:pillar_dirt_bricks",
		"chipped:prismal_dirt_remnants", "chipped:rough_dirt", "chipped:rounded_dirt_bricks", "chipped:runic_carved_dirt",
		"chipped:sad_dirt", "chipped:sanded_dirt", "chipped:small_dirt_bricks", "chipped:smooth_inlayed_dirt",
		"chipped:smooth_ringed_dirt", "chipped:smoothed_double_inlayed_dirt", "chipped:spider_dirt_carving", "chipped:spiraled_dirt",
		"chipped:stacked_dirt_bricks", "chipped:tiled_dirt", "chipped:tiny_dirt_bricks", "chipped:tiny_layered_dirt_bricks",
		"chipped:tiny_layered_dirt_slabs", "chipped:trodden_dirt", "chipped:unamused_dirt", "chipped:vertical_cut_dirt",
		"chipped:vertical_disordered_dirt_bricks", "chipped:weathered_dirt", "chipped:bordered_dirt", "chipped:brick_bordered_dirt",
		"chipped:cut_dirt_column", "chipped:edged_dirt_bricks", "chipped:overlapping_dirt_tiles", "chipped:polished_dirt",
		"chipped:smooth_dirt_column", "chipped:thick_inlayed_dirt", "chipped:tiled_dirt_column", "chipped:tiled_bordered_dirt",
		"chipped:tiny_brick_bordered_dirt", "chipped:curly_dirt_pillar", "chipped:fine_dirt_pillar", "chipped:ornate_dirt_pillar",
		"chipped:simple_dirt_pillar", "chipped:massive_dirt_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
