// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:pink_stained_glass"
	var block_ids = [
		"chipped:circular_pink_stained_glass", "chipped:large_diamond_pink_stained_glass", "chipped:square_pink_stained_glass", "chipped:vertical_stiped_pink_stained_glass",
		"chipped:woven_pink_stained_glass", "chipped:arched_pink_stained_glass_pillar", "chipped:fancy_pink_stained_glass", "chipped:ornate_pink_stained_glass",
		"chipped:raster_pink_stained_glass", "chipped:small_pink_stained_glass", "chipped:tiled_pink_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
