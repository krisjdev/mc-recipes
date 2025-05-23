// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:mangrove_planks"
	var block_ids = [
		"chipped:mangrove_planks_mosaic", "chipped:mangrove_planks_shavings", "chipped:basket_woven_mangrove_planks", "chipped:boxed_mangrove_planks",
		"chipped:brick_bond_mangrove_planks", "chipped:bricky_mangrove_planks", "chipped:carved_mangrove_planks", "chipped:chiseled_mangrove_planks",
		"chipped:cross_laced_mangrove_planks", "chipped:crossed_mangrove_planks", "chipped:cut_mangrove_planks", "chipped:detailed_mangrove_planks",
		"chipped:diagonal_mangrove_planks", "chipped:diamond_mangrove_planks", "chipped:double_herringbone_mangrove_planks", "chipped:fine_mangrove_planks",
		"chipped:fine_vertical_mangrove_planks", "chipped:herringbone_mangrove_planks", "chipped:hewn_mangrove_planks", "chipped:laced_mangrove_planks",
		"chipped:nailed_mangrove_planks", "chipped:polished_mangrove_planks", "chipped:railed_mangrove_planks", "chipped:ringed_mangrove_planks",
		"chipped:shelved_mangrove_planks", "chipped:shifted_mangrove_planks", "chipped:sided_mangrove_planks", "chipped:slanted_mangrove_planks",
		"chipped:smooth_mangrove_planks", "chipped:stacked_mangrove_planks", "chipped:thin_mangrove_planks", "chipped:tiled_mangrove_planks",
		"chipped:versailles_mangrove_planks", "chipped:vertical_mangrove_planks", "chipped:vertically_railed_mangrove_planks", "chipped:bricked_mangrove_planks",
		"chipped:cornered_mangrove_planks", "chipped:crated_mangrove_planks", "chipped:enclosed_mangrove_planks", "chipped:framed_mangrove_planks",
		"chipped:mangrove_planks_panel", "chipped:natural_mangrove_planks", "chipped:pegged_mangrove_planks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
