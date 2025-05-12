// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:mushroom_stem"
	var block_ids = [
		"chipped:blooming_mushroom_stem", "chipped:broken_mushroom_stem", "chipped:grimy_mushroom_stem", "chipped:old_mushroom_stem",
		"chipped:poisonous_mushroom_stem", "chipped:smooth_mushroom_stem", "chipped:warm_mushroom_stem", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
