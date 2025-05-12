// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:lime_stained_glass_pane"
	var block_ids = [
		"chipped:circular_lime_stained_glass_pane", "chipped:large_diamond_lime_stained_glass_pane", "chipped:square_lime_stained_glass_pane", "chipped:vertical_stiped_lime_stained_glass_pane",
		"chipped:woven_lime_stained_glass_pane", "chipped:arched_lime_stained_glass_pane_pillar", "chipped:fancy_lime_stained_glass_pane", "chipped:ornate_lime_stained_glass_pane",
		"chipped:raster_lime_stained_glass_pane", "chipped:small_lime_stained_glass_pane", "chipped:tiled_lime_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
