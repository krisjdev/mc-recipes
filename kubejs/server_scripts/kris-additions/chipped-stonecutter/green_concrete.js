// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:green_concrete"
	var block_ids = [
		"chipped:green_concrete_bricks", "chipped:green_concrete_tiles", "chipped:creeper_green_concrete", "chipped:grid_green_concrete",
		"chipped:mosaic_green_concrete", "chipped:stacked_green_concrete", "chipped:stop_green_concrete", "chipped:grill_green_concrete",
		"chipped:green_concrete_panel", "chipped:pegged_green_concrete", "chipped:smooth_green_concrete", "chipped:striped_green_concrete",
		"chipped:wired_green_concrete", "chipped:green_concrete_pillar", "chipped:bolted_green_concrete", "chipped:hazard_green_concrete",
		"chipped:railed_green_concrete", "chipped:reinforced_green_concrete", "chipped:rusted_green_concrete", "chipped:warning_green_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
