// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:calcite"
	var block_ids = [
		"chipped:calcite_bricks", "chipped:calcite_mini_tiles", "chipped:calcite_pillar", "chipped:calcite_pillar_top",
		"chipped:calcite_scales", "chipped:angry_calcite", "chipped:blank_calcite_carving", "chipped:carved_calcite",
		"chipped:checkered_calcite_tiles", "chipped:cobbled_calcite", "chipped:cracked_calcite_bricks", "chipped:cracked_disordered_calcite_bricks",
		"chipped:cracked_flat_calcite_tiles", "chipped:creeper_calcite_carving", "chipped:crying_calcite", "chipped:cut_blank_calcite",
		"chipped:glad_calcite", "chipped:duh_calcite", "chipped:engraved_calcite", "chipped:eroded_calcite",
		"chipped:etched_calcite_bricks", "chipped:flat_calcite_tiles", "chipped:inlayed_calcite", "chipped:inscribed_calcite",
		"chipped:layed_calcite_bricks", "chipped:loded_calcite", "chipped:offset_calcite_bricks", "chipped:pillar_calcite_bricks",
		"chipped:prismal_calcite_remnants", "chipped:rough_calcite", "chipped:rounded_calcite_bricks", "chipped:runic_carved_calcite",
		"chipped:sad_calcite", "chipped:sanded_calcite", "chipped:small_calcite_bricks", "chipped:smooth_inlayed_calcite",
		"chipped:smooth_ringed_calcite", "chipped:smoothed_double_inlayed_calcite", "chipped:spider_calcite_carving", "chipped:spiraled_calcite",
		"chipped:stacked_calcite_bricks", "chipped:tiled_calcite", "chipped:tiny_calcite_bricks", "chipped:tiny_layered_calcite_bricks",
		"chipped:tiny_layered_calcite_slabs", "chipped:trodden_calcite", "chipped:unamused_calcite", "chipped:vertical_cut_calcite",
		"chipped:vertical_disordered_calcite_bricks", "chipped:weathered_calcite", "chipped:bordered_calcite", "chipped:brick_bordered_calcite",
		"chipped:cut_calcite_column", "chipped:edged_calcite_bricks", "chipped:overlapping_calcite_tiles", "chipped:polished_calcite",
		"chipped:smooth_calcite_column", "chipped:thick_inlayed_calcite", "chipped:tiled_calcite_column", "chipped:tiled_bordered_calcite",
		"chipped:tiny_brick_bordered_calcite", "chipped:curly_calcite_pillar", "chipped:fine_calcite_pillar", "chipped:ornate_calcite_pillar",
		"chipped:simple_calcite_pillar", "chipped:massive_calcite_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
