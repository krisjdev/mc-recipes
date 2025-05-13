// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:bamboo_planks"
	var block_ids = [
		"minecraft:bamboo_planks", "minecraft:bamboo_mosaic", "rechiseled:bamboo_planks_beams", "rechiseled:bamboo_planks_beams_connecting",
		"rechiseled:bamboo_planks_brick_pattern", "rechiseled:bamboo_planks_brick_pattern_connecting", "rechiseled:bamboo_planks_brick_paving", "rechiseled:bamboo_planks_brick_paving_connecting",
		"rechiseled:bamboo_planks_bricks", "rechiseled:bamboo_planks_bricks_connecting", "rechiseled:bamboo_planks_crate", "rechiseled:bamboo_planks_crate_connecting",
		"rechiseled:bamboo_planks_diagonal_stripes", "rechiseled:bamboo_planks_diagonal_stripes_connecting", "rechiseled:bamboo_planks_diagonal_tiles", "rechiseled:bamboo_planks_diagonal_tiles_connecting",
		"rechiseled:bamboo_planks_dotted", "rechiseled:bamboo_planks_dotted_connecting", "rechiseled:bamboo_planks_flooring", "rechiseled:bamboo_planks_flooring_connecting",
		"rechiseled:bamboo_planks_large_tiles", "rechiseled:bamboo_planks_large_tiles_connecting", "rechiseled:bamboo_planks_pattern", "rechiseled:bamboo_planks_pattern_connecting",
		"rechiseled:bamboo_planks_rotated_bricks", "rechiseled:bamboo_planks_rotated_bricks_connecting", "rechiseled:bamboo_planks_small_bricks", "rechiseled:bamboo_planks_small_bricks_connecting",
		"rechiseled:bamboo_planks_small_tiles", "rechiseled:bamboo_planks_small_tiles_connecting", "rechiseled:bamboo_planks_squares", "rechiseled:bamboo_planks_squares_connecting",
		"rechiseled:bamboo_planks_tiles", "rechiseled:bamboo_planks_tiles_connecting", "rechiseled:bamboo_planks_wavy", "rechiseled:bamboo_planks_wavy_connecting",
		"rechiseled:bamboo_planks_woven", "rechiseled:bamboo_planks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
