// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:mossy_cobblestone"
	var block_ids = [
		"chipped:mossy_cobblestone_bricks", "chipped:mossy_cobblestone_mini_tiles", "chipped:mossy_cobblestone_pillar", "chipped:mossy_cobblestone_pillar_top",
		"chipped:mossy_cobblestone_scales", "chipped:angry_mossy_cobblestone", "chipped:blank_mossy_cobblestone_carving", "chipped:carved_mossy_cobblestone",
		"chipped:checkered_mossy_cobblestone_tiles", "chipped:cobbled_mossy_cobblestone", "chipped:cracked_mossy_cobblestone_bricks", "chipped:cracked_disordered_mossy_cobblestone_bricks",
		"chipped:cracked_flat_mossy_cobblestone_tiles", "chipped:creeper_mossy_cobblestone_carving", "chipped:crying_mossy_cobblestone", "chipped:cut_blank_mossy_cobblestone",
		"chipped:glad_mossy_cobblestone", "chipped:duh_mossy_cobblestone", "chipped:engraved_mossy_cobblestone", "chipped:eroded_mossy_cobblestone",
		"chipped:etched_mossy_cobblestone_bricks", "chipped:flat_mossy_cobblestone_tiles", "chipped:inlayed_mossy_cobblestone", "chipped:inscribed_mossy_cobblestone",
		"chipped:layed_mossy_cobblestone_bricks", "chipped:loded_mossy_cobblestone", "chipped:offset_mossy_cobblestone_bricks", "chipped:pillar_mossy_cobblestone_bricks",
		"chipped:prismal_mossy_cobblestone_remnants", "chipped:rough_mossy_cobblestone", "chipped:rounded_mossy_cobblestone_bricks", "chipped:runic_carved_mossy_cobblestone",
		"chipped:sad_mossy_cobblestone", "chipped:sanded_mossy_cobblestone", "chipped:small_mossy_cobblestone_bricks", "chipped:smooth_inlayed_mossy_cobblestone",
		"chipped:smooth_ringed_mossy_cobblestone", "chipped:smoothed_double_inlayed_mossy_cobblestone", "chipped:spider_mossy_cobblestone_carving", "chipped:spiraled_mossy_cobblestone",
		"chipped:stacked_mossy_cobblestone_bricks", "chipped:tiled_mossy_cobblestone", "chipped:tiny_mossy_cobblestone_bricks", "chipped:tiny_layered_mossy_cobblestone_bricks",
		"chipped:tiny_layered_mossy_cobblestone_slabs", "chipped:trodden_mossy_cobblestone", "chipped:unamused_mossy_cobblestone", "chipped:vertical_cut_mossy_cobblestone",
		"chipped:vertical_disordered_mossy_cobblestone_bricks", "chipped:weathered_mossy_cobblestone", "chipped:bordered_mossy_cobblestone", "chipped:brick_bordered_mossy_cobblestone",
		"chipped:cut_mossy_cobblestone_column", "chipped:edged_mossy_cobblestone_bricks", "chipped:overlapping_mossy_cobblestone_tiles", "chipped:polished_mossy_cobblestone",
		"chipped:smooth_mossy_cobblestone_column", "chipped:thick_inlayed_mossy_cobblestone", "chipped:tiled_mossy_cobblestone_column", "chipped:tiled_bordered_mossy_cobblestone",
		"chipped:tiny_brick_bordered_mossy_cobblestone", "chipped:curly_mossy_cobblestone_pillar", "chipped:fine_mossy_cobblestone_pillar", "chipped:ornate_mossy_cobblestone_pillar",
		"chipped:simple_mossy_cobblestone_pillar", "chipped:massive_mossy_cobblestone_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
