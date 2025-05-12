// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:warped_door"
	var block_ids = [
		"chipped:barred_warped_door", "chipped:beach_warped_door", "chipped:boarded_warped_door", "chipped:dual_paneled_warped_door",
		"chipped:fortified_warped_door", "chipped:gated_warped_door", "chipped:glass_warped_door", "chipped:heavy_warped_door",
		"chipped:paneled_warped_door", "chipped:paper_warped_door", "chipped:pressed_warped_door", "chipped:screen_warped_door",
		"chipped:secret_warped_door", "chipped:shack_warped_door", "chipped:supported_warped_door", "chipped:tile_windowed_warped_door",
		"chipped:tiled_warped_door", "chipped:windowed_warped_door", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
