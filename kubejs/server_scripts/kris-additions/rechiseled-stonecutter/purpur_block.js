// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:purpur_block"
	var block_ids = [
		"minecraft:purpur_pillar", "rechiseled:purpur_brick_pattern", "rechiseled:purpur_brick_pattern_connecting", "rechiseled:purpur_brick_paving",
		"rechiseled:purpur_brick_paving_connecting", "rechiseled:purpur_bricks", "rechiseled:purpur_bricks_connecting", "rechiseled:purpur_diagonal_bricks",
		"rechiseled:purpur_diagonal_bricks_connecting", "rechiseled:purpur_diagonal_tiles", "rechiseled:purpur_diagonal_tiles_connecting", "rechiseled:purpur_dotted",
		"rechiseled:purpur_dotted_connecting", "rechiseled:purpur_fabric", "rechiseled:purpur_fabric_connecting", "rechiseled:purpur_jagged_pattern",
		"rechiseled:purpur_jagged_pattern_connecting", "rechiseled:purpur_large_tiles", "rechiseled:purpur_large_tiles_connecting", "rechiseled:purpur_organic_pattern",
		"rechiseled:purpur_organic_pattern_connecting", "rechiseled:purpur_pillar", "rechiseled:purpur_pillar_connecting", "rechiseled:purpur_rotated_bricks",
		"rechiseled:purpur_rotated_bricks_connecting", "rechiseled:purpur_slanted_tiles", "rechiseled:purpur_slanted_tiles_connecting", "rechiseled:purpur_small_tiles",
		"rechiseled:purpur_small_tiles_connecting", "rechiseled:purpur_spiral_pattern", "rechiseled:purpur_spiral_pattern_connecting", "rechiseled:purpur_squares",
		"rechiseled:purpur_squares_connecting", "minecraft:purpur_block", "rechiseled:purpur_tiles_connecting", "rechiseled:purpur_woven",
		"rechiseled:purpur_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
