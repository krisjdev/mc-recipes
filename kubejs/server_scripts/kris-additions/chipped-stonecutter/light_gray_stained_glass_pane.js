// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:light_gray_stained_glass_pane"
	var block_ids = [
		"chipped:circular_light_gray_stained_glass_pane", "chipped:large_diamond_light_gray_stained_glass_pane", "chipped:square_light_gray_stained_glass_pane", "chipped:vertical_stiped_light_gray_stained_glass_pane",
		"chipped:woven_light_gray_stained_glass_pane", "chipped:arched_light_gray_stained_glass_pane_pillar", "chipped:fancy_light_gray_stained_glass_pane", "chipped:ornate_light_gray_stained_glass_pane",
		"chipped:raster_light_gray_stained_glass_pane", "chipped:small_light_gray_stained_glass_pane", "chipped:tiled_light_gray_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
