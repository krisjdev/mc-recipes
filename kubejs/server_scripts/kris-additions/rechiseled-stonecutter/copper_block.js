// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:copper_block"
	var block_ids = [
		"minecraft:copper_block", "rechiseled:copper_block_bars", "rechiseled:copper_block_bars_connecting", "rechiseled:copper_block_circles",
		"rechiseled:copper_block_circles_connecting", "rechiseled:copper_block_cone", "rechiseled:copper_block_gears", "rechiseled:copper_block_gears_connecting",
		"rechiseled:copper_block_lines", "rechiseled:copper_block_lines_connecting", "rechiseled:copper_block_pattern", "rechiseled:copper_block_pattern_connecting",
		"rechiseled:copper_block_pillar", "rechiseled:copper_block_pillar_connecting", "rechiseled:copper_block_polished", "rechiseled:copper_block_polished_connecting",
		"rechiseled:copper_block_shafts", "rechiseled:copper_block_shafts_connecting", "rechiseled:copper_block_small_bricks", "rechiseled:copper_block_small_bricks_connecting",
		"rechiseled:copper_block_smooth", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
