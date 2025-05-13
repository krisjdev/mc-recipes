// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:quartz_block"
	var block_ids = [
		"minecraft:quartz_bricks", "minecraft:quartz_pillar", "minecraft:chiseled_quartz_block", "minecraft:smooth_quartz",
		"rechiseled:quartz_block_bordered", "rechiseled:quartz_block_bordered_connecting", "rechiseled:quartz_block_brick_paving", "rechiseled:quartz_block_brick_paving_connecting",
		"rechiseled:quartz_block_chiseled_pillar", "rechiseled:quartz_block_chiseled_pillar_connecting", "rechiseled:quartz_block_chiseled_squares", "minecraft:quartz_block",
		"rechiseled:quartz_block_connecting_connecting", "rechiseled:quartz_block_crosses", "rechiseled:quartz_block_crosses_connecting", "rechiseled:quartz_block_diagonal_tiles",
		"rechiseled:quartz_block_diagonal_tiles_connecting", "rechiseled:quartz_block_pattern", "rechiseled:quartz_block_pattern_connecting", "rechiseled:quartz_block_rotated_bricks",
		"rechiseled:quartz_block_rotated_bricks_connecting", "rechiseled:quartz_block_rows", "rechiseled:quartz_block_rows_connecting", "rechiseled:quartz_block_scales",
		"rechiseled:quartz_block_scales_connecting", "rechiseled:quartz_block_small_tiles", "rechiseled:quartz_block_small_tiles_connecting", "rechiseled:quartz_block_squares",
		"rechiseled:quartz_block_squares_connecting", "rechiseled:quartz_block_stripes", "rechiseled:quartz_block_stripes_connecting", "rechiseled:quartz_block_tiles",
		"rechiseled:quartz_block_tiles_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
