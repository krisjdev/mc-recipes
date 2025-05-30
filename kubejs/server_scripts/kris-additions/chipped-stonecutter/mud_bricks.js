// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:mud_bricks"
	var block_ids = [
		"chipped:mud_bricks_bricks", "chipped:mud_bricks_pillar", "chipped:mud_bricks_pillar_top", "chipped:mud_bricks_scales",
		"chipped:angled_mud_bricks_bricks", "chipped:angry_mud_bricks", "chipped:arrow_mud_bricks", "chipped:button_mud_bricks",
		"chipped:carved_mud_bricks", "chipped:centered_mud_bricks", "chipped:chiseled_mud_bricks", "chipped:cracked_mud_bricks_bricks",
		"chipped:creeper_mud_bricks_carving", "chipped:crunched_mud_bricks_bricks", "chipped:crying_mud_bricks", "chipped:cut_blank_mud_bricks",
		"chipped:double_mud_bricks_bricks", "chipped:duh_mud_bricks", "chipped:engraved_mud_bricks", "chipped:etched_mud_bricks_bricks",
		"chipped:eye_mud_bricks", "chipped:fancy_mud_bricks", "chipped:fancy_chiseled_mud_bricks", "chipped:glad_mud_bricks",
		"chipped:heart_mud_bricks", "chipped:horned_mud_bricks", "chipped:inlayed_mud_bricks", "chipped:keyhole_mud_bricks",
		"chipped:large_tiled_mud_bricks", "chipped:leaning_mud_bricks", "chipped:mini_tiled_mud_bricks", "chipped:offset_mud_bricks_bricks",
		"chipped:pancake_mud_bricks", "chipped:panelled_mud_bricks", "chipped:placed_mud_bricks", "chipped:polished_mud_bricks",
		"chipped:prismal_mud_bricks_remnants", "chipped:quad_mud_bricks", "chipped:rough_mud_bricks", "chipped:rough_panelled_mud_bricks",
		"chipped:rune_mud_bricks", "chipped:sad_mud_bricks", "chipped:sigil_mud_bricks", "chipped:small_mud_bricks_bricks",
		"chipped:smooth_mud_bricks", "chipped:smooth_ringed_mud_bricks", "chipped:smoothed_double_inlayed_mud_bricks", "chipped:spider_mud_bricks_carving",
		"chipped:spiral_mud_bricks", "chipped:stacked_mud_bricks_bricks", "chipped:star_mud_bricks", "chipped:symbol_mud_bricks",
		"chipped:symbolic_mud_bricks_pillar", "chipped:thick_inlayed_mud_bricks", "chipped:tiled_mud_bricks_bricks", "chipped:tiny_mud_bricks_bricks",
		"chipped:tiny_layered_mud_bricks_bricks", "chipped:unamused_mud_bricks", "chipped:vertical_cut_mud_bricks", "chipped:vertical_disordered_mud_bricks_bricks",
		"chipped:bordered_mud_bricks", "chipped:brick_bordered_mud_bricks", "chipped:edged_mud_bricks_bricks", "chipped:hard_mud_bricks",
		"chipped:overlapping_mud_bricks_tiles", "chipped:scaly_mud_bricks", "chipped:tiled_bordered_mud_bricks", "chipped:tiled_mud_bricks_column",
		"chipped:carved_mud_bricks_pillar", "chipped:curly_mud_bricks_pillar", "chipped:fancy_mud_bricks_pillar", "chipped:fine_mud_bricks_pillar",
		"chipped:ornate_mud_bricks_pillar", "chipped:simple_mud_bricks_pillar", "chipped:massive_mud_bricks_bricks", "chipped:diamond_mud_bricks_bricks",
		"chipped:large_mud_bricks_sigil", "chipped:loreful_mud_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
