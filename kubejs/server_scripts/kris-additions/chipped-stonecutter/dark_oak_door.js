// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:dark_oak_door"
	var block_ids = [
		"chipped:barred_dark_oak_door", "chipped:beach_dark_oak_door", "chipped:boarded_dark_oak_door", "chipped:dual_paneled_dark_oak_door",
		"chipped:fortified_dark_oak_door", "chipped:gated_dark_oak_door", "chipped:glass_dark_oak_door", "chipped:heavy_dark_oak_door",
		"chipped:overgrown_dark_oak_door", "chipped:paper_dark_oak_door", "chipped:pressed_dark_oak_door", "chipped:screen_dark_oak_door",
		"chipped:secret_dark_oak_door", "chipped:shack_dark_oak_door", "chipped:sliding_dark_oak_door", "chipped:supported_dark_oak_door",
		"chipped:tile_windowed_dark_oak_door", "chipped:tiled_dark_oak_door", "chipped:windowed_dark_oak_door", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
