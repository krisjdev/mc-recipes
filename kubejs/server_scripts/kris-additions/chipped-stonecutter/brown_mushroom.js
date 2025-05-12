// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:brown_mushroom"
	var block_ids = [
		"chipped:bulbed_brown_mushroom", "chipped:button_brown_mushroom", "chipped:clustered_brown_mushroom", "chipped:double_brown_mushroom",
		"chipped:franken_brown_mushroom", "chipped:hooded_brown_mushroom", "chipped:micro_brown_mushroom", "chipped:mini_brown_mushroom",
		"chipped:brown_mushroom_bulb", "chipped:brown_mushroom_bushel", "chipped:brown_mushroom_cluster", "chipped:brown_mushroom_trio",
		"chipped:umbrella_brown_mushroom", "chipped:wicked_brown_mushroom", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
