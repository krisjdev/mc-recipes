// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:light_gray_concrete"
	var block_ids = [
		"chipped:light_gray_concrete_bricks", "chipped:light_gray_concrete_tiles", "chipped:creeper_light_gray_concrete", "chipped:grid_light_gray_concrete",
		"chipped:mosaic_light_gray_concrete", "chipped:stacked_light_gray_concrete", "chipped:stop_light_gray_concrete", "chipped:grill_light_gray_concrete",
		"chipped:light_gray_concrete_panel", "chipped:pegged_light_gray_concrete", "chipped:smooth_light_gray_concrete", "chipped:striped_light_gray_concrete",
		"chipped:wired_light_gray_concrete", "chipped:light_gray_concrete_pillar", "chipped:bolted_light_gray_concrete", "chipped:hazard_light_gray_concrete",
		"chipped:railed_light_gray_concrete", "chipped:reinforced_light_gray_concrete", "chipped:rusted_light_gray_concrete", "chipped:warning_light_gray_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
