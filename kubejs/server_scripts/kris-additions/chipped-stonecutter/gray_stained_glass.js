// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:gray_stained_glass"
	var block_ids = [
		"chipped:circular_gray_stained_glass", "chipped:large_diamond_gray_stained_glass", "chipped:square_gray_stained_glass", "chipped:vertical_stiped_gray_stained_glass",
		"chipped:woven_gray_stained_glass", "chipped:arched_gray_stained_glass_pillar", "chipped:fancy_gray_stained_glass", "chipped:ornate_gray_stained_glass",
		"chipped:raster_gray_stained_glass", "chipped:small_gray_stained_glass", "chipped:tiled_gray_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
