// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:oak_planks"
	var block_ids = [
		"chipped:oak_planks_mosaic", "chipped:oak_planks_shavings", "chipped:basket_woven_oak_planks", "chipped:boxed_oak_planks",
		"chipped:brick_bond_oak_planks", "chipped:bricky_oak_planks", "chipped:cross_laced_oak_planks", "chipped:crossed_oak_planks",
		"chipped:detailed_oak_planks", "chipped:diagonal_oak_planks", "chipped:diamond_oak_planks", "chipped:double_herringbone_oak_planks",
		"chipped:fine_oak_planks", "chipped:fine_vertical_oak_planks", "chipped:herringbone_oak_planks", "chipped:hewn_oak_planks",
		"chipped:laced_oak_planks", "chipped:nailed_oak_planks", "chipped:polished_oak_planks", "chipped:railed_oak_planks",
		"chipped:shifted_oak_planks", "chipped:slanted_oak_planks", "chipped:smooth_oak_planks", "chipped:stacked_oak_planks",
		"chipped:thin_oak_planks", "chipped:tiled_oak_planks", "chipped:versailles_oak_planks", "chipped:vertical_oak_planks",
		"chipped:vertically_railed_oak_planks", "chipped:wickered_oak_planks", "chipped:oak_planks_panel", "chipped:cornered_oak_planks",
		"chipped:crated_oak_planks", "chipped:enclosed_oak_planks", "chipped:framed_oak_planks", "chipped:natural_oak_planks",
		"chipped:pegged_oak_planks", "chipped:whirlwind_oak_planks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
