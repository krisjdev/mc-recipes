// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:pink_stained_glass_pane"
	var block_ids = [
		"chipped:circular_pink_stained_glass_pane", "chipped:large_diamond_pink_stained_glass_pane", "chipped:square_pink_stained_glass_pane", "chipped:vertical_stiped_pink_stained_glass_pane",
		"chipped:woven_pink_stained_glass_pane", "chipped:arched_pink_stained_glass_pane_pillar", "chipped:fancy_pink_stained_glass_pane", "chipped:ornate_pink_stained_glass_pane",
		"chipped:raster_pink_stained_glass_pane", "chipped:small_pink_stained_glass_pane", "chipped:tiled_pink_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
