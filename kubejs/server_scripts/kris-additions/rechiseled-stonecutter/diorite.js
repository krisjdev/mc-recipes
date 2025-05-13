// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:diorite"
	var block_ids = [
		"minecraft:diorite", "rechiseled:diorite_brick_pattern", "rechiseled:diorite_brick_pattern_connecting", "rechiseled:diorite_brick_paving",
		"rechiseled:diorite_brick_paving_connecting", "rechiseled:diorite_bricks", "rechiseled:diorite_bricks_connecting", "rechiseled:diorite_diagonal_bricks",
		"rechiseled:diorite_diagonal_bricks_connecting", "rechiseled:diorite_dotted", "rechiseled:diorite_dotted_connecting", "rechiseled:diorite_paving",
		"rechiseled:diorite_paving_connecting", "minecraft:polished_diorite", "rechiseled:diorite_polished_connecting", "rechiseled:diorite_rotated_bricks",
		"rechiseled:diorite_rotated_bricks_connecting", "rechiseled:diorite_squares", "rechiseled:diorite_squares_connecting", "rechiseled:diorite_tiles",
		"rechiseled:diorite_tiles_connecting", "rechiseled:diorite_wavy", "rechiseled:diorite_wavy_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
