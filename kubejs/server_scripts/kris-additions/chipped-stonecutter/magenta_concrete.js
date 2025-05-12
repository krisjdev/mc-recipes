// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:magenta_concrete"
	var block_ids = [
		"chipped:magenta_concrete_bricks", "chipped:magenta_concrete_tiles", "chipped:creeper_magenta_concrete", "chipped:grid_magenta_concrete",
		"chipped:mosaic_magenta_concrete", "chipped:stacked_magenta_concrete", "chipped:stop_magenta_concrete", "chipped:grill_magenta_concrete",
		"chipped:magenta_concrete_panel", "chipped:pegged_magenta_concrete", "chipped:smooth_magenta_concrete", "chipped:striped_magenta_concrete",
		"chipped:wired_magenta_concrete", "chipped:magenta_concrete_pillar", "chipped:bolted_magenta_concrete", "chipped:hazard_magenta_concrete",
		"chipped:railed_magenta_concrete", "chipped:reinforced_magenta_concrete", "chipped:rusted_magenta_concrete", "chipped:warning_magenta_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
