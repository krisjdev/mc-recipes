// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:red_stained_glass_pane"
	var block_ids = [
		"chipped:circular_red_stained_glass_pane", "chipped:large_diamond_red_stained_glass_pane", "chipped:square_red_stained_glass_pane", "chipped:vertical_stiped_red_stained_glass_pane",
		"chipped:woven_red_stained_glass_pane", "chipped:arched_red_stained_glass_pane_pillar", "chipped:fancy_red_stained_glass_pane", "chipped:ornate_red_stained_glass_pane",
		"chipped:raster_red_stained_glass_pane", "chipped:small_red_stained_glass_pane", "chipped:tiled_red_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
