// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:red_concrete"
	var block_ids = [
		"chipped:red_concrete_bricks", "chipped:red_concrete_tiles", "chipped:creeper_red_concrete", "chipped:grid_red_concrete",
		"chipped:mosaic_red_concrete", "chipped:stacked_red_concrete", "chipped:stop_red_concrete", "chipped:grill_red_concrete",
		"chipped:red_concrete_panel", "chipped:pegged_red_concrete", "chipped:smooth_red_concrete", "chipped:striped_red_concrete",
		"chipped:wired_red_concrete", "chipped:red_concrete_pillar", "chipped:bolted_red_concrete", "chipped:hazard_red_concrete",
		"chipped:railed_red_concrete", "chipped:reinforced_red_concrete", "chipped:rusted_red_concrete", "chipped:warning_red_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
