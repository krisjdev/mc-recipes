// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:coal_block"
	var block_ids = [
		"minecraft:coal_block", "rechiseled:coal_block_carved", "rechiseled:coal_block_carved_connecting", "rechiseled:coal_block_chiseled",
		"rechiseled:coal_block_chiseled_connecting", "rechiseled:coal_block_circles", "rechiseled:coal_block_circles_connecting", "rechiseled:coal_block_compacted",
		"rechiseled:coal_block_compacted_connecting", "rechiseled:coal_block_ovals", "rechiseled:coal_block_ovals_connecting", "rechiseled:coal_block_pattern",
		"rechiseled:coal_block_pattern_connecting", "rechiseled:coal_block_pillar", "rechiseled:coal_block_pillar_connecting", "rechiseled:coal_block_polished",
		"rechiseled:coal_block_rotated_bricks", "rechiseled:coal_block_rotated_bricks_connecting", "rechiseled:coal_block_small_tiles", "rechiseled:coal_block_small_tiles_connecting",
		"rechiseled:coal_block_stripes", "rechiseled:coal_block_stripes_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
