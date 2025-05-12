// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:gray_stained_glass_pane"
	var block_ids = [
		"chipped:circular_gray_stained_glass_pane", "chipped:large_diamond_gray_stained_glass_pane", "chipped:square_gray_stained_glass_pane", "chipped:vertical_stiped_gray_stained_glass_pane",
		"chipped:woven_gray_stained_glass_pane", "chipped:arched_gray_stained_glass_pane_pillar", "chipped:fancy_gray_stained_glass_pane", "chipped:ornate_gray_stained_glass_pane",
		"chipped:raster_gray_stained_glass_pane", "chipped:small_gray_stained_glass_pane", "chipped:tiled_gray_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
