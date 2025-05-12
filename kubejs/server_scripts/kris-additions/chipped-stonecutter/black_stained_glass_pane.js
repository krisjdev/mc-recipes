// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:black_stained_glass_pane"
	var block_ids = [
		"chipped:circular_black_stained_glass_pane", "chipped:large_diamond_black_stained_glass_pane", "chipped:square_black_stained_glass_pane", "chipped:vertical_stiped_black_stained_glass_pane",
		"chipped:woven_black_stained_glass_pane", "chipped:arched_black_stained_glass_pane_pillar", "chipped:fancy_black_stained_glass_pane", "chipped:ornate_black_stained_glass_pane",
		"chipped:raster_black_stained_glass_pane", "chipped:small_black_stained_glass_pane", "chipped:tiled_black_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
