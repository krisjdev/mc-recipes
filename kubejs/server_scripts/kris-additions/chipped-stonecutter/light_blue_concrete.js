// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:light_blue_concrete"
	var block_ids = [
		"chipped:light_blue_concrete_bricks", "chipped:light_blue_concrete_tiles", "chipped:creeper_light_blue_concrete", "chipped:grid_light_blue_concrete",
		"chipped:mosaic_light_blue_concrete", "chipped:stacked_light_blue_concrete", "chipped:stop_light_blue_concrete", "chipped:grill_light_blue_concrete",
		"chipped:light_blue_concrete_panel", "chipped:pegged_light_blue_concrete", "chipped:smooth_light_blue_concrete", "chipped:striped_light_blue_concrete",
		"chipped:wired_light_blue_concrete", "chipped:light_blue_concrete_pillar", "chipped:bolted_light_blue_concrete", "chipped:hazard_light_blue_concrete",
		"chipped:railed_light_blue_concrete", "chipped:reinforced_light_blue_concrete", "chipped:rusted_light_blue_concrete", "chipped:warning_light_blue_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
