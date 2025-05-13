// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:nether_bricks"
	var block_ids = [
		"minecraft:nether_bricks", "minecraft:chiseled_nether_bricks", "minecraft:cracked_nether_bricks", "rechiseled:nether_bricks_beams",
		"rechiseled:nether_bricks_beams_connecting", "rechiseled:nether_bricks_brick_pattern", "rechiseled:nether_bricks_brick_pattern_connecting", "rechiseled:nether_bricks_brick_paving",
		"rechiseled:nether_bricks_brick_paving_connecting", "rechiseled:nether_bricks_chiseled_squares", "rechiseled:nether_bricks_chiseled_squares_connecting", "rechiseled:nether_bricks_diagonal_bricks",
		"rechiseled:nether_bricks_diagonal_bricks_connecting", "rechiseled:nether_bricks_large_bricks", "rechiseled:nether_bricks_large_bricks_connecting", "rechiseled:nether_bricks_large_tiles",
		"rechiseled:nether_bricks_large_tiles_connecting", "rechiseled:nether_bricks_rotated_bricks", "rechiseled:nether_bricks_rotated_bricks_connecting", "rechiseled:nether_bricks_small_tiles",
		"rechiseled:nether_bricks_small_tiles_connecting", "rechiseled:nether_bricks_smooth", "rechiseled:nether_bricks_smooth_connecting", "rechiseled:nether_bricks_squares",
		"rechiseled:nether_bricks_squares_connecting", "rechiseled:nether_bricks_tiles", "rechiseled:nether_bricks_tiles_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
