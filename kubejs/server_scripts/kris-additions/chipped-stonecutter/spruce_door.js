// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:spruce_door"
	var block_ids = [
		"chipped:barred_spruce_door", "chipped:beach_spruce_door", "chipped:dual_paneled_spruce_door", "chipped:fortified_spruce_door",
		"chipped:gated_spruce_door", "chipped:glass_spruce_door", "chipped:heavy_spruce_door", "chipped:overgrown_spruce_door",
		"chipped:paneled_spruce_door", "chipped:paper_spruce_door", "chipped:pressed_spruce_door", "chipped:screen_spruce_door",
		"chipped:secret_spruce_door", "chipped:shack_spruce_door", "chipped:sliding_spruce_door", "chipped:supported_spruce_door",
		"chipped:tile_windowed_spruce_door", "chipped:tiled_spruce_door", "chipped:windowed_spruce_door", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
