// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:end_stone"
	var block_ids = [
		"minecraft:end_stone", "minecraft:end_stone_bricks", "rechiseled:end_stone_blobs", "rechiseled:end_stone_blobs_connecting",
		"rechiseled:end_stone_brick_pattern", "rechiseled:end_stone_brick_pattern_connecting", "rechiseled:end_stone_brick_paving", "rechiseled:end_stone_brick_paving_connecting",
		"rechiseled:end_stone_chiseled", "rechiseled:end_stone_chiseled_connecting", "rechiseled:end_stone_crushed", "rechiseled:end_stone_crushed_connecting",
		"rechiseled:end_stone_diagonal_bricks", "rechiseled:end_stone_diagonal_bricks_connecting", "rechiseled:end_stone_mesh", "rechiseled:end_stone_mesh_connecting",
		"rechiseled:end_stone_paving", "rechiseled:end_stone_paving_connecting", "rechiseled:end_stone_polished", "rechiseled:end_stone_polished_connecting",
		"rechiseled:end_stone_rotated_bricks", "rechiseled:end_stone_rotated_bricks_connecting", "rechiseled:end_stone_scales", "rechiseled:end_stone_scales_connecting",
		"rechiseled:end_stone_small_tiles", "rechiseled:end_stone_small_tiles_connecting", "rechiseled:end_stone_spiral_pattern", "rechiseled:end_stone_spiral_pattern_connecting",
		"rechiseled:end_stone_squares", "rechiseled:end_stone_squares_connecting", "rechiseled:end_stone_tiles", "rechiseled:end_stone_tiles_connecting",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
