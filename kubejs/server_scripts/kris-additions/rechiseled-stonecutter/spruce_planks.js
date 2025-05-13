// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:spruce_planks"
	var block_ids = [
		"minecraft:spruce_planks", "rechiseled:spruce_planks_beams", "rechiseled:spruce_planks_beams_connecting", "rechiseled:spruce_planks_brick_pattern",
		"rechiseled:spruce_planks_brick_pattern_connecting", "rechiseled:spruce_planks_brick_paving", "rechiseled:spruce_planks_brick_paving_connecting", "rechiseled:spruce_planks_bricks",
		"rechiseled:spruce_planks_bricks_connecting", "rechiseled:spruce_planks_crate", "rechiseled:spruce_planks_crate_connecting", "rechiseled:spruce_planks_diagonal_stripes",
		"rechiseled:spruce_planks_diagonal_stripes_connecting", "rechiseled:spruce_planks_diagonal_tiles", "rechiseled:spruce_planks_diagonal_tiles_connecting", "rechiseled:spruce_planks_dotted",
		"rechiseled:spruce_planks_dotted_connecting", "rechiseled:spruce_planks_flooring", "rechiseled:spruce_planks_flooring_connecting", "rechiseled:spruce_planks_large_tiles",
		"rechiseled:spruce_planks_large_tiles_connecting", "rechiseled:spruce_planks_mosaic", "rechiseled:spruce_planks_pattern", "rechiseled:spruce_planks_pattern_connecting",
		"rechiseled:spruce_planks_rotated_bricks", "rechiseled:spruce_planks_rotated_bricks_connecting", "rechiseled:spruce_planks_small_bricks", "rechiseled:spruce_planks_small_bricks_connecting",
		"rechiseled:spruce_planks_small_tiles", "rechiseled:spruce_planks_small_tiles_connecting", "rechiseled:spruce_planks_squares", "rechiseled:spruce_planks_squares_connecting",
		"rechiseled:spruce_planks_tiles", "rechiseled:spruce_planks_tiles_connecting", "rechiseled:spruce_planks_wavy", "rechiseled:spruce_planks_wavy_connecting",
		"rechiseled:spruce_planks_woven", "rechiseled:spruce_planks_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
