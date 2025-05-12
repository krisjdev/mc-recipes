// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:purple_stained_glass_pane"
	var block_ids = [
		"chipped:circular_purple_stained_glass_pane", "chipped:large_diamond_purple_stained_glass_pane", "chipped:square_purple_stained_glass_pane", "chipped:vertical_stiped_purple_stained_glass_pane",
		"chipped:woven_purple_stained_glass_pane", "chipped:arched_purple_stained_glass_pane_pillar", "chipped:fancy_purple_stained_glass_pane", "chipped:ornate_purple_stained_glass_pane",
		"chipped:raster_purple_stained_glass_pane", "chipped:small_purple_stained_glass_pane", "chipped:tiled_purple_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
