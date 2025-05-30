// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:acacia_planks"
	var block_ids = [
		"chipped:acacia_planks_mosaic", "chipped:acacia_planks_shavings", "chipped:basket_woven_acacia_planks", "chipped:boxed_acacia_planks",
		"chipped:brick_bond_acacia_planks", "chipped:bricky_acacia_planks", "chipped:cross_laced_acacia_planks", "chipped:crossed_acacia_planks",
		"chipped:detailed_acacia_planks", "chipped:diagonal_acacia_planks", "chipped:diamond_acacia_planks", "chipped:double_herringbone_acacia_planks",
		"chipped:fine_acacia_planks", "chipped:fine_vertical_acacia_planks", "chipped:herringbone_acacia_planks", "chipped:hewn_acacia_planks",
		"chipped:laced_acacia_planks", "chipped:nailed_acacia_planks", "chipped:polished_acacia_planks", "chipped:railed_acacia_planks",
		"chipped:shifted_acacia_planks", "chipped:slanted_acacia_planks", "chipped:smooth_acacia_planks", "chipped:stacked_acacia_planks",
		"chipped:thin_acacia_planks", "chipped:tiled_acacia_planks", "chipped:versailles_acacia_planks", "chipped:vertical_acacia_planks",
		"chipped:vertically_railed_acacia_planks", "chipped:wickered_acacia_planks", "chipped:acacia_planks_panel", "chipped:cornered_acacia_planks",
		"chipped:crated_acacia_planks", "chipped:enclosed_acacia_planks", "chipped:framed_acacia_planks", "chipped:natural_acacia_planks",
		"chipped:pegged_acacia_planks", "chipped:whirlwind_acacia_planks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
