// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:purple_concrete"
	var block_ids = [
		"chipped:purple_concrete_bricks", "chipped:purple_concrete_tiles", "chipped:creeper_purple_concrete", "chipped:grid_purple_concrete",
		"chipped:mosaic_purple_concrete", "chipped:stacked_purple_concrete", "chipped:stop_purple_concrete", "chipped:grill_purple_concrete",
		"chipped:purple_concrete_panel", "chipped:pegged_purple_concrete", "chipped:smooth_purple_concrete", "chipped:striped_purple_concrete",
		"chipped:wired_purple_concrete", "chipped:purple_concrete_pillar", "chipped:bolted_purple_concrete", "chipped:hazard_purple_concrete",
		"chipped:railed_purple_concrete", "chipped:reinforced_purple_concrete", "chipped:rusted_purple_concrete", "chipped:warning_purple_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
