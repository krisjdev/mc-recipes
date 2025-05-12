// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cyan_concrete"
	var block_ids = [
		"chipped:cyan_concrete_bricks", "chipped:cyan_concrete_tiles", "chipped:creeper_cyan_concrete", "chipped:grid_cyan_concrete",
		"chipped:mosaic_cyan_concrete", "chipped:stacked_cyan_concrete", "chipped:stop_cyan_concrete", "chipped:grill_cyan_concrete",
		"chipped:cyan_concrete_panel", "chipped:pegged_cyan_concrete", "chipped:smooth_cyan_concrete", "chipped:striped_cyan_concrete",
		"chipped:wired_cyan_concrete", "chipped:cyan_concrete_pillar", "chipped:bolted_cyan_concrete", "chipped:hazard_cyan_concrete",
		"chipped:railed_cyan_concrete", "chipped:reinforced_cyan_concrete", "chipped:rusted_cyan_concrete", "chipped:warning_cyan_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
