// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:waxed_oxidized_copper"
	var block_ids = [
		"chipped:ancient_waxed_oxidized_copper", "chipped:chipped_waxed_oxidized_copper", "chipped:embossed_waxed_oxidized_copper", "chipped:engraved_waxed_oxidized_copper",
		"chipped:layered_waxed_oxidized_copper", "chipped:plated_waxed_oxidized_copper", "chipped:pressed_waxed_oxidized_copper", "chipped:reinforced_waxed_oxidized_copper",
		"chipped:sheet_waxed_oxidized_copper", "chipped:shuttered_waxed_oxidized_copper", "chipped:stacked_waxed_oxidized_copper", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
