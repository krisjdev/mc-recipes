// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:bamboo_door"
	var block_ids = [
		"chipped:barred_bamboo_door", "chipped:beach_bamboo_door", "chipped:boarded_bamboo_door", "chipped:dual_paneled_bamboo_door",
		"chipped:fortified_bamboo_door", "chipped:gated_bamboo_door", "chipped:glass_bamboo_door", "chipped:heavy_bamboo_door",
		"chipped:overgrown_bamboo_door", "chipped:paneled_bamboo_door", "chipped:paper_bamboo_door", "chipped:pressed_bamboo_door",
		"chipped:screen_bamboo_door", "chipped:secret_bamboo_door", "chipped:shack_bamboo_door", "chipped:sliding_bamboo_door",
		"chipped:supported_bamboo_door", "chipped:tile_windowed_bamboo_door", "chipped:tiled_bamboo_door", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
