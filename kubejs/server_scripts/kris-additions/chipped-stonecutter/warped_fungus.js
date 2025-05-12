// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:warped_fungus"
	var block_ids = [
		"chipped:bulbed_warped_fungus", "chipped:button_warped_fungus", "chipped:double_warped_fungus", "chipped:franken_warped_fungus",
		"chipped:hooded_warped_fungus", "chipped:micro_warped_fungus", "chipped:mini_warped_fungus", "chipped:warped_fungus_bulb",
		"chipped:warped_fungus_bushel", "chipped:warped_fungus_cluster", "chipped:warped_fungus_trio", "chipped:umbrella_warped_fungus",
		"chipped:wicked_warped_fungus", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
