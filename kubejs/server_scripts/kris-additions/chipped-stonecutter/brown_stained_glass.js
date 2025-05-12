// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:brown_stained_glass"
	var block_ids = [
		"chipped:circular_brown_stained_glass", "chipped:large_diamond_brown_stained_glass", "chipped:square_brown_stained_glass", "chipped:vertical_stiped_brown_stained_glass",
		"chipped:woven_brown_stained_glass", "chipped:arched_brown_stained_glass_pillar", "chipped:fancy_brown_stained_glass", "chipped:ornate_brown_stained_glass",
		"chipped:raster_brown_stained_glass", "chipped:small_brown_stained_glass", "chipped:tiled_brown_stained_glass", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
