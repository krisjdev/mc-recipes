// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:dark_prismarine"
	var block_ids = [
		"minecraft:dark_prismarine", "rechiseled:dark_prismarine_beams", "rechiseled:dark_prismarine_beams_connecting", "rechiseled:dark_prismarine_brick_paving",
		"rechiseled:dark_prismarine_brick_paving_connecting", "rechiseled:dark_prismarine_bricks", "rechiseled:dark_prismarine_bricks_connecting", "rechiseled:dark_prismarine_dotted",
		"rechiseled:dark_prismarine_dotted_connecting", "rechiseled:dark_prismarine_fabric", "rechiseled:dark_prismarine_fabric_connecting", "rechiseled:dark_prismarine_large_tiles",
		"rechiseled:dark_prismarine_large_tiles_connecting", "rechiseled:dark_prismarine_rotated_bricks", "rechiseled:dark_prismarine_rotated_bricks_connecting", "rechiseled:dark_prismarine_rows",
		"rechiseled:dark_prismarine_rows_connecting", "rechiseled:dark_prismarine_squares", "rechiseled:dark_prismarine_squares_connecting", "rechiseled:dark_prismarine_tiles",
		"rechiseled:dark_prismarine_tiles_connecting", "rechiseled:dark_prismarine_wavy", "rechiseled:dark_prismarine_wavy_connecting", "rechiseled:dark_prismarine_woven",
		"rechiseled:dark_prismarine_woven_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
