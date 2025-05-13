// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:blackstone"
	var block_ids = [
		"minecraft:blackstone", "minecraft:polished_blackstone_bricks", "minecraft:cracked_polished_blackstone_bricks", "minecraft:chiseled_polished_blackstone",
		"rechiseled:blackstone_brick_pattern", "rechiseled:blackstone_brick_pattern_connecting", "rechiseled:blackstone_brick_paving", "rechiseled:blackstone_brick_paving_connecting",
		"rechiseled:blackstone_diagonal_bricks", "rechiseled:blackstone_diagonal_bricks_connecting", "minecraft:polished_blackstone", "rechiseled:blackstone_polished_connecting",
		"rechiseled:blackstone_tiles", "rechiseled:blackstone_tiles_connecting", "rechiseled:blackstone_rotated_bricks", "rechiseled:blackstone_rotated_bricks_connecting",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
