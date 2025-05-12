// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:red_mushroom"
	var block_ids = [
		"chipped:bulbed_red_mushroom", "chipped:button_red_mushroom", "chipped:clustered_red_mushroom", "chipped:double_red_mushroom",
		"chipped:franken_red_mushroom", "chipped:hooded_red_mushroom", "chipped:micro_red_mushroom", "chipped:mini_red_mushroom",
		"chipped:red_mushroom_bulb", "chipped:red_mushroom_bushel", "chipped:red_mushroom_cluster", "chipped:red_mushroom_trio",
		"chipped:umbrella_red_mushroom", "chipped:wicked_red_mushroom", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
