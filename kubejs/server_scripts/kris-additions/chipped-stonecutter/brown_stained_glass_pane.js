// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:brown_stained_glass_pane"
	var block_ids = [
		"chipped:circular_brown_stained_glass_pane", "chipped:large_diamond_brown_stained_glass_pane", "chipped:square_brown_stained_glass_pane", "chipped:vertical_stiped_brown_stained_glass_pane",
		"chipped:woven_brown_stained_glass_pane", "chipped:arched_brown_stained_glass_pane_pillar", "chipped:fancy_brown_stained_glass_pane", "chipped:ornate_brown_stained_glass_pane",
		"chipped:raster_brown_stained_glass_pane", "chipped:small_brown_stained_glass_pane", "chipped:tiled_brown_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
