// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:white_concrete"
	var block_ids = [
		"chipped:white_concrete_bricks", "chipped:white_concrete_tiles", "chipped:creeper_white_concrete", "chipped:grid_white_concrete",
		"chipped:mosaic_white_concrete", "chipped:stacked_white_concrete", "chipped:stop_white_concrete", "chipped:grill_white_concrete",
		"chipped:white_concrete_panel", "chipped:pegged_white_concrete", "chipped:smooth_white_concrete", "chipped:striped_white_concrete",
		"chipped:wired_white_concrete", "chipped:white_concrete_pillar", "chipped:bolted_white_concrete", "chipped:hazard_white_concrete",
		"chipped:railed_white_concrete", "chipped:reinforced_white_concrete", "chipped:rusted_white_concrete", "chipped:warning_white_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
