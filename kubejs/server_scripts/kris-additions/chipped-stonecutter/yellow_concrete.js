// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:yellow_concrete"
	var block_ids = [
		"chipped:yellow_concrete_bricks", "chipped:yellow_concrete_tiles", "chipped:creeper_yellow_concrete", "chipped:grid_yellow_concrete",
		"chipped:mosaic_yellow_concrete", "chipped:stacked_yellow_concrete", "chipped:stop_yellow_concrete", "chipped:grill_yellow_concrete",
		"chipped:yellow_concrete_panel", "chipped:pegged_yellow_concrete", "chipped:smooth_yellow_concrete", "chipped:striped_yellow_concrete",
		"chipped:wired_yellow_concrete", "chipped:yellow_concrete_pillar", "chipped:bolted_yellow_concrete", "chipped:hazard_yellow_concrete",
		"chipped:railed_yellow_concrete", "chipped:reinforced_yellow_concrete", "chipped:rusted_yellow_concrete", "chipped:warning_yellow_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
