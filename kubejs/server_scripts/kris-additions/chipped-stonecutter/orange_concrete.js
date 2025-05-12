// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:orange_concrete"
	var block_ids = [
		"chipped:orange_concrete_bricks", "chipped:orange_concrete_tiles", "chipped:creeper_orange_concrete", "chipped:grid_orange_concrete",
		"chipped:mosaic_orange_concrete", "chipped:stacked_orange_concrete", "chipped:stop_orange_concrete", "chipped:grill_orange_concrete",
		"chipped:orange_concrete_panel", "chipped:pegged_orange_concrete", "chipped:smooth_orange_concrete", "chipped:striped_orange_concrete",
		"chipped:wired_orange_concrete", "chipped:orange_concrete_pillar", "chipped:bolted_orange_concrete", "chipped:hazard_orange_concrete",
		"chipped:railed_orange_concrete", "chipped:reinforced_orange_concrete", "chipped:rusted_orange_concrete", "chipped:warning_orange_concrete",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
