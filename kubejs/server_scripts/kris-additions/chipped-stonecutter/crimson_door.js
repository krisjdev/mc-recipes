// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:crimson_door"
	var block_ids = [
		"chipped:barred_crimson_door", "chipped:beach_crimson_door", "chipped:boarded_crimson_door", "chipped:dual_paneled_crimson_door",
		"chipped:fortified_crimson_door", "chipped:gated_crimson_door", "chipped:glass_crimson_door", "chipped:heavy_crimson_door",
		"chipped:overgrown_crimson_door", "chipped:paneled_crimson_door", "chipped:paper_crimson_door", "chipped:pressed_crimson_door",
		"chipped:screen_crimson_door", "chipped:secret_crimson_door", "chipped:shack_crimson_door", "chipped:sliding_crimson_door",
		"chipped:tile_windowed_crimson_door", "chipped:tiled_crimson_door", "chipped:windowed_crimson_door", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
