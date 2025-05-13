// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:birch_planks"
	var block_ids = [
		"minecraft:birch_planks", "rechiseled:birch_planks_beams", "rechiseled:birch_planks_beams_connecting", "rechiseled:birch_planks_brick_pattern",
		"rechiseled:birch_planks_brick_pattern_connecting", "rechiseled:birch_planks_brick_paving", "rechiseled:birch_planks_brick_paving_connecting", "rechiseled:birch_planks_bricks",
		"rechiseled:birch_planks_bricks_connecting", "rechiseled:birch_planks_crate", "rechiseled:birch_planks_crate_connecting", "rechiseled:birch_planks_diagonal_stripes",
		"rechiseled:birch_planks_diagonal_stripes_connecting", "rechiseled:birch_planks_diagonal_tiles", "rechiseled:birch_planks_diagonal_tiles_connecting", "rechiseled:birch_planks_dotted",
		"rechiseled:birch_planks_dotted_connecting", "rechiseled:birch_planks_flooring", "rechiseled:birch_planks_flooring_connecting", "rechiseled:birch_planks_large_tiles",
		"rechiseled:birch_planks_large_tiles_connecting", "rechiseled:birch_planks_mosaic", "rechiseled:birch_planks_pattern", "rechiseled:birch_planks_pattern_connecting",
		"rechiseled:birch_planks_rotated_bricks", "rechiseled:birch_planks_rotated_bricks_connecting", "rechiseled:birch_planks_small_bricks", "rechiseled:birch_planks_small_bricks_connecting",
		"rechiseled:birch_planks_small_tiles", "rechiseled:birch_planks_small_tiles_connecting", "rechiseled:birch_planks_squares", "rechiseled:birch_planks_squares_connecting",
		"rechiseled:birch_planks_tiles", "rechiseled:birch_planks_tiles_connecting", "rechiseled:birch_planks_wavy", "rechiseled:birch_planks_wavy_connecting",
		"rechiseled:birch_planks_woven", "rechiseled:birch_planks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
