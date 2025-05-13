// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:andesite"
	var block_ids = [
		"minecraft:andesite", "rechiseled:andesite_brick_pattern", "rechiseled:andesite_brick_pattern_connecting", "rechiseled:andesite_brick_paving",
		"rechiseled:andesite_brick_paving_connecting", "rechiseled:andesite_bricks", "rechiseled:andesite_bricks_connecting", "rechiseled:andesite_diagonal_bricks",
		"rechiseled:andesite_diagonal_bricks_connecting", "rechiseled:andesite_dotted", "rechiseled:andesite_dotted_connecting", "rechiseled:andesite_paving",
		"rechiseled:andesite_paving_connecting", "minecraft:polished_andesite", "rechiseled:andesite_polished_connecting", "rechiseled:andesite_rotated_bricks",
		"rechiseled:andesite_rotated_bricks_connecting", "rechiseled:andesite_squares", "rechiseled:andesite_squares_connecting", "rechiseled:andesite_tiles",
		"rechiseled:andesite_tiles_connecting", "rechiseled:andesite_wavy", "rechiseled:andesite_wavy_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
