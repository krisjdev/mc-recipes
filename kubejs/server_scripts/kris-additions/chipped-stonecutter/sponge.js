// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:sponge"
	var block_ids = [
		"chipped:bulby_sponge", "chipped:fine_sponge", "chipped:giant_sponge", "chipped:lush_sponge",
		"chipped:old_sponge", "chipped:smooth_sponge", "chipped:soft_sponge", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
