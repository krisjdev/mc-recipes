// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:prismarine_bricks"
	var block_ids = [
		"minecraft:prismarine_bricks", "rechiseled:prismarine_bricks_beams", "rechiseled:prismarine_bricks_beams_connecting", "rechiseled:prismarine_bricks_brick_pattern",
		"rechiseled:prismarine_bricks_brick_pattern_connecting", "rechiseled:prismarine_bricks_brick_paving", "rechiseled:prismarine_bricks_brick_paving_connecting", "rechiseled:prismarine_bricks_bricks",
		"rechiseled:prismarine_bricks_bricks_connecting", "rechiseled:prismarine_bricks_chiseled_circles", "rechiseled:prismarine_bricks_chiseled_circles_connecting", "rechiseled:prismarine_bricks_chiseled_squares",
		"rechiseled:prismarine_bricks_chiseled_squares_connecting", "rechiseled:prismarine_bricks_diagonal_bricks", "rechiseled:prismarine_bricks_diagonal_bricks_connecting", "rechiseled:prismarine_bricks_diagonal_tiles",
		"rechiseled:prismarine_bricks_diagonal_tiles_connecting", "rechiseled:prismarine_bricks_dotted", "rechiseled:prismarine_bricks_dotted_connecting", "rechiseled:prismarine_bricks_pillars",
		"rechiseled:prismarine_bricks_pillars_connecting", "rechiseled:prismarine_bricks_polished", "rechiseled:prismarine_bricks_polished_connecting", "rechiseled:prismarine_bricks_rotated_bricks",
		"rechiseled:prismarine_bricks_rotated_bricks_connecting", "rechiseled:prismarine_bricks_rows", "rechiseled:prismarine_bricks_rows_connecting", "rechiseled:prismarine_bricks_small_tiles",
		"rechiseled:prismarine_bricks_small_tiles_connecting", "rechiseled:prismarine_bricks_squares", "rechiseled:prismarine_bricks_squares_connecting", "rechiseled:prismarine_bricks_tiles",
		"rechiseled:prismarine_bricks_tiles_connecting", "rechiseled:prismarine_bricks_wavy", "rechiseled:prismarine_bricks_wavy_connecting", "rechiseled:prismarine_bricks_woven",
		"rechiseled:prismarine_bricks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
