// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:light_blue_stained_glass"
	var block_ids = [
		"chipped:circular_light_blue_stained_glass", "chipped:large_diamond_light_blue_stained_glass", "chipped:square_light_blue_stained_glass", "chipped:vertical_stiped_light_blue_stained_glass",
		"chipped:woven_light_blue_stained_glass", "chipped:arched_light_blue_stained_glass_pillar", "chipped:fancy_light_blue_stained_glass", "chipped:ornate_light_blue_stained_glass",
		"chipped:raster_light_blue_stained_glass", "chipped:small_light_blue_stained_glass", "chipped:tiled_light_blue_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
