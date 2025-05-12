// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cyan_stained_glass_pane"
	var block_ids = [
		"chipped:circular_cyan_stained_glass_pane", "chipped:large_diamond_cyan_stained_glass_pane", "chipped:square_cyan_stained_glass_pane", "chipped:vertical_stiped_cyan_stained_glass_pane",
		"chipped:woven_cyan_stained_glass_pane", "chipped:arched_cyan_stained_glass_pane_pillar", "chipped:fancy_cyan_stained_glass_pane", "chipped:ornate_cyan_stained_glass_pane",
		"chipped:raster_cyan_stained_glass_pane", "chipped:small_cyan_stained_glass_pane", "chipped:tiled_cyan_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
