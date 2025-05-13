// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:cherry_planks"
	var block_ids = [
		"minecraft:cherry_planks", "rechiseled:cherry_planks_beams", "rechiseled:cherry_planks_beams_connecting", "rechiseled:cherry_planks_brick_pattern",
		"rechiseled:cherry_planks_brick_pattern_connecting", "rechiseled:cherry_planks_brick_paving", "rechiseled:cherry_planks_brick_paving_connecting", "rechiseled:cherry_planks_bricks",
		"rechiseled:cherry_planks_bricks_connecting", "rechiseled:cherry_planks_crate", "rechiseled:cherry_planks_crate_connecting", "rechiseled:cherry_planks_diagonal_stripes",
		"rechiseled:cherry_planks_diagonal_stripes_connecting", "rechiseled:cherry_planks_diagonal_tiles", "rechiseled:cherry_planks_diagonal_tiles_connecting", "rechiseled:cherry_planks_dotted",
		"rechiseled:cherry_planks_dotted_connecting", "rechiseled:cherry_planks_flooring", "rechiseled:cherry_planks_flooring_connecting", "rechiseled:cherry_planks_large_tiles",
		"rechiseled:cherry_planks_large_tiles_connecting", "rechiseled:cherry_planks_mosaic", "rechiseled:cherry_planks_pattern", "rechiseled:cherry_planks_pattern_connecting",
		"rechiseled:cherry_planks_rotated_bricks", "rechiseled:cherry_planks_rotated_bricks_connecting", "rechiseled:cherry_planks_small_bricks", "rechiseled:cherry_planks_small_bricks_connecting",
		"rechiseled:cherry_planks_small_tiles", "rechiseled:cherry_planks_small_tiles_connecting", "rechiseled:cherry_planks_squares", "rechiseled:cherry_planks_squares_connecting",
		"rechiseled:cherry_planks_tiles", "rechiseled:cherry_planks_tiles_connecting", "rechiseled:cherry_planks_wavy", "rechiseled:cherry_planks_wavy_connecting",
		"rechiseled:cherry_planks_woven", "rechiseled:cherry_planks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
