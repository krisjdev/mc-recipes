// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:magenta_stained_glass_pane"
	var block_ids = [
		"chipped:circular_magenta_stained_glass_pane", "chipped:large_diamond_magenta_stained_glass_pane", "chipped:square_magenta_stained_glass_pane", "chipped:vertical_stiped_magenta_stained_glass_pane",
		"chipped:woven_magenta_stained_glass_pane", "chipped:arched_magenta_stained_glass_pane_pillar", "chipped:fancy_magenta_stained_glass_pane", "chipped:ornate_magenta_stained_glass_pane",
		"chipped:raster_magenta_stained_glass_pane", "chipped:small_magenta_stained_glass_pane", "chipped:tiled_magenta_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
