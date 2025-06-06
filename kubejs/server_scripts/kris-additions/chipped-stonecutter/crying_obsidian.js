// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:crying_obsidian"
	var block_ids = [
		"chipped:crying_obsidian_bricks", "chipped:crying_obsidian_mini_tiles", "chipped:crying_obsidian_pillar", "chipped:crying_obsidian_pillar_top",
		"chipped:crying_obsidian_scales", "chipped:angry_crying_obsidian", "chipped:blank_crying_obsidian_carving", "chipped:carved_crying_obsidian",
		"chipped:checkered_crying_obsidian_tiles", "chipped:cobbled_crying_obsidian", "chipped:cracked_crying_obsidian_bricks", "chipped:cracked_disordered_crying_obsidian_bricks",
		"chipped:cracked_flat_crying_obsidian_tiles", "chipped:creeper_crying_obsidian_carving", "chipped:crying_crying_obsidian", "chipped:cut_blank_crying_obsidian",
		"chipped:glad_crying_obsidian", "chipped:duh_crying_obsidian", "chipped:engraved_crying_obsidian", "chipped:eroded_crying_obsidian",
		"chipped:etched_crying_obsidian_bricks", "chipped:flat_crying_obsidian_tiles", "chipped:inlayed_crying_obsidian", "chipped:inscribed_crying_obsidian",
		"chipped:layed_crying_obsidian_bricks", "chipped:loded_crying_obsidian", "chipped:offset_crying_obsidian_bricks", "chipped:pillar_crying_obsidian_bricks",
		"chipped:prismal_crying_obsidian_remnants", "chipped:rough_crying_obsidian", "chipped:rounded_crying_obsidian_bricks", "chipped:runic_carved_crying_obsidian",
		"chipped:sad_crying_obsidian", "chipped:sanded_crying_obsidian", "chipped:small_crying_obsidian_bricks", "chipped:smooth_inlayed_crying_obsidian",
		"chipped:smooth_ringed_crying_obsidian", "chipped:smoothed_double_inlayed_crying_obsidian", "chipped:spider_crying_obsidian_carving", "chipped:spiraled_crying_obsidian",
		"chipped:stacked_crying_obsidian_bricks", "chipped:tiled_crying_obsidian", "chipped:tiny_crying_obsidian_bricks", "chipped:tiny_layered_crying_obsidian_bricks",
		"chipped:tiny_layered_crying_obsidian_slabs", "chipped:trodden_crying_obsidian", "chipped:unamused_crying_obsidian", "chipped:vertical_cut_crying_obsidian",
		"chipped:vertical_disordered_crying_obsidian_bricks", "chipped:weathered_crying_obsidian", "chipped:bordered_crying_obsidian", "chipped:brick_bordered_crying_obsidian",
		"chipped:cut_crying_obsidian_column", "chipped:edged_crying_obsidian_bricks", "chipped:overlapping_crying_obsidian_tiles", "chipped:polished_crying_obsidian",
		"chipped:smooth_crying_obsidian_column", "chipped:thick_inlayed_crying_obsidian", "chipped:tiled_crying_obsidian_column", "chipped:tiled_bordered_crying_obsidian",
		"chipped:tiny_brick_bordered_crying_obsidian", "chipped:curly_crying_obsidian_pillar", "chipped:fine_crying_obsidian_pillar", "chipped:ornate_crying_obsidian_pillar",
		"chipped:simple_crying_obsidian_pillar", "chipped:massive_crying_obsidian_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
