// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:deepslate"
	var block_ids = [
		"chipped:deepslate_mini_tiles", "chipped:deepslate_pillar", "chipped:deepslate_pillar_top", "chipped:deepslate_scales",
		"chipped:angry_deepslate", "chipped:blank_deepslate_carving", "chipped:carved_deepslate", "chipped:checkered_deepslate_tiles",
		"chipped:cracked_disordered_deepslate_bricks", "chipped:creeper_deepslate_carving", "chipped:crying_deepslate", "chipped:cut_blank_deepslate",
		"chipped:glad_deepslate", "chipped:duh_deepslate", "chipped:engraved_deepslate", "chipped:eroded_deepslate",
		"chipped:etched_deepslate_bricks", "chipped:inlayed_deepslate", "chipped:inscribed_deepslate", "chipped:loded_deepslate",
		"chipped:pillar_deepslate_bricks", "chipped:prismal_deepslate_remnants", "chipped:rough_deepslate", "chipped:rounded_deepslate_bricks",
		"chipped:runic_carved_deepslate", "chipped:sad_deepslate", "chipped:sanded_deepslate", "chipped:small_deepslate_bricks",
		"chipped:smooth_inlayed_deepslate", "chipped:smooth_ringed_deepslate", "chipped:smoothed_double_inlayed_deepslate", "chipped:spider_deepslate_carving",
		"chipped:spiraled_deepslate", "chipped:stacked_deepslate_bricks", "chipped:tiled_deepslate", "chipped:tiny_deepslate_bricks",
		"chipped:tiny_layered_deepslate_bricks", "chipped:tiny_layered_deepslate_slabs", "chipped:trodden_deepslate", "chipped:unamused_deepslate",
		"chipped:vertical_cut_deepslate", "chipped:vertical_disordered_deepslate_bricks", "chipped:weathered_deepslate", "chipped:bordered_deepslate",
		"chipped:brick_bordered_deepslate", "chipped:cut_deepslate_column", "chipped:edged_deepslate_bricks", "chipped:overlapping_deepslate_tiles",
		"chipped:polished_deepslate", "chipped:smooth_deepslate_column", "chipped:thick_inlayed_deepslate", "chipped:tiled_deepslate_column",
		"chipped:tiled_bordered_deepslate", "chipped:tiny_brick_bordered_deepslate", "chipped:curly_deepslate_pillar", "chipped:fine_deepslate_pillar",
		"chipped:ornate_deepslate_pillar", "chipped:simple_deepslate_pillar", "chipped:massive_deepslate_bricks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
