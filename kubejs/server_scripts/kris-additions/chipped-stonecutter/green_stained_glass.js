// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:green_stained_glass"
	var block_ids = [
		"chipped:circular_green_stained_glass", "chipped:large_diamond_green_stained_glass", "chipped:square_green_stained_glass", "chipped:vertical_stiped_green_stained_glass",
		"chipped:woven_green_stained_glass", "chipped:arched_green_stained_glass_pillar", "chipped:fancy_green_stained_glass", "chipped:ornate_green_stained_glass",
		"chipped:raster_green_stained_glass", "chipped:small_green_stained_glass", "chipped:tiled_green_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
