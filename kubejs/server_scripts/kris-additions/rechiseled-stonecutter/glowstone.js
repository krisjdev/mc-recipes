// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:glowstone"
	var block_ids = [
		"minecraft:glowstone", "rechiseled:glowstone_brick_pattern", "rechiseled:glowstone_brick_pattern_connecting", "rechiseled:glowstone_brick_paving",
		"rechiseled:glowstone_brick_paving_connecting", "rechiseled:glowstone_bricks", "rechiseled:glowstone_bricks_connecting", "rechiseled:glowstone_crushed",
		"rechiseled:glowstone_crushed_connecting", "rechiseled:glowstone_large_tiles", "rechiseled:glowstone_large_tiles_connecting", "rechiseled:glowstone_rotated_bricks",
		"rechiseled:glowstone_rotated_bricks_connecting", "rechiseled:glowstone_small_tiles", "rechiseled:glowstone_small_tiles_connecting", "rechiseled:glowstone_smooth",
		"rechiseled:glowstone_smooth_connecting", "rechiseled:glowstone_tiles", "rechiseled:glowstone_tiles_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
