// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:crimson_planks"
	var block_ids = [
		"minecraft:crimson_planks", "rechiseled:crimson_planks_beams", "rechiseled:crimson_planks_beams_connecting", "rechiseled:crimson_planks_brick_pattern",
		"rechiseled:crimson_planks_brick_pattern_connecting", "rechiseled:crimson_planks_brick_paving", "rechiseled:crimson_planks_brick_paving_connecting", "rechiseled:crimson_planks_bricks",
		"rechiseled:crimson_planks_bricks_connecting", "rechiseled:crimson_planks_crate", "rechiseled:crimson_planks_crate_connecting", "rechiseled:crimson_planks_diagonal_stripes",
		"rechiseled:crimson_planks_diagonal_stripes_connecting", "rechiseled:crimson_planks_diagonal_tiles", "rechiseled:crimson_planks_diagonal_tiles_connecting", "rechiseled:crimson_planks_dotted",
		"rechiseled:crimson_planks_dotted_connecting", "rechiseled:crimson_planks_flooring", "rechiseled:crimson_planks_flooring_connecting", "rechiseled:crimson_planks_large_tiles",
		"rechiseled:crimson_planks_large_tiles_connecting", "rechiseled:crimson_planks_mosaic", "rechiseled:crimson_planks_pattern", "rechiseled:crimson_planks_pattern_connecting",
		"rechiseled:crimson_planks_rotated_bricks", "rechiseled:crimson_planks_rotated_bricks_connecting", "rechiseled:crimson_planks_small_bricks", "rechiseled:crimson_planks_small_bricks_connecting",
		"rechiseled:crimson_planks_small_tiles", "rechiseled:crimson_planks_small_tiles_connecting", "rechiseled:crimson_planks_squares", "rechiseled:crimson_planks_squares_connecting",
		"rechiseled:crimson_planks_tiles", "rechiseled:crimson_planks_tiles_connecting", "rechiseled:crimson_planks_wavy", "rechiseled:crimson_planks_wavy_connecting",
		"rechiseled:crimson_planks_woven", "rechiseled:crimson_planks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
