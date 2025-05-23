// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cherry_planks"
	var block_ids = [
		"chipped:cherry_planks_mosaic", "chipped:cherry_planks_shavings", "chipped:basket_woven_cherry_planks", "chipped:boxed_cherry_planks",
		"chipped:brick_bond_cherry_planks", "chipped:bricky_cherry_planks", "chipped:cross_laced_cherry_planks", "chipped:crossed_cherry_planks",
		"chipped:detailed_cherry_planks", "chipped:diagonal_cherry_planks", "chipped:diamond_cherry_planks", "chipped:double_herringbone_cherry_planks",
		"chipped:fine_cherry_planks", "chipped:fine_vertical_cherry_planks", "chipped:herringbone_cherry_planks", "chipped:hewn_cherry_planks",
		"chipped:laced_cherry_planks", "chipped:nailed_cherry_planks", "chipped:polished_cherry_planks", "chipped:railed_cherry_planks",
		"chipped:shifted_cherry_planks", "chipped:slanted_cherry_planks", "chipped:smooth_cherry_planks", "chipped:stacked_cherry_planks",
		"chipped:thin_cherry_planks", "chipped:tiled_cherry_planks", "chipped:versailles_cherry_planks", "chipped:vertical_cherry_planks",
		"chipped:vertically_railed_cherry_planks", "chipped:wickered_cherry_planks", "chipped:cherry_planks_panel", "chipped:cornered_cherry_planks",
		"chipped:crated_cherry_planks", "chipped:enclosed_cherry_planks", "chipped:framed_cherry_planks", "chipped:natural_cherry_planks",
		"chipped:pegged_cherry_planks", "chipped:whirlwind_cherry_planks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
