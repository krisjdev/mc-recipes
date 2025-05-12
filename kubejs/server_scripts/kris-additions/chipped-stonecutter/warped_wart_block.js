// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:warped_wart_block"
	var block_ids = [
		"chipped:bubbling_warped_wart_block", "chipped:crumbled_warped_wart_block", "chipped:dried_warped_wart_block", "chipped:erratic_warped_wart_block",
		"chipped:eyed_warped_wart_block", "chipped:patched_warped_wart_block", "chipped:porous_warped_wart_block", "chipped:rough_warped_wart_block",
		"chipped:scabbed_warped_wart_block", "chipped:scaled_warped_wart_block", "chipped:seared_warped_wart_block", "chipped:semi_spongy_warped_wart_block",
		"chipped:speckled_warped_wart_block", "chipped:spongy_warped_wart_block", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
