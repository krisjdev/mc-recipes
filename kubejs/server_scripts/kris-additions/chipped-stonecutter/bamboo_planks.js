// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:bamboo_planks"
	var block_ids = [
		"chipped:bamboo_planks_fine_mosaic", "chipped:bamboo_planks_shavings", "chipped:basket_woven_bamboo_planks", "chipped:boxed_bamboo_planks",
		"chipped:brick_bond_bamboo_planks", "chipped:bricky_bamboo_planks", "chipped:cross_laced_bamboo_planks", "chipped:crossed_bamboo_planks",
		"chipped:detailed_bamboo_planks", "chipped:diagonal_bamboo_planks", "chipped:diamond_bamboo_planks", "chipped:double_herringbone_bamboo_planks",
		"chipped:fine_bamboo_planks", "chipped:fine_vertical_bamboo_planks", "chipped:herringbone_bamboo_planks", "chipped:hewn_bamboo_planks",
		"chipped:laced_bamboo_planks", "chipped:reinforced_bamboo_planks", "chipped:polished_bamboo_planks", "chipped:railed_bamboo_planks",
		"chipped:shifted_bamboo_planks", "chipped:slanted_bamboo_planks", "chipped:smooth_bamboo_planks", "chipped:stacked_bamboo_planks",
		"chipped:thin_bamboo_planks", "chipped:tiled_bamboo_planks", "chipped:versailles_bamboo_planks", "chipped:vertical_bamboo_planks",
		"chipped:vertically_railed_bamboo_planks", "chipped:wickered_bamboo_planks", "chipped:bamboo_planks_panel", "chipped:cornered_bamboo_planks",
		"chipped:crated_bamboo_planks", "chipped:enclosed_bamboo_planks", "chipped:framed_bamboo_planks", "chipped:natural_bamboo_planks",
		"chipped:tied_bamboo_planks", "chipped:whirlwind_bamboo_planks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
