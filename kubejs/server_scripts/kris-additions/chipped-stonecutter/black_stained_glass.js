// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:black_stained_glass"
	var block_ids = [
		"chipped:circular_black_stained_glass", "chipped:large_diamond_black_stained_glass", "chipped:square_black_stained_glass", "chipped:vertical_stiped_black_stained_glass",
		"chipped:woven_black_stained_glass", "chipped:arched_black_stained_glass_pillar", "chipped:fancy_black_stained_glass", "chipped:ornate_black_stained_glass",
		"chipped:raster_black_stained_glass", "chipped:small_black_stained_glass", "chipped:tiled_black_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
