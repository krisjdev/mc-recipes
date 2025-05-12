// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:blue_stained_glass_pane"
	var block_ids = [
		"chipped:circular_blue_stained_glass_pane", "chipped:large_diamond_blue_stained_glass_pane", "chipped:square_blue_stained_glass_pane", "chipped:vertical_stiped_blue_stained_glass_pane",
		"chipped:woven_blue_stained_glass_pane", "chipped:arched_blue_stained_glass_pane_pillar", "chipped:fancy_blue_stained_glass_pane", "chipped:ornate_blue_stained_glass_pane",
		"chipped:raster_blue_stained_glass_pane", "chipped:small_blue_stained_glass_pane", "chipped:tiled_blue_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
