// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:granite"
	var block_ids = [
		"minecraft:granite", "rechiseled:granite_brick_pattern", "rechiseled:granite_brick_pattern_connecting", "rechiseled:granite_brick_paving",
		"rechiseled:granite_brick_paving_connecting", "rechiseled:granite_bricks", "rechiseled:granite_bricks_connecting", "rechiseled:granite_diagonal_bricks",
		"rechiseled:granite_diagonal_bricks_connecting", "rechiseled:granite_dotted", "rechiseled:granite_dotted_connecting", "rechiseled:granite_paving",
		"rechiseled:granite_paving_connecting", "minecraft:polished_granite", "rechiseled:granite_polished_connecting", "rechiseled:granite_rotated_bricks",
		"rechiseled:granite_rotated_bricks_connecting", "rechiseled:granite_squares", "rechiseled:granite_squares_connecting", "rechiseled:granite_tiles",
		"rechiseled:granite_tiles_connecting", "rechiseled:granite_wavy", "rechiseled:granite_wavy_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
