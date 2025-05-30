// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cobblestone"
	var block_ids = [
		"chipped:cobblestone_bricks", "chipped:cobblestone_mini_tiles", "chipped:cobblestone_pillar", "chipped:cobblestone_pillar_top",
		"chipped:cobblestone_scales", "chipped:angry_cobblestone", "chipped:blank_cobblestone_carving", "chipped:carved_cobblestone",
		"chipped:checkered_cobblestone_tiles", "chipped:cobbled_cobblestone", "chipped:cracked_cobblestone_bricks", "chipped:cracked_disordered_cobblestone_bricks",
		"chipped:cracked_flat_cobblestone_tiles", "chipped:creeper_cobblestone_carving", "chipped:crying_cobblestone", "chipped:cut_blank_cobblestone",
		"chipped:glad_cobblestone", "chipped:duh_cobblestone", "chipped:engraved_cobblestone", "chipped:eroded_cobblestone",
		"chipped:etched_cobblestone_bricks", "chipped:flat_cobblestone_tiles", "chipped:inlayed_cobblestone", "chipped:inscribed_cobblestone",
		"chipped:layed_cobblestone_bricks", "chipped:loded_cobblestone", "chipped:offset_cobblestone_bricks", "chipped:pillar_cobblestone_bricks",
		"chipped:prismal_cobblestone_remnants", "chipped:rough_cobblestone", "chipped:rounded_cobblestone_bricks", "chipped:runic_carved_cobblestone",
		"chipped:sad_cobblestone", "chipped:sanded_cobblestone", "chipped:small_cobblestone_bricks", "chipped:smooth_inlayed_cobblestone",
		"chipped:smooth_ringed_cobblestone", "chipped:smoothed_double_inlayed_cobblestone", "chipped:spider_cobblestone_carving", "chipped:spiraled_cobblestone",
		"chipped:stacked_cobblestone_bricks", "chipped:tiled_cobblestone", "chipped:tiny_cobblestone_bricks", "chipped:tiny_layered_cobblestone_bricks",
		"chipped:tiny_layered_cobblestone_slabs", "chipped:trodden_cobblestone", "chipped:unamused_cobblestone", "chipped:vertical_cut_cobblestone",
		"chipped:vertical_disordered_cobblestone_bricks", "chipped:weathered_cobblestone", "chipped:bordered_cobblestone", "chipped:brick_bordered_cobblestone",
		"chipped:cut_cobblestone_column", "chipped:edged_cobblestone_bricks", "chipped:overlapping_cobblestone_tiles", "chipped:polished_cobblestone",
		"chipped:smooth_cobblestone_column", "chipped:thick_inlayed_cobblestone", "chipped:tiled_cobblestone_column", "chipped:tiled_bordered_cobblestone",
		"chipped:tiny_brick_bordered_cobblestone", "chipped:curly_cobblestone_pillar", "chipped:fine_cobblestone_pillar", "chipped:ornate_cobblestone_pillar",
		"chipped:simple_cobblestone_pillar", "chipped:massive_cobblestone_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
