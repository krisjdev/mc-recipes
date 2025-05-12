// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:orange_stained_glass"
	var block_ids = [
		"chipped:circular_orange_stained_glass", "chipped:large_diamond_orange_stained_glass", "chipped:square_orange_stained_glass", "chipped:vertical_stiped_orange_stained_glass",
		"chipped:woven_orange_stained_glass", "chipped:arched_orange_stained_glass_pillar", "chipped:fancy_orange_stained_glass", "chipped:ornate_orange_stained_glass",
		"chipped:raster_orange_stained_glass", "chipped:small_orange_stained_glass", "chipped:tiled_orange_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
