// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:yellow_stained_glass_pane"
	var block_ids = [
		"chipped:circular_yellow_stained_glass_pane", "chipped:large_diamond_yellow_stained_glass_pane", "chipped:square_yellow_stained_glass_pane", "chipped:vertical_stiped_yellow_stained_glass_pane",
		"chipped:woven_yellow_stained_glass_pane", "chipped:arched_yellow_stained_glass_pane_pillar", "chipped:fancy_yellow_stained_glass_pane", "chipped:ornate_yellow_stained_glass_pane",
		"chipped:raster_yellow_stained_glass_pane", "chipped:small_yellow_stained_glass_pane", "chipped:tiled_yellow_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
