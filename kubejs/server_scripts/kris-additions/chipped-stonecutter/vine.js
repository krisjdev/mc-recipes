// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:vine"
	var block_ids = [
		"chipped:droopy_vine", "chipped:flowery_vine", "chipped:ivy_vine", "chipped:leafy_vine",
		"chipped:long_vine", "chipped:lush_vine", "chipped:nether_vine", "chipped:poisonous_vine",
		"chipped:thicc_vine", "chipped:thin_vine", "chipped:warped_vine", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
