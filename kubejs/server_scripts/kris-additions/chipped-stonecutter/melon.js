// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:melon"
	var block_ids = [
		"chipped:bright_melon", "chipped:dark_melon", "chipped:golden_melon", "chipped:ripe_melon",
		"chipped:rustic_melon", "chipped:sticky_melon", "chipped:sunny_melon", "chipped:swampy_melon",
		"chipped:sweet_melon", "chipped:tropics_melon", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
