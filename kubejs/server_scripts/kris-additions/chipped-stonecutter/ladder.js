// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:ladder"
	var block_ids = [
		"chipped:crooked_ladder", "chipped:crooked_plank_ladder", "chipped:crooked_ropeplank_ladder", "chipped:metal_ladder",
		"chipped:mossy_ladder", "chipped:plank_ladder", "chipped:railed_ladder", "chipped:rope_planked_ladder",
		"chipped:roped_ladder", "chipped:strong_ladder", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
