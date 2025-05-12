// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cyan_stained_glass"
	var block_ids = [
		"chipped:circular_cyan_stained_glass", "chipped:large_diamond_cyan_stained_glass", "chipped:square_cyan_stained_glass", "chipped:vertical_stiped_cyan_stained_glass",
		"chipped:woven_cyan_stained_glass", "chipped:arched_cyan_stained_glass_pillar", "chipped:fancy_cyan_stained_glass", "chipped:ornate_cyan_stained_glass",
		"chipped:raster_cyan_stained_glass", "chipped:small_cyan_stained_glass", "chipped:tiled_cyan_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
