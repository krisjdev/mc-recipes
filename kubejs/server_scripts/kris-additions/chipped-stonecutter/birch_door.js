// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:birch_door"
	var block_ids = [
		"chipped:barred_birch_door", "chipped:beach_birch_door", "chipped:boarded_birch_door", "chipped:dual_paneled_birch_door",
		"chipped:fortified_birch_door", "chipped:gated_birch_door", "chipped:glass_birch_door", "chipped:heavy_birch_door",
		"chipped:overgrown_birch_door", "chipped:paneled_birch_door", "chipped:pressed_birch_door", "chipped:screen_birch_door",
		"chipped:secret_birch_door", "chipped:shack_birch_door", "chipped:sliding_birch_door", "chipped:supported_birch_door",
		"chipped:tile_windowed_birch_door", "chipped:tiled_birch_door", "chipped:windowed_birch_door", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
