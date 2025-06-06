// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:birch_planks"
	var block_ids = [
		"chipped:birch_planks_mosaic", "chipped:birch_planks_shavings", "chipped:basket_woven_birch_planks", "chipped:boxed_birch_planks",
		"chipped:brick_bond_birch_planks", "chipped:bricky_birch_planks", "chipped:cross_laced_birch_planks", "chipped:crossed_birch_planks",
		"chipped:detailed_birch_planks", "chipped:diagonal_birch_planks", "chipped:diamond_birch_planks", "chipped:double_herringbone_birch_planks",
		"chipped:fine_birch_planks", "chipped:fine_vertical_birch_planks", "chipped:herringbone_birch_planks", "chipped:hewn_birch_planks",
		"chipped:laced_birch_planks", "chipped:nailed_birch_planks", "chipped:polished_birch_planks", "chipped:railed_birch_planks",
		"chipped:shifted_birch_planks", "chipped:slanted_birch_planks", "chipped:smooth_birch_planks", "chipped:stacked_birch_planks",
		"chipped:thin_birch_planks", "chipped:tiled_birch_planks", "chipped:versailles_birch_planks", "chipped:vertical_birch_planks",
		"chipped:vertically_railed_birch_planks", "chipped:wickered_birch_planks", "chipped:birch_planks_panel", "chipped:cornered_birch_planks",
		"chipped:crated_birch_planks", "chipped:enclosed_birch_planks", "chipped:framed_birch_planks", "chipped:natural_birch_planks",
		"chipped:pegged_birch_planks", "chipped:whirlwind_birch_planks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
