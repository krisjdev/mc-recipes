// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:obsidian"
	var block_ids = [
		"minecraft:obsidian", "rechiseled:obsidian_bordered", "rechiseled:obsidian_bordered_connecting", "rechiseled:obsidian_brick_pattern",
		"rechiseled:obsidian_brick_pattern_connecting", "rechiseled:obsidian_brick_paving", "rechiseled:obsidian_brick_paving_connecting", "rechiseled:obsidian_bricks",
		"rechiseled:obsidian_bricks_connecting", "rechiseled:obsidian_chiseled", "rechiseled:obsidian_chiseled_connecting", "rechiseled:obsidian_chiseled_circles",
		"rechiseled:obsidian_chiseled_circles_connecting", "rechiseled:obsidian_chiseled_creeper", "rechiseled:obsidian_chiseled_skeleton", "rechiseled:obsidian_dark",
		"rechiseled:obsidian_dark_connecting", "rechiseled:obsidian_large_tiles", "rechiseled:obsidian_pillars", "rechiseled:obsidian_pillars_connecting",
		"rechiseled:obsidian_rotated_bricks", "rechiseled:obsidian_rotated_bricks_connecting", "rechiseled:obsidian_spots", "rechiseled:obsidian_spots_connecting",
		"rechiseled:obsidian_squares", "rechiseled:obsidian_squares_connecting", "rechiseled:obsidian_stripes", "rechiseled:obsidian_stripes_connecting",
		"rechiseled:obsidian_tiles", "rechiseled:obsidian_tiles_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
