// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:iron_block"
	var block_ids = [
		"chipped:iron_block_panels", "chipped:ancient_iron_block", "chipped:chipped_iron_block", "chipped:engraved_iron_block",
		"chipped:layered_iron_block", "chipped:plated_iron_block", "chipped:polished_iron_block", "chipped:pressed_iron_block",
		"chipped:reinforced_iron_block", "chipped:sheet_iron_block", "chipped:shuttered_iron_block", "chipped:stacked_iron_block",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
