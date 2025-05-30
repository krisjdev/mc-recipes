// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:warped_planks"
	var block_ids = [
		"chipped:warped_planks_mosaic", "chipped:warped_planks_shavings", "chipped:basket_woven_warped_planks", "chipped:boxed_warped_planks",
		"chipped:brick_bond_warped_planks", "chipped:bricky_warped_planks", "chipped:cross_laced_warped_planks", "chipped:crossed_warped_planks",
		"chipped:detailed_warped_planks", "chipped:diagonal_warped_planks", "chipped:diamond_warped_planks", "chipped:double_herringbone_warped_planks",
		"chipped:fine_warped_planks", "chipped:fine_vertical_warped_planks", "chipped:herringbone_warped_planks", "chipped:hewn_warped_planks",
		"chipped:laced_warped_planks", "chipped:nailed_warped_planks", "chipped:polished_warped_planks", "chipped:railed_warped_planks",
		"chipped:shifted_warped_planks", "chipped:slanted_warped_planks", "chipped:smooth_warped_planks", "chipped:stacked_warped_planks",
		"chipped:thin_warped_planks", "chipped:tiled_warped_planks", "chipped:versailles_warped_planks", "chipped:vertical_warped_planks",
		"chipped:vertically_railed_warped_planks", "chipped:wickered_warped_planks", "chipped:warped_planks_panel", "chipped:cornered_warped_planks",
		"chipped:crated_warped_planks", "chipped:enclosed_warped_planks", "chipped:framed_warped_planks", "chipped:natural_warped_planks",
		"chipped:pegged_warped_planks", "chipped:whirlwind_warped_planks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
