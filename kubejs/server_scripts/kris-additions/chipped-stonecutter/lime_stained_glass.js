// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:lime_stained_glass"
	var block_ids = [
		"chipped:circular_lime_stained_glass", "chipped:large_diamond_lime_stained_glass", "chipped:square_lime_stained_glass", "chipped:vertical_stiped_lime_stained_glass",
		"chipped:woven_lime_stained_glass", "chipped:arched_lime_stained_glass_pillar", "chipped:fancy_lime_stained_glass", "chipped:ornate_lime_stained_glass",
		"chipped:raster_lime_stained_glass", "chipped:small_lime_stained_glass", "chipped:tiled_lime_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
