// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:dark_oak_planks"
	var block_ids = [
		"minecraft:dark_oak_planks", "rechiseled:dark_oak_planks_beams", "rechiseled:dark_oak_planks_beams_connecting", "rechiseled:dark_oak_planks_brick_pattern",
		"rechiseled:dark_oak_planks_brick_pattern_connecting", "rechiseled:dark_oak_planks_brick_paving", "rechiseled:dark_oak_planks_brick_paving_connecting", "rechiseled:dark_oak_planks_bricks",
		"rechiseled:dark_oak_planks_bricks_connecting", "rechiseled:dark_oak_planks_crate", "rechiseled:dark_oak_planks_crate_connecting", "rechiseled:dark_oak_planks_diagonal_stripes",
		"rechiseled:dark_oak_planks_diagonal_stripes_connecting", "rechiseled:dark_oak_planks_diagonal_tiles", "rechiseled:dark_oak_planks_diagonal_tiles_connecting", "rechiseled:dark_oak_planks_dotted",
		"rechiseled:dark_oak_planks_dotted_connecting", "rechiseled:dark_oak_planks_flooring", "rechiseled:dark_oak_planks_flooring_connecting", "rechiseled:dark_oak_planks_large_tiles",
		"rechiseled:dark_oak_planks_large_tiles_connecting", "rechiseled:dark_oak_planks_mosaic", "rechiseled:dark_oak_planks_pattern", "rechiseled:dark_oak_planks_pattern_connecting",
		"rechiseled:dark_oak_planks_rotated_bricks", "rechiseled:dark_oak_planks_rotated_bricks_connecting", "rechiseled:dark_oak_planks_small_bricks", "rechiseled:dark_oak_planks_small_bricks_connecting",
		"rechiseled:dark_oak_planks_small_tiles", "rechiseled:dark_oak_planks_small_tiles_connecting", "rechiseled:dark_oak_planks_squares", "rechiseled:dark_oak_planks_squares_connecting",
		"rechiseled:dark_oak_planks_tiles", "rechiseled:dark_oak_planks_tiles_connecting", "rechiseled:dark_oak_planks_wavy", "rechiseled:dark_oak_planks_wavy_connecting",
		"rechiseled:dark_oak_planks_woven", "rechiseled:dark_oak_planks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
