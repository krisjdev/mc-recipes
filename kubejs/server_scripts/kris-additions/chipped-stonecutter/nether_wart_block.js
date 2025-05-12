// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:nether_wart_block"
	var block_ids = [
		"chipped:bubbling_nether_wart_block", "chipped:crumbled_nether_wart_block", "chipped:dried_nether_wart_block", "chipped:erratic_nether_wart_block",
		"chipped:eyed_nether_wart_block", "chipped:patched_nether_wart_block", "chipped:porous_nether_wart_block", "chipped:rough_nether_wart_block",
		"chipped:scabbed_nether_wart_block", "chipped:scaled_nether_wart_block", "chipped:seared_nether_wart_block", "chipped:semi_spongy_nether_wart_block",
		"chipped:speckled_nether_wart_block", "chipped:spongy_nether_wart_block", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
