// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:brown_concrete"
	var block_ids = [
		"chipped:brown_concrete_bricks", "chipped:brown_concrete_tiles", "chipped:creeper_brown_concrete", "chipped:grid_brown_concrete",
		"chipped:mosaic_brown_concrete", "chipped:stacked_brown_concrete", "chipped:stop_brown_concrete", "chipped:grill_brown_concrete",
		"chipped:brown_concrete_panel", "chipped:pegged_brown_concrete", "chipped:smooth_brown_concrete", "chipped:striped_brown_concrete",
		"chipped:wired_brown_concrete", "chipped:brown_concrete_pillar", "chipped:bolted_brown_concrete", "chipped:hazard_brown_concrete",
		"chipped:railed_brown_concrete", "chipped:reinforced_brown_concrete", "chipped:rusted_brown_concrete", "chipped:warning_brown_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
