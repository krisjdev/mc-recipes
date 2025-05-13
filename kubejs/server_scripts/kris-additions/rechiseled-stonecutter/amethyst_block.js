// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:amethyst_block"
	var block_ids = [
		"minecraft:amethyst_block", "rechiseled:amethyst_block_beams", "rechiseled:amethyst_block_beams_connecting", "rechiseled:amethyst_block_bordered_diagonal_tiles",
		"rechiseled:amethyst_block_bordered_diagonal_tiles_connecting", "rechiseled:amethyst_block_bricks", "rechiseled:amethyst_block_bricks_connecting", "rechiseled:amethyst_block_cut",
		"rechiseled:amethyst_block_cut_connecting", "rechiseled:amethyst_block_diagonal_tiles", "rechiseled:amethyst_block_edged", "rechiseled:amethyst_block_edged_connecting",
		"rechiseled:amethyst_block_jewel", "rechiseled:amethyst_block_pillar", "rechiseled:amethyst_block_pillar_connecting", "rechiseled:amethyst_block_polished",
		"rechiseled:amethyst_block_polished_connecting", "rechiseled:amethyst_block_shiny", "rechiseled:amethyst_block_shiny_connecting", "rechiseled:amethyst_block_smooth",
		"rechiseled:amethyst_block_tiles", "rechiseled:amethyst_block_tiles_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
