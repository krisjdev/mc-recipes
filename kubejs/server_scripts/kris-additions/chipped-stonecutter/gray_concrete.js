// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:gray_concrete"
	var block_ids = [
		"chipped:gray_concrete_bricks", "chipped:gray_concrete_tiles", "chipped:creeper_gray_concrete", "chipped:grid_gray_concrete",
		"chipped:mosaic_gray_concrete", "chipped:stacked_gray_concrete", "chipped:stop_gray_concrete", "chipped:grill_gray_concrete",
		"chipped:gray_concrete_panel", "chipped:pegged_gray_concrete", "chipped:smooth_gray_concrete", "chipped:striped_gray_concrete",
		"chipped:wired_gray_concrete", "chipped:gray_concrete_pillar", "chipped:bolted_gray_concrete", "chipped:hazard_gray_concrete",
		"chipped:railed_gray_concrete", "chipped:reinforced_gray_concrete", "chipped:rusted_gray_concrete", "chipped:warning_gray_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
