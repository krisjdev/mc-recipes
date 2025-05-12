// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:mangrove_door"
	var block_ids = [
		"chipped:barred_mangrove_door", "chipped:beach_mangrove_door", "chipped:boarded_mangrove_door", "chipped:dual_paneled_mangrove_door",
		"chipped:fortified_mangrove_door", "chipped:gated_mangrove_door", "chipped:glass_mangrove_door", "chipped:heavy_mangrove_door",
		"chipped:overgrown_mangrove_door", "chipped:paneled_mangrove_door", "chipped:paper_mangrove_door", "chipped:pressed_mangrove_door",
		"chipped:secret_mangrove_door", "chipped:sliding_mangrove_door", "chipped:supported_mangrove_door", "chipped:tile_windowed_mangrove_door",
		"chipped:windowed_mangrove_door", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
