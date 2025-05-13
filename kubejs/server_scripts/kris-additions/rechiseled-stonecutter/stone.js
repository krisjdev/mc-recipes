// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:stone"
	var block_ids = [
		"minecraft:stone", "minecraft:stone_bricks", "minecraft:mossy_stone_bricks", "minecraft:cracked_stone_bricks",
		"rechiseled:stone_big_tiles", "rechiseled:stone_big_tiles_connecting", "rechiseled:stone_bordered", "rechiseled:stone_bordered_connecting",
		"rechiseled:stone_brick_pattern", "rechiseled:stone_brick_pattern_connecting", "rechiseled:stone_brick_paving", "rechiseled:stone_brick_paving_connecting",
		"minecraft:chiseled_stone_bricks", "rechiseled:stone_chiseled_bricks_connecting", "rechiseled:stone_cobbled", "rechiseled:stone_crushed",
		"rechiseled:stone_crushed_connecting", "rechiseled:stone_diagonal_bricks", "rechiseled:stone_diagonal_bricks_connecting", "rechiseled:stone_path",
		"rechiseled:stone_path_connecting", "rechiseled:stone_rotated_bricks", "rechiseled:stone_rotated_bricks_connecting", "rechiseled:stone_slated",
		"rechiseled:stone_small_bricks", "rechiseled:stone_small_bricks_connecting", "rechiseled:stone_small_tiles", "rechiseled:stone_small_tiles_connecting",
		"minecraft:smooth_stone", "rechiseled:stone_smooth_connecting", "rechiseled:stone_smooth_brick_paving", "rechiseled:stone_smooth_brick_paving_connecting",
		"rechiseled:stone_smooth_large_tiles", "rechiseled:stone_smooth_large_tiles_connecting", "rechiseled:stone_smooth_rotated_bricks", "rechiseled:stone_smooth_rotated_bricks_connecting",
		"rechiseled:stone_smooth_tiles", "rechiseled:stone_smooth_tiles_connecting", "rechiseled:stone_squares", "rechiseled:stone_squares_connecting",
		"rechiseled:stone_tiles", "rechiseled:stone_tiles_connecting", "rechiseled:stone_waves", "rechiseled:stone_waves_connecting",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
