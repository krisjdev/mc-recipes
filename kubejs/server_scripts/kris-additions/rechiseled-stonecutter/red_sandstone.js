// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:red_sandstone"
	var block_ids = [
		"minecraft:red_sandstone", "minecraft:chiseled_red_sandstone", "minecraft:cut_red_sandstone", "minecraft:smooth_red_sandstone",
		"rechiseled:red_sandstone_brick_pattern", "rechiseled:red_sandstone_brick_pattern_connecting", "rechiseled:red_sandstone_brick_paving", "rechiseled:red_sandstone_brick_paving_connecting",
		"rechiseled:red_sandstone_bricks", "rechiseled:red_sandstone_bricks_connecting", "rechiseled:red_sandstone_diagonal_bricks", "rechiseled:red_sandstone_diagonal_bricks_connecting",
		"rechiseled:red_sandstone_large_tiles", "rechiseled:red_sandstone_large_tiles_connecting", "rechiseled:red_sandstone_polished", "rechiseled:red_sandstone_polished_connecting",
		"rechiseled:red_sandstone_rotated_bricks", "rechiseled:red_sandstone_rotated_bricks_connecting", "rechiseled:red_sandstone_tiles", "rechiseled:red_sandstone_tiles_connecting",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
