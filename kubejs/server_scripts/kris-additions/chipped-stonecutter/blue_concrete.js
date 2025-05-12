// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:blue_concrete"
	var block_ids = [
		"chipped:blue_concrete_bricks", "chipped:blue_concrete_tiles", "chipped:creeper_blue_concrete", "chipped:grid_blue_concrete",
		"chipped:mosaic_blue_concrete", "chipped:stacked_blue_concrete", "chipped:stop_blue_concrete", "chipped:grill_blue_concrete",
		"chipped:blue_concrete_panel", "chipped:pegged_blue_concrete", "chipped:smooth_blue_concrete", "chipped:striped_blue_concrete",
		"chipped:wired_blue_concrete", "chipped:blue_concrete_pillar", "chipped:bolted_blue_concrete", "chipped:hazard_blue_concrete",
		"chipped:railed_blue_concrete", "chipped:reinforced_blue_concrete", "chipped:rusted_blue_concrete", "chipped:warning_blue_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
