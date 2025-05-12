// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:gold_block"
	var block_ids = [
		"chipped:gold_block_panels", "chipped:ancient_gold_block", "chipped:chipped_gold_block", "chipped:embossed_gold_block",
		"chipped:engraved_gold_block", "chipped:layered_gold_block", "chipped:plated_gold_block", "chipped:pressed_gold_block",
		"chipped:reinforced_gold_block", "chipped:sheet_gold_block", "chipped:shuttered_gold_block", "chipped:stacked_gold_block",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
