// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cherry_door"
	var block_ids = [
		"chipped:barred_cherry_door", "chipped:beach_cherry_door", "chipped:boarded_cherry_door", "chipped:dual_paneled_cherry_door",
		"chipped:fortified_cherry_door", "chipped:gated_cherry_door", "chipped:glass_cherry_door", "chipped:heavy_cherry_door",
		"chipped:overgrown_cherry_door", "chipped:paneled_cherry_door", "chipped:paper_cherry_door", "chipped:pressed_cherry_door",
		"chipped:screen_cherry_door", "chipped:secret_cherry_door", "chipped:shack_cherry_door", "chipped:sliding_cherry_door",
		"chipped:supported_cherry_door", "chipped:tile_windowed_cherry_door", "chipped:tiled_cherry_door", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
