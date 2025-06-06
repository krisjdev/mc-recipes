// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:mud"
	var block_ids = [
		"chipped:mud_bricks", "chipped:mud_pillar", "chipped:mud_pillar_top", "chipped:mud_scales",
		"chipped:angled_mud_bricks", "chipped:angry_mud", "chipped:arrow_mud", "chipped:button_mud",
		"chipped:carved_mud", "chipped:centered_mud", "chipped:chiseled_mud", "chipped:cracked_mud_bricks",
		"chipped:creeper_mud_carving", "chipped:crunched_mud_bricks", "chipped:crying_mud", "chipped:cut_blank_mud",
		"chipped:double_mud_bricks", "chipped:duh_mud", "chipped:engraved_mud", "chipped:etched_mud_bricks",
		"chipped:eye_mud", "chipped:fancy_mud", "chipped:fancy_chiseled_mud", "chipped:glad_mud",
		"chipped:heart_mud", "chipped:horned_mud", "chipped:inlayed_mud", "chipped:keyhole_mud",
		"chipped:large_tiled_mud", "chipped:leaning_mud", "chipped:mini_tiled_mud", "chipped:offset_mud_bricks",
		"chipped:pancake_mud", "chipped:panelled_mud", "chipped:placed_mud", "chipped:polished_mud",
		"chipped:prismal_mud_remnants", "chipped:quad_mud", "chipped:rough_mud", "chipped:rough_panelled_mud",
		"chipped:rune_mud", "chipped:sad_mud", "chipped:sigil_mud", "chipped:small_mud_bricks",
		"chipped:smooth_mud", "chipped:smooth_ringed_mud", "chipped:smoothed_double_inlayed_mud", "chipped:spider_mud_carving",
		"chipped:spiral_mud", "chipped:stacked_mud_bricks", "chipped:star_mud", "chipped:symbol_mud",
		"chipped:symbolic_mud_pillar", "chipped:thick_inlayed_mud", "chipped:tiled_mud_bricks", "chipped:tiny_mud_bricks",
		"chipped:tiny_layered_mud_bricks", "chipped:unamused_mud", "chipped:vertical_cut_mud", "chipped:vertical_disordered_mud_bricks",
		"chipped:bordered_mud", "chipped:brick_bordered_mud", "chipped:edged_mud_bricks", "chipped:hard_mud",
		"chipped:overlapping_mud_tiles", "chipped:scaly_mud", "chipped:tiled_bordered_mud", "chipped:tiled_mud_column",
		"chipped:carved_mud_pillar", "chipped:curly_mud_pillar", "chipped:fancy_mud_pillar", "chipped:fine_mud_pillar",
		"chipped:ornate_mud_pillar", "chipped:simple_mud_pillar", "chipped:massive_mud_bricks", "chipped:diamond_mud_bricks",
		"chipped:large_mud_sigil", "chipped:loreful_mud", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
