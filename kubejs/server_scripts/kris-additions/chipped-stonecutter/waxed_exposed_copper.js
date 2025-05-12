// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:waxed_exposed_copper"
	var block_ids = [
		"chipped:ancient_waxed_exposed_copper", "chipped:chipped_waxed_exposed_copper", "chipped:embossed_waxed_exposed_copper", "chipped:engraved_waxed_exposed_copper",
		"chipped:layered_waxed_exposed_copper", "chipped:plated_waxed_exposed_copper", "chipped:pressed_waxed_exposed_copper", "chipped:reinforced_waxed_exposed_copper",
		"chipped:sheet_waxed_exposed_copper", "chipped:shuttered_waxed_exposed_copper", "chipped:stacked_waxed_exposed_copper", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
