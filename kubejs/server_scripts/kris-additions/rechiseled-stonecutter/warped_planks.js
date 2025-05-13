// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:warped_planks"
	var block_ids = [
		"minecraft:warped_planks", "rechiseled:warped_planks_beams", "rechiseled:warped_planks_beams_connecting", "rechiseled:warped_planks_brick_pattern",
		"rechiseled:warped_planks_brick_pattern_connecting", "rechiseled:warped_planks_brick_paving", "rechiseled:warped_planks_brick_paving_connecting", "rechiseled:warped_planks_bricks",
		"rechiseled:warped_planks_bricks_connecting", "rechiseled:warped_planks_crate", "rechiseled:warped_planks_crate_connecting", "rechiseled:warped_planks_diagonal_stripes",
		"rechiseled:warped_planks_diagonal_stripes_connecting", "rechiseled:warped_planks_diagonal_tiles", "rechiseled:warped_planks_diagonal_tiles_connecting", "rechiseled:warped_planks_dotted",
		"rechiseled:warped_planks_dotted_connecting", "rechiseled:warped_planks_flooring", "rechiseled:warped_planks_flooring_connecting", "rechiseled:warped_planks_large_tiles",
		"rechiseled:warped_planks_large_tiles_connecting", "rechiseled:warped_planks_mosaic", "rechiseled:warped_planks_pattern", "rechiseled:warped_planks_pattern_connecting",
		"rechiseled:warped_planks_rotated_bricks", "rechiseled:warped_planks_rotated_bricks_connecting", "rechiseled:warped_planks_small_bricks", "rechiseled:warped_planks_small_bricks_connecting",
		"rechiseled:warped_planks_small_tiles", "rechiseled:warped_planks_small_tiles_connecting", "rechiseled:warped_planks_squares", "rechiseled:warped_planks_squares_connecting",
		"rechiseled:warped_planks_tiles", "rechiseled:warped_planks_tiles_connecting", "rechiseled:warped_planks_wavy", "rechiseled:warped_planks_wavy_connecting",
		"rechiseled:warped_planks_woven", "rechiseled:warped_planks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
