// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:jungle_planks"
	var block_ids = [
		"chipped:jungle_planks_mosaic", "chipped:jungle_planks_shavings", "chipped:basket_woven_jungle_planks", "chipped:boxed_jungle_planks",
		"chipped:brick_bond_jungle_planks", "chipped:bricky_jungle_planks", "chipped:cross_laced_jungle_planks", "chipped:crossed_jungle_planks",
		"chipped:detailed_jungle_planks", "chipped:diagonal_jungle_planks", "chipped:diamond_jungle_planks", "chipped:double_herringbone_jungle_planks",
		"chipped:fine_jungle_planks", "chipped:fine_vertical_jungle_planks", "chipped:herringbone_jungle_planks", "chipped:hewn_jungle_planks",
		"chipped:laced_jungle_planks", "chipped:nailed_jungle_planks", "chipped:polished_jungle_planks", "chipped:railed_jungle_planks",
		"chipped:shifted_jungle_planks", "chipped:slanted_jungle_planks", "chipped:smooth_jungle_planks", "chipped:stacked_jungle_planks",
		"chipped:thin_jungle_planks", "chipped:tiled_jungle_planks", "chipped:versailles_jungle_planks", "chipped:vertical_jungle_planks",
		"chipped:vertically_railed_jungle_planks", "chipped:wickered_jungle_planks", "chipped:jungle_planks_panel", "chipped:cornered_jungle_planks",
		"chipped:crated_jungle_planks", "chipped:enclosed_jungle_planks", "chipped:framed_jungle_planks", "chipped:natural_jungle_planks",
		"chipped:pegged_jungle_planks", "chipped:whirlwind_jungle_planks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
