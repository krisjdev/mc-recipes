// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:oak_door"
	var block_ids = [
		"chipped:barred_oak_door", "chipped:beach_oak_door", "chipped:boarded_oak_door", "chipped:dual_paneled_oak_door",
		"chipped:fortified_oak_door", "chipped:gated_oak_door", "chipped:glass_oak_door", "chipped:heavy_oak_door",
		"chipped:overgrown_oak_door", "chipped:paneled_oak_door", "chipped:paper_oak_door", "chipped:pressed_oak_door",
		"chipped:screen_oak_door", "chipped:secret_oak_door", "chipped:shack_oak_door", "chipped:sliding_oak_door",
		"chipped:supported_oak_door", "chipped:tile_windowed_oak_door", "chipped:tiled_oak_door", "chipped:windowed_oak_door",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
