// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:blue_stained_glass"
	var block_ids = [
		"chipped:circular_blue_stained_glass", "chipped:large_diamond_blue_stained_glass", "chipped:square_blue_stained_glass", "chipped:vertical_stiped_blue_stained_glass",
		"chipped:woven_blue_stained_glass", "chipped:arched_blue_stained_glass_pillar", "chipped:fancy_blue_stained_glass", "chipped:ornate_blue_stained_glass",
		"chipped:raster_blue_stained_glass", "chipped:small_blue_stained_glass", "chipped:tiled_blue_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
