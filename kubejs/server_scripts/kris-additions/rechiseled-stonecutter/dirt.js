// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:dirt"
	var block_ids = [
		"minecraft:dirt", "rechiseled:dirt_blobs", "rechiseled:dirt_blobs_connecting", "rechiseled:dirt_bricks",
		"rechiseled:dirt_bricks_connecting", "rechiseled:dirt_chunks", "rechiseled:dirt_chunks_connecting", "rechiseled:dirt_clumps",
		"rechiseled:dirt_clumps_connecting", "rechiseled:dirt_cobbled", "rechiseled:dirt_grooves", "rechiseled:dirt_large_tiles",
		"rechiseled:dirt_large_tiles_connecting", "rechiseled:dirt_muddy", "rechiseled:dirt_small_bricks", "rechiseled:dirt_small_bricks_connecting",
		"rechiseled:dirt_small_tiles", "rechiseled:dirt_small_tiles_connecting", "rechiseled:dirt_smooth_clumps", "rechiseled:dirt_smooth_clumps_connecting",
		"rechiseled:dirt_soil", "rechiseled:dirt_soil_connecting", "rechiseled:dirt_squares", "rechiseled:dirt_squares_connecting",
		"rechiseled:dirt_tiles", "rechiseled:dirt_tiles_connecting", "rechiseled:dirt_tilled", "rechiseled:dirt_tilled_connecting",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
