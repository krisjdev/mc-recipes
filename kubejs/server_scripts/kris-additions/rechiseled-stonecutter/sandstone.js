// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:sandstone"
	var block_ids = [
		"minecraft:sandstone", "minecraft:chiseled_sandstone", "minecraft:cut_sandstone", "minecraft:smooth_sandstone",
		"rechiseled:sandstone_brick_pattern", "rechiseled:sandstone_brick_pattern_connecting", "rechiseled:sandstone_brick_paving", "rechiseled:sandstone_brick_paving_connecting",
		"rechiseled:sandstone_bricks", "rechiseled:sandstone_bricks_connecting", "rechiseled:sandstone_diagonal_bricks", "rechiseled:sandstone_diagonal_bricks_connecting",
		"rechiseled:sandstone_large_tiles", "rechiseled:sandstone_large_tiles_connecting", "rechiseled:sandstone_polished", "rechiseled:sandstone_polished_connecting",
		"rechiseled:sandstone_rotated_bricks", "rechiseled:sandstone_rotated_bricks_connecting", "rechiseled:sandstone_tiles", "rechiseled:sandstone_tiles_connecting",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
