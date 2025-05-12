// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:red_stained_glass"
	var block_ids = [
		"chipped:circular_red_stained_glass", "chipped:large_diamond_red_stained_glass", "chipped:square_red_stained_glass", "chipped:vertical_stiped_red_stained_glass",
		"chipped:woven_red_stained_glass", "chipped:arched_red_stained_glass_pillar", "chipped:fancy_red_stained_glass", "chipped:ornate_red_stained_glass",
		"chipped:raster_red_stained_glass", "chipped:small_red_stained_glass", "chipped:tiled_red_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
