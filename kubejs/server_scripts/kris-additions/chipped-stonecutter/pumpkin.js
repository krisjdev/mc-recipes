// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:pumpkin"
	var block_ids = [
		"chipped:autumnkin", "chipped:dewkin", "chipped:dirty_dewkin", "chipped:dirty_goldkin",
		"chipped:dirty_rosekin", "chipped:end_pumpkin", "chipped:end_pumpkin_purple", "chipped:goldkin",
		"chipped:kabotchkin", "chipped:nether_pumpkin", "chipped:overgrown_pumpkin", "chipped:overgrown_autumnkin",
		"chipped:overgrown_lumpkin", "chipped:overgrown_pimpkin", "chipped:pimpkin", "chipped:rosekin",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
