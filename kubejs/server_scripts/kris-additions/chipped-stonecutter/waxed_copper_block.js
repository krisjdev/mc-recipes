// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:waxed_copper_block"
	var block_ids = [
		"chipped:ancient_waxed_copper_block", "chipped:chipped_waxed_copper_block", "chipped:embossed_waxed_copper_block", "chipped:engraved_waxed_copper_block",
		"chipped:layered_waxed_copper_block", "chipped:plated_waxed_copper_block", "chipped:pressed_waxed_copper_block", "chipped:reinforced_waxed_copper_block",
		"chipped:sheet_waxed_copper_block", "chipped:shuttered_waxed_copper_block", "chipped:stacked_waxed_copper_block", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
