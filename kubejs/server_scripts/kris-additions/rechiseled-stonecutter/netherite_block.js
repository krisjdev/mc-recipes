// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:netherite_block"
	var block_ids = [
		"minecraft:netherite_block", "rechiseled:netherite_block_beams", "rechiseled:netherite_block_beams_connecting", "rechiseled:netherite_block_bricks",
		"rechiseled:netherite_block_bricks_connecting", "rechiseled:netherite_block_chiseled", "rechiseled:netherite_block_chiseled_connecting", "rechiseled:netherite_block_compacted",
		"rechiseled:netherite_block_compacted_connecting", "rechiseled:netherite_block_decorated", "rechiseled:netherite_block_decorated_connecting", "rechiseled:netherite_block_diagonal_tiles",
		"rechiseled:netherite_block_diagonal_tiles_connecting", "rechiseled:netherite_block_indented", "rechiseled:netherite_block_indented_connecting", "rechiseled:netherite_block_meteoric",
		"rechiseled:netherite_block_patterned", "rechiseled:netherite_block_patterned_connecting", "rechiseled:netherite_block_pillar", "rechiseled:netherite_block_pillar_connecting",
		"rechiseled:netherite_block_small_tiles", "rechiseled:netherite_block_small_tiles_connecting", "rechiseled:netherite_block_smooth", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
