// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:diamond_block"
	var block_ids = [
		"chipped:diamond_block_panels", "chipped:ancient_diamond_block", "chipped:chipped_diamond_block", "chipped:embossed_diamond_block",
		"chipped:engraved_diamond_block", "chipped:layered_diamond_block", "chipped:plated_diamond_block", "chipped:pressed_diamond_block",
		"chipped:reinforced_diamond_block", "chipped:sheet_diamond_block", "chipped:shuttered_diamond_block", "chipped:stacked_diamond_block",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
