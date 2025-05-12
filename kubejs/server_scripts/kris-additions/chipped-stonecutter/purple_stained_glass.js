// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:purple_stained_glass"
	var block_ids = [
		"chipped:circular_purple_stained_glass", "chipped:large_diamond_purple_stained_glass", "chipped:square_purple_stained_glass", "chipped:vertical_stiped_purple_stained_glass",
		"chipped:woven_purple_stained_glass", "chipped:arched_purple_stained_glass_pillar", "chipped:fancy_purple_stained_glass", "chipped:ornate_purple_stained_glass",
		"chipped:raster_purple_stained_glass", "chipped:small_purple_stained_glass", "chipped:tiled_purple_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
