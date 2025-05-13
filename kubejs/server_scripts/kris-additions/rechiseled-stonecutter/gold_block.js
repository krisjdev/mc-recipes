// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:gold_block"
	var block_ids = [
		"minecraft:gold_block", "rechiseled:gold_block_beams", "rechiseled:gold_block_beams_connecting", "rechiseled:gold_block_bordered",
		"rechiseled:gold_block_bordered_connecting", "rechiseled:gold_block_lines", "rechiseled:gold_block_lines_connecting", "rechiseled:gold_block_pattern",
		"rechiseled:gold_block_pattern_connecting", "rechiseled:gold_block_polished", "rechiseled:gold_block_polished_connecting", "rechiseled:gold_block_scales",
		"rechiseled:gold_block_scales_connecting", "rechiseled:gold_block_small_bricks", "rechiseled:gold_block_small_bricks_connecting", "rechiseled:gold_block_small_tiles",
		"rechiseled:gold_block_small_tiles_connecting", "rechiseled:gold_block_striped", "rechiseled:gold_block_striped_connecting", "rechiseled:gold_block_smooth",
		"rechiseled:gold_block_tiles", "rechiseled:gold_block_tiles_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
