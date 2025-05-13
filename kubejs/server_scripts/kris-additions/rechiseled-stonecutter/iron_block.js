// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:iron_block"
	var block_ids = [
		"rechiseled:iron_block_bordered", "rechiseled:iron_block_bordered_connecting", "rechiseled:iron_block_chiseled", "rechiseled:iron_block_chiseled_connecting",
		"minecraft:iron_block", "rechiseled:iron_block_connecting_connecting", "rechiseled:iron_block_framed", "rechiseled:iron_block_framed_connecting",
		"rechiseled:iron_block_gears", "rechiseled:iron_block_gears_connecting", "rechiseled:iron_block_lines", "rechiseled:iron_block_lines_connecting",
		"rechiseled:iron_block_patterned", "rechiseled:iron_block_patterned_connecting", "rechiseled:iron_block_pipes", "rechiseled:iron_block_pipes_connecting",
		"rechiseled:iron_block_plated", "rechiseled:iron_block_polished", "rechiseled:iron_block_polished_connecting", "rechiseled:iron_block_processed",
		"rechiseled:iron_block_processed_connecting", "rechiseled:iron_block_pulverized", "rechiseled:iron_block_reinforced", "rechiseled:iron_block_sheets",
		"rechiseled:iron_block_small_bricks", "rechiseled:iron_block_small_bricks_connecting", "rechiseled:iron_block_smooth", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
