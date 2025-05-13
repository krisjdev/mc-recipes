// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:netherrack"
	var block_ids = [
		"minecraft:netherrack", "rechiseled:netherrack_beams", "rechiseled:netherrack_beams_connecting", "rechiseled:netherrack_brick_pattern",
		"rechiseled:netherrack_brick_pattern_connecting", "rechiseled:netherrack_brick_paving", "rechiseled:netherrack_brick_paving_connecting", "rechiseled:netherrack_bricks",
		"rechiseled:netherrack_bricks_connecting", "rechiseled:netherrack_dented", "rechiseled:netherrack_dented_connecting", "rechiseled:netherrack_rotated_bricks",
		"rechiseled:netherrack_rotated_bricks_connecting", "rechiseled:netherrack_small_tiles", "rechiseled:netherrack_small_tiles_connecting", "rechiseled:netherrack_stripes",
		"rechiseled:netherrack_stripes_connecting", "rechiseled:netherrack_tiles", "rechiseled:netherrack_tiles_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
