// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:acacia_door"
	var block_ids = [
		"chipped:beach_acacia_door", "chipped:boarded_acacia_door", "chipped:dual_paneled_acacia_door", "chipped:fortified_acacia_door",
		"chipped:gated_acacia_door", "chipped:glass_acacia_door", "chipped:heavy_acacia_door", "chipped:overgrown_acacia_door",
		"chipped:paneled_acacia_door", "chipped:paper_acacia_door", "chipped:pressed_acacia_door", "chipped:screen_acacia_door",
		"chipped:secret_acacia_door", "chipped:shack_acacia_door", "chipped:sliding_acacia_door", "chipped:supported_acacia_door",
		"chipped:tile_windowed_acacia_door", "chipped:tiled_acacia_door", "chipped:windowed_acacia_door", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
