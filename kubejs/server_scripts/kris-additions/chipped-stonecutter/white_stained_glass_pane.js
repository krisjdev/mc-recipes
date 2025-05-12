// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:white_stained_glass_pane"
	var block_ids = [
		"chipped:circular_white_stained_glass_pane", "chipped:large_diamond_white_stained_glass_pane", "chipped:square_white_stained_glass_pane", "chipped:vertical_stiped_white_stained_glass_pane",
		"chipped:woven_white_stained_glass_pane", "chipped:arched_white_stained_glass_pane_pillar", "chipped:fancy_white_stained_glass_pane", "chipped:ornate_white_stained_glass_pane",
		"chipped:raster_white_stained_glass_pane", "chipped:small_white_stained_glass_pane", "chipped:tiled_white_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
