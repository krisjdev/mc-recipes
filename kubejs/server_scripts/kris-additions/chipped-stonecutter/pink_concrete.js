// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:pink_concrete"
	var block_ids = [
		"chipped:pink_concrete_bricks", "chipped:pink_concrete_tiles", "chipped:creeper_pink_concrete", "chipped:grid_pink_concrete",
		"chipped:mosaic_pink_concrete", "chipped:stacked_pink_concrete", "chipped:stop_pink_concrete", "chipped:grill_pink_concrete",
		"chipped:pink_concrete_panel", "chipped:pegged_pink_concrete", "chipped:smooth_pink_concrete", "chipped:striped_pink_concrete",
		"chipped:wired_pink_concrete", "chipped:pink_concrete_pillar", "chipped:bolted_pink_concrete", "chipped:hazard_pink_concrete",
		"chipped:railed_pink_concrete", "chipped:reinforced_pink_concrete", "chipped:rusted_pink_concrete", "chipped:warning_pink_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
