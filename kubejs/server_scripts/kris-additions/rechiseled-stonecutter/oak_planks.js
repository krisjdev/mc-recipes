// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:oak_planks"
	var block_ids = [
		"minecraft:oak_planks", "rechiseled:oak_planks_beams", "rechiseled:oak_planks_beams_connecting", "rechiseled:oak_planks_brick_pattern",
		"rechiseled:oak_planks_brick_pattern_connecting", "rechiseled:oak_planks_brick_paving", "rechiseled:oak_planks_brick_paving_connecting", "rechiseled:oak_planks_bricks",
		"rechiseled:oak_planks_bricks_connecting", "rechiseled:oak_planks_crate", "rechiseled:oak_planks_crate_connecting", "rechiseled:oak_planks_diagonal_stripes",
		"rechiseled:oak_planks_diagonal_stripes_connecting", "rechiseled:oak_planks_diagonal_tiles", "rechiseled:oak_planks_diagonal_tiles_connecting", "rechiseled:oak_planks_dotted",
		"rechiseled:oak_planks_dotted_connecting", "rechiseled:oak_planks_flooring", "rechiseled:oak_planks_flooring_connecting", "rechiseled:oak_planks_large_tiles",
		"rechiseled:oak_planks_large_tiles_connecting", "rechiseled:oak_planks_mosaic", "rechiseled:oak_planks_pattern", "rechiseled:oak_planks_pattern_connecting",
		"rechiseled:oak_planks_rotated_bricks", "rechiseled:oak_planks_rotated_bricks_connecting", "rechiseled:oak_planks_small_bricks", "rechiseled:oak_planks_small_bricks_connecting",
		"rechiseled:oak_planks_small_tiles", "rechiseled:oak_planks_small_tiles_connecting", "rechiseled:oak_planks_squares", "rechiseled:oak_planks_squares_connecting",
		"rechiseled:oak_planks_tiles", "rechiseled:oak_planks_tiles_connecting", "rechiseled:oak_planks_wavy", "rechiseled:oak_planks_wavy_connecting",
		"rechiseled:oak_planks_woven", "rechiseled:oak_planks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
