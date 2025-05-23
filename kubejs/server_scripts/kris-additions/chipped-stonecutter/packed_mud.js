// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:packed_mud"
	var block_ids = [
		"chipped:packed_mud_bricks", "chipped:packed_mud_pillar", "chipped:packed_mud_pillar_top", "chipped:packed_mud_scales",
		"chipped:angled_packed_mud_bricks", "chipped:angry_packed_mud", "chipped:arrow_packed_mud", "chipped:button_packed_mud",
		"chipped:carved_packed_mud", "chipped:centered_packed_mud", "chipped:chiseled_packed_mud", "chipped:cracked_packed_mud_bricks",
		"chipped:creeper_packed_mud_carving", "chipped:crunched_packed_mud_bricks", "chipped:crying_packed_mud", "chipped:cut_blank_packed_mud",
		"chipped:double_packed_mud_bricks", "chipped:duh_packed_mud", "chipped:engraved_packed_mud", "chipped:etched_packed_mud_bricks",
		"chipped:eye_packed_mud", "chipped:fancy_packed_mud", "chipped:fancy_chiseled_packed_mud", "chipped:glad_packed_mud",
		"chipped:heart_packed_mud", "chipped:horned_packed_mud", "chipped:inlayed_packed_mud", "chipped:keyhole_packed_mud",
		"chipped:large_tiled_packed_mud", "chipped:leaning_packed_mud", "chipped:mini_tiled_packed_mud", "chipped:offset_packed_mud_bricks",
		"chipped:pancake_packed_mud", "chipped:panelled_packed_mud", "chipped:placed_packed_mud", "chipped:polished_packed_mud",
		"chipped:prismal_packed_mud_remnants", "chipped:quad_packed_mud", "chipped:rough_packed_mud", "chipped:rough_panelled_packed_mud",
		"chipped:rune_packed_mud", "chipped:sad_packed_mud", "chipped:sigil_packed_mud", "chipped:small_packed_mud_bricks",
		"chipped:smooth_packed_mud", "chipped:smooth_ringed_packed_mud", "chipped:smoothed_double_inlayed_packed_mud", "chipped:spider_packed_mud_carving",
		"chipped:spiral_packed_mud", "chipped:stacked_packed_mud_bricks", "chipped:star_packed_mud", "chipped:symbol_packed_mud",
		"chipped:symbolic_packed_mud_pillar", "chipped:thick_inlayed_packed_mud", "chipped:tiled_packed_mud_bricks", "chipped:tiny_packed_mud_bricks",
		"chipped:tiny_layered_packed_mud_bricks", "chipped:unamused_packed_mud", "chipped:vertical_cut_packed_mud", "chipped:vertical_disordered_packed_mud_bricks",
		"chipped:bordered_packed_mud", "chipped:brick_bordered_packed_mud", "chipped:edged_packed_mud_bricks", "chipped:hard_packed_mud",
		"chipped:overlapping_packed_mud_tiles", "chipped:scaly_packed_mud", "chipped:tiled_bordered_packed_mud", "chipped:tiled_packed_mud_column",
		"chipped:carved_packed_mud_pillar", "chipped:curly_packed_mud_pillar", "chipped:fancy_packed_mud_pillar", "chipped:fine_packed_mud_pillar",
		"chipped:ornate_packed_mud_pillar", "chipped:simple_packed_mud_pillar", "chipped:massive_packed_mud_bricks", "chipped:diamond_packed_mud_bricks",
		"chipped:large_packed_mud_sigil", "chipped:loreful_packed_mud", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
