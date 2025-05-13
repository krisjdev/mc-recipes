// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:diamond_block"
	var block_ids = [
		"rechiseled:diamond_block_chiseled", "rechiseled:diamond_block_chiseled_connecting", "rechiseled:diamond_block_chiseled_cubes", "rechiseled:diamond_block_chiseled_cubes_connecting",
		"minecraft:diamond_block", "rechiseled:diamond_block_connecting_connecting", "rechiseled:diamond_block_diagonal_tiles", "rechiseled:diamond_block_grid",
		"rechiseled:diamond_block_grid_connecting", "rechiseled:diamond_block_jewel_block", "rechiseled:diamond_block_jewel_block_connecting", "rechiseled:diamond_block_polished",
		"rechiseled:diamond_block_polished_connecting", "rechiseled:diamond_block_rhombuses", "rechiseled:diamond_block_rhombuses_connecting", "rechiseled:diamond_block_shiny",
		"rechiseled:diamond_block_shiny_bordered", "rechiseled:diamond_block_shiny_bordered_connecting", "rechiseled:diamond_block_small_tiles", "rechiseled:diamond_block_small_tiles_connecting",
		"rechiseled:diamond_block_smooth", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
