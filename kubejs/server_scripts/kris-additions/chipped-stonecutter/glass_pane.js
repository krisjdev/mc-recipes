// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:glass_pane"
	var block_ids = [
		"chipped:circle_oak_glass_pane", "chipped:fancy_leaded_glass_pane", "chipped:large_diamond_leaded_glass_pane", "chipped:lead_woven_glass_pane",
		"chipped:oak_snowflake_glass_pane", "chipped:square_leaded_glass_pane", "chipped:vertical_leaded_glass_pane", "chipped:arched_leaded_glass_pane_pillar",
		"chipped:clear_leaded_glass_pane", "chipped:oak_bared_glass_pane", "chipped:oak_bordered_glass_pane", "chipped:oak_diamond_bordered_glass_pane",
		"chipped:oak_horizontal_lined_glass_pane", "chipped:oak_large_diamond_glass_pane", "chipped:oak_line_bared_glass_pane", "chipped:oak_ornate_bared_glass_pane",
		"chipped:oak_woven_glass_pane", "chipped:ornate_leaded_glass_pane", "chipped:raster_leaded_glass_pane", "chipped:small_diamond_leaded_glass_pane",
		"chipped:square_oak_glass_pane", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
