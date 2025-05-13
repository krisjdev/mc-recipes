// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:mangrove_planks"
	var block_ids = [
		"minecraft:mangrove_planks", "rechiseled:mangrove_planks_beams", "rechiseled:mangrove_planks_beams_connecting", "rechiseled:mangrove_planks_brick_pattern",
		"rechiseled:mangrove_planks_brick_pattern_connecting", "rechiseled:mangrove_planks_brick_paving", "rechiseled:mangrove_planks_brick_paving_connecting", "rechiseled:mangrove_planks_bricks",
		"rechiseled:mangrove_planks_bricks_connecting", "rechiseled:mangrove_planks_crate", "rechiseled:mangrove_planks_crate_connecting", "rechiseled:mangrove_planks_diagonal_stripes",
		"rechiseled:mangrove_planks_diagonal_stripes_connecting", "rechiseled:mangrove_planks_diagonal_tiles", "rechiseled:mangrove_planks_diagonal_tiles_connecting", "rechiseled:mangrove_planks_dotted",
		"rechiseled:mangrove_planks_dotted_connecting", "rechiseled:mangrove_planks_flooring", "rechiseled:mangrove_planks_flooring_connecting", "rechiseled:mangrove_planks_large_tiles",
		"rechiseled:mangrove_planks_large_tiles_connecting", "rechiseled:mangrove_planks_mosaic", "rechiseled:mangrove_planks_pattern", "rechiseled:mangrove_planks_pattern_connecting",
		"rechiseled:mangrove_planks_rotated_bricks", "rechiseled:mangrove_planks_rotated_bricks_connecting", "rechiseled:mangrove_planks_small_bricks", "rechiseled:mangrove_planks_small_bricks_connecting",
		"rechiseled:mangrove_planks_small_tiles", "rechiseled:mangrove_planks_small_tiles_connecting", "rechiseled:mangrove_planks_squares", "rechiseled:mangrove_planks_squares_connecting",
		"rechiseled:mangrove_planks_tiles", "rechiseled:mangrove_planks_tiles_connecting", "rechiseled:mangrove_planks_wavy", "rechiseled:mangrove_planks_wavy_connecting",
		"rechiseled:mangrove_planks_woven", "rechiseled:mangrove_planks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
