// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:crimson_fungus"
	var block_ids = [
		"chipped:bulbed_crimson_fungus", "chipped:button_crimson_fungus", "chipped:clustered_crimson_fungus", "chipped:double_crimson_fungus",
		"chipped:franken_crimson_fungus", "chipped:hooded_crimson_fungus", "chipped:micro_crimson_fungus", "chipped:mini_crimson_fungus",
		"chipped:crimson_fungus_bulb", "chipped:crimson_fungus_bushel", "chipped:crimson_fungus_cluster", "chipped:crimson_fungus_trio",
		"chipped:umbrella_crimson_fungus", "chipped:wicked_crimson_fungus", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
