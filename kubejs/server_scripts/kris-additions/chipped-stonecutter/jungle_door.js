// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:jungle_door"
	var block_ids = [
		"chipped:barred_jungle_door", "chipped:boarded_jungle_door", "chipped:dual_paneled_jungle_door", "chipped:fortified_jungle_door",
		"chipped:gated_jungle_door", "chipped:glass_jungle_door", "chipped:heavy_jungle_door", "chipped:overgrown_jungle_door",
		"chipped:paneled_jungle_door", "chipped:paper_jungle_door", "chipped:pressed_jungle_door", "chipped:screen_jungle_door",
		"chipped:secret_jungle_door", "chipped:shack_jungle_door", "chipped:sliding_jungle_door", "chipped:supported_jungle_door",
		"chipped:tile_windowed_jungle_door", "chipped:tiled_jungle_door", "chipped:windowed_jungle_door", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
