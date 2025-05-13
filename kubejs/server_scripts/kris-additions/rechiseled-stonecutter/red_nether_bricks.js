// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:red_nether_bricks"
	var block_ids = [
		"minecraft:red_nether_bricks", "rechiseled:red_nether_bricks_beams", "rechiseled:red_nether_bricks_beams_connecting", "rechiseled:red_nether_bricks_brick_pattern",
		"rechiseled:red_nether_bricks_brick_pattern_connecting", "rechiseled:red_nether_bricks_brick_paving", "rechiseled:red_nether_bricks_brick_paving_connecting", "rechiseled:red_nether_bricks_chiseled_squares",
		"rechiseled:red_nether_bricks_chiseled_squares_connecting", "rechiseled:red_nether_bricks_diagonal_bricks", "rechiseled:red_nether_bricks_diagonal_bricks_connecting", "rechiseled:red_nether_bricks_large_bricks",
		"rechiseled:red_nether_bricks_large_bricks_connecting", "rechiseled:red_nether_bricks_large_tiles", "rechiseled:red_nether_bricks_large_tiles_connecting", "rechiseled:red_nether_bricks_rotated_bricks",
		"rechiseled:red_nether_bricks_rotated_bricks_connecting", "rechiseled:red_nether_bricks_small_tiles", "rechiseled:red_nether_bricks_small_tiles_connecting", "rechiseled:red_nether_bricks_smooth",
		"rechiseled:red_nether_bricks_smooth_connecting", "rechiseled:red_nether_bricks_squares", "rechiseled:red_nether_bricks_squares_connecting", "rechiseled:red_nether_bricks_tiles",
		"rechiseled:red_nether_bricks_tiles_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
