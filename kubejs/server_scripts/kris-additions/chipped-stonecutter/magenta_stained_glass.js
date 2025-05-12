// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:magenta_stained_glass"
	var block_ids = [
		"chipped:circular_magenta_stained_glass", "chipped:large_diamond_magenta_stained_glass", "chipped:square_magenta_stained_glass", "chipped:vertical_stiped_magenta_stained_glass",
		"chipped:woven_magenta_stained_glass", "chipped:arched_magenta_stained_glass_pillar", "chipped:fancy_magenta_stained_glass", "chipped:ornate_magenta_stained_glass",
		"chipped:raster_magenta_stained_glass", "chipped:small_magenta_stained_glass", "chipped:tiled_magenta_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
