// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:white_stained_glass"
	var block_ids = [
		"chipped:circular_white_stained_glass", "chipped:large_diamond_white_stained_glass", "chipped:square_white_stained_glass", "chipped:vertical_stiped_white_stained_glass",
		"chipped:woven_white_stained_glass", "chipped:arched_white_stained_glass_pillar", "chipped:fancy_white_stained_glass", "chipped:ornate_white_stained_glass",
		"chipped:raster_white_stained_glass", "chipped:small_white_stained_glass", "chipped:tiled_white_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
