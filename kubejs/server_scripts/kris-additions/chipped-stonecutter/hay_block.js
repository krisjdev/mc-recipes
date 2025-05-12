// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:hay_block"
	var block_ids = [
		"chipped:antique_hay_block", "chipped:bundled_hay_block", "chipped:detailed_hay_block", "chipped:fertile_hay_block",
		"chipped:jungle_hay_block", "chipped:pale_hay_block", "chipped:rich_hay_block", "chipped:swampy_hay_block",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
