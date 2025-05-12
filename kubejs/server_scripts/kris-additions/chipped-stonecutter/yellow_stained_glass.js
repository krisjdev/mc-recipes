// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:yellow_stained_glass"
	var block_ids = [
		"chipped:circular_yellow_stained_glass", "chipped:large_diamond_yellow_stained_glass", "chipped:square_yellow_stained_glass", "chipped:vertical_stiped_yellow_stained_glass",
		"chipped:woven_yellow_stained_glass", "chipped:arched_yellow_stained_glass_pillar", "chipped:fancy_yellow_stained_glass", "chipped:ornate_yellow_stained_glass",
		"chipped:raster_yellow_stained_glass", "chipped:small_yellow_stained_glass", "chipped:tiled_yellow_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
