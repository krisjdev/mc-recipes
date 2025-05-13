// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:jungle_planks"
	var block_ids = [
		"minecraft:jungle_planks", "rechiseled:jungle_planks_beams", "rechiseled:jungle_planks_beams_connecting", "rechiseled:jungle_planks_brick_pattern",
		"rechiseled:jungle_planks_brick_pattern_connecting", "rechiseled:jungle_planks_brick_paving", "rechiseled:jungle_planks_brick_paving_connecting", "rechiseled:jungle_planks_bricks",
		"rechiseled:jungle_planks_bricks_connecting", "rechiseled:jungle_planks_crate", "rechiseled:jungle_planks_crate_connecting", "rechiseled:jungle_planks_diagonal_stripes",
		"rechiseled:jungle_planks_diagonal_stripes_connecting", "rechiseled:jungle_planks_diagonal_tiles", "rechiseled:jungle_planks_diagonal_tiles_connecting", "rechiseled:jungle_planks_dotted",
		"rechiseled:jungle_planks_dotted_connecting", "rechiseled:jungle_planks_flooring", "rechiseled:jungle_planks_flooring_connecting", "rechiseled:jungle_planks_large_tiles",
		"rechiseled:jungle_planks_large_tiles_connecting", "rechiseled:jungle_planks_mosaic", "rechiseled:jungle_planks_pattern", "rechiseled:jungle_planks_pattern_connecting",
		"rechiseled:jungle_planks_rotated_bricks", "rechiseled:jungle_planks_rotated_bricks_connecting", "rechiseled:jungle_planks_small_bricks", "rechiseled:jungle_planks_small_bricks_connecting",
		"rechiseled:jungle_planks_small_tiles", "rechiseled:jungle_planks_small_tiles_connecting", "rechiseled:jungle_planks_squares", "rechiseled:jungle_planks_squares_connecting",
		"rechiseled:jungle_planks_tiles", "rechiseled:jungle_planks_tiles_connecting", "rechiseled:jungle_planks_wavy", "rechiseled:jungle_planks_wavy_connecting",
		"rechiseled:jungle_planks_woven", "rechiseled:jungle_planks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
