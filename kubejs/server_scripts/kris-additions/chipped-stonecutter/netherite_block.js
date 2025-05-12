// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:netherite_block"
	var block_ids = [
		"chipped:netherite_block_panels", "chipped:chipped_netherite_block", "chipped:embossed_netherite_block", "chipped:engraved_netherite_block",
		"chipped:layered_netherite_block", "chipped:plated_netherite_block", "chipped:polished_netherite_block", "chipped:pressed_netherite_block",
		"chipped:reinforced_netherite_block", "chipped:sheet_netherite_block", "chipped:shuttered_netherite_block", "chipped:stacked_netherite_block",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
