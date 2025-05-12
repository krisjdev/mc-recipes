// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:emerald_block"
	var block_ids = [
		"chipped:emerald_block_panels", "chipped:ancient_emerald_block", "chipped:chipped_emerald_block", "chipped:embossed_emerald_block",
		"chipped:engraved_emerald_block", "chipped:layered_emerald_block", "chipped:plated_emerald_block", "chipped:polished_emerald_block",
		"chipped:reinforced_emerald_block", "chipped:sheet_emerald_block", "chipped:shuttered_emerald_block", "chipped:stacked_emerald_block",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
