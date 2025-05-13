// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:acacia_planks"
	var block_ids = [
		"minecraft:acacia_planks", "rechiseled:acacia_planks_beams", "rechiseled:acacia_planks_beams_connecting", "rechiseled:acacia_planks_brick_pattern",
		"rechiseled:acacia_planks_brick_pattern_connecting", "rechiseled:acacia_planks_brick_paving", "rechiseled:acacia_planks_brick_paving_connecting", "rechiseled:acacia_planks_bricks",
		"rechiseled:acacia_planks_bricks_connecting", "rechiseled:acacia_planks_crate", "rechiseled:acacia_planks_crate_connecting", "rechiseled:acacia_planks_diagonal_stripes",
		"rechiseled:acacia_planks_diagonal_stripes_connecting", "rechiseled:acacia_planks_diagonal_tiles", "rechiseled:acacia_planks_diagonal_tiles_connecting", "rechiseled:acacia_planks_dotted",
		"rechiseled:acacia_planks_dotted_connecting", "rechiseled:acacia_planks_flooring", "rechiseled:acacia_planks_flooring_connecting", "rechiseled:acacia_planks_large_tiles",
		"rechiseled:acacia_planks_large_tiles_connecting", "rechiseled:acacia_planks_mosaic", "rechiseled:acacia_planks_pattern", "rechiseled:acacia_planks_pattern_connecting",
		"rechiseled:acacia_planks_rotated_bricks", "rechiseled:acacia_planks_rotated_bricks_connecting", "rechiseled:acacia_planks_small_bricks", "rechiseled:acacia_planks_small_bricks_connecting",
		"rechiseled:acacia_planks_small_tiles", "rechiseled:acacia_planks_small_tiles_connecting", "rechiseled:acacia_planks_squares", "rechiseled:acacia_planks_squares_connecting",
		"rechiseled:acacia_planks_tiles", "rechiseled:acacia_planks_tiles_connecting", "rechiseled:acacia_planks_wavy", "rechiseled:acacia_planks_wavy_connecting",
		"rechiseled:acacia_planks_woven", "rechiseled:acacia_planks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
