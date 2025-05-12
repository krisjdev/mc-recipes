// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:orange_stained_glass_pane"
	var block_ids = [
		"chipped:circular_orange_stained_glass_pane", "chipped:large_diamond_orange_stained_glass_pane", "chipped:square_orange_stained_glass_pane", "chipped:vertical_stiped_orange_stained_glass_pane",
		"chipped:woven_orange_stained_glass_pane", "chipped:arched_orange_stained_glass_pane_pillar", "chipped:fancy_orange_stained_glass_pane", "chipped:ornate_orange_stained_glass_pane",
		"chipped:raster_orange_stained_glass_pane", "chipped:small_orange_stained_glass_pane", "chipped:tiled_orange_stained_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
