// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:dark_oak_planks"
	var block_ids = [
		"chipped:dark_oak_planks_mosaic", "chipped:dark_oak_planks_shavings", "chipped:basket_woven_dark_oak_planks", "chipped:boxed_dark_oak_planks",
		"chipped:brick_bond_dark_oak_planks", "chipped:bricky_dark_oak_planks", "chipped:cross_laced_dark_oak_planks", "chipped:crossed_dark_oak_planks",
		"chipped:detailed_dark_oak_planks", "chipped:diagonal_dark_oak_planks", "chipped:diamond_dark_oak_planks", "chipped:double_herringbone_dark_oak_planks",
		"chipped:fine_dark_oak_planks", "chipped:fine_vertical_dark_oak_planks", "chipped:herringbone_dark_oak_planks", "chipped:hewn_dark_oak_planks",
		"chipped:laced_dark_oak_planks", "chipped:nailed_dark_oak_planks", "chipped:polished_dark_oak_planks", "chipped:railed_dark_oak_planks",
		"chipped:shifted_dark_oak_planks", "chipped:slanted_dark_oak_planks", "chipped:smooth_dark_oak_planks", "chipped:stacked_dark_oak_planks",
		"chipped:thin_dark_oak_planks", "chipped:tiled_dark_oak_planks", "chipped:versailles_dark_oak_planks", "chipped:vertical_dark_oak_planks",
		"chipped:vertically_railed_dark_oak_planks", "chipped:wickered_dark_oak_planks", "chipped:dark_oak_planks_panel", "chipped:cornered_dark_oak_planks",
		"chipped:crated_dark_oak_planks", "chipped:enclosed_dark_oak_planks", "chipped:framed_dark_oak_planks", "chipped:natural_dark_oak_planks",
		"chipped:pegged_dark_oak_planks", "chipped:whirlwind_dark_oak_planks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
