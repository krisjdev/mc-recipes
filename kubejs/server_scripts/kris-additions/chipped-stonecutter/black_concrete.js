// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:black_concrete"
	var block_ids = [
		"chipped:black_concrete_bricks", "chipped:black_concrete_tiles", "chipped:creeper_black_concrete", "chipped:grid_black_concrete",
		"chipped:mosaic_black_concrete", "chipped:stacked_black_concrete", "chipped:stop_black_concrete", "chipped:grill_black_concrete",
		"chipped:black_concrete_panel", "chipped:pegged_black_concrete", "chipped:smooth_black_concrete", "chipped:striped_black_concrete",
		"chipped:wired_black_concrete", "chipped:black_concrete_pillar", "chipped:bolted_black_concrete", "chipped:hazard_black_concrete",
		"chipped:railed_black_concrete", "chipped:reinforced_black_concrete", "chipped:rusted_black_concrete", "chipped:warning_black_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
