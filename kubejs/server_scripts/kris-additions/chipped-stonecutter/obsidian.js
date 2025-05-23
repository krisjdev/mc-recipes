// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:obsidian"
	var block_ids = [
		"chipped:obsidian_bricks", "chipped:obsidian_mini_tiles", "chipped:obsidian_pillar", "chipped:obsidian_pillar_top",
		"chipped:obsidian_scales", "chipped:angry_obsidian", "chipped:blank_obsidian_carving", "chipped:carved_obsidian",
		"chipped:checkered_obsidian_tiles", "chipped:cobbled_obsidian", "chipped:cracked_obsidian_bricks", "chipped:cracked_disordered_obsidian_bricks",
		"chipped:cracked_flat_obsidian_tiles", "chipped:creeper_obsidian_carving", "chipped:crying_obsidian", "chipped:cut_blank_obsidian",
		"chipped:glad_obsidian", "chipped:duh_obsidian", "chipped:engraved_obsidian", "chipped:eroded_obsidian",
		"chipped:etched_obsidian_bricks", "chipped:flat_obsidian_tiles", "chipped:inlayed_obsidian", "chipped:inscribed_obsidian",
		"chipped:layed_obsidian_bricks", "chipped:loded_obsidian", "chipped:offset_obsidian_bricks", "chipped:pillar_obsidian_bricks",
		"chipped:prismal_obsidian_remnants", "chipped:rough_obsidian", "chipped:rounded_obsidian_bricks", "chipped:runic_carved_obsidian",
		"chipped:sad_obsidian", "chipped:sanded_obsidian", "chipped:small_obsidian_bricks", "chipped:smooth_inlayed_obsidian",
		"chipped:smooth_ringed_obsidian", "chipped:smoothed_double_inlayed_obsidian", "chipped:spider_obsidian_carving", "chipped:spiraled_obsidian",
		"chipped:stacked_obsidian_bricks", "chipped:tiled_obsidian", "chipped:tiny_obsidian_bricks", "chipped:tiny_layered_obsidian_bricks",
		"chipped:tiny_layered_obsidian_slabs", "chipped:trodden_obsidian", "chipped:unamused_obsidian", "chipped:vertical_cut_obsidian",
		"chipped:vertical_disordered_obsidian_bricks", "chipped:weathered_obsidian", "chipped:bordered_obsidian", "chipped:brick_bordered_obsidian",
		"chipped:cut_obsidian_column", "chipped:edged_obsidian_bricks", "chipped:overlapping_obsidian_tiles", "chipped:polished_obsidian",
		"chipped:smooth_obsidian_column", "chipped:thick_inlayed_obsidian", "chipped:tiled_obsidian_column", "chipped:tiled_bordered_obsidian",
		"chipped:tiny_brick_bordered_obsidian", "chipped:curly_obsidian_pillar", "chipped:fine_obsidian_pillar", "chipped:ornate_obsidian_pillar",
		"chipped:simple_obsidian_pillar", "chipped:massive_obsidian_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
