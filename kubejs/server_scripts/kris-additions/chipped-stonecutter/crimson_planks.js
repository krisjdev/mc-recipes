// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:crimson_planks"
	var block_ids = [
		"chipped:crimson_planks_mosaic", "chipped:crimson_planks_shavings", "chipped:basket_woven_crimson_planks", "chipped:boxed_crimson_planks",
		"chipped:brick_bond_crimson_planks", "chipped:bricky_crimson_planks", "chipped:cross_laced_crimson_planks", "chipped:crossed_crimson_planks",
		"chipped:detailed_crimson_planks", "chipped:diagonal_crimson_planks", "chipped:diamond_crimson_planks", "chipped:double_herringbone_crimson_planks",
		"chipped:fine_crimson_planks", "chipped:fine_vertical_crimson_planks", "chipped:herringbone_crimson_planks", "chipped:hewn_crimson_planks",
		"chipped:laced_crimson_planks", "chipped:nailed_crimson_planks", "chipped:polished_crimson_planks", "chipped:railed_crimson_planks",
		"chipped:shifted_crimson_planks", "chipped:slanted_crimson_planks", "chipped:smooth_crimson_planks", "chipped:stacked_crimson_planks",
		"chipped:thin_crimson_planks", "chipped:tiled_crimson_planks", "chipped:versailles_crimson_planks", "chipped:vertical_crimson_planks",
		"chipped:vertically_railed_crimson_planks", "chipped:wickered_crimson_planks", "chipped:crimson_planks_panel", "chipped:cornered_crimson_planks",
		"chipped:crated_crimson_planks", "chipped:enclosed_crimson_planks", "chipped:framed_crimson_planks", "chipped:natural_crimson_planks",
		"chipped:pegged_crimson_planks", "chipped:whirlwind_crimson_planks", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
