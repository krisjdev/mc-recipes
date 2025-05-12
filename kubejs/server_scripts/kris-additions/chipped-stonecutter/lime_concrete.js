// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:lime_concrete"
	var block_ids = [
		"chipped:lime_concrete_bricks", "chipped:lime_concrete_tiles", "chipped:creeper_lime_concrete", "chipped:grid_lime_concrete",
		"chipped:mosaic_lime_concrete", "chipped:stacked_lime_concrete", "chipped:stop_lime_concrete", "chipped:grill_lime_concrete",
		"chipped:lime_concrete_panel", "chipped:pegged_lime_concrete", "chipped:smooth_lime_concrete", "chipped:striped_lime_concrete",
		"chipped:wired_lime_concrete", "chipped:lime_concrete_pillar", "chipped:bolted_lime_concrete", "chipped:hazard_lime_concrete",
		"chipped:railed_lime_concrete", "chipped:reinforced_lime_concrete", "chipped:rusted_lime_concrete", "chipped:warning_lime_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
