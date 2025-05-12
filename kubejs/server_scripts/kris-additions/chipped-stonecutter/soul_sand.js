// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:soul_sand"
	var block_ids = [
		"chipped:faded_soul_sand", "chipped:fine_soul_sand", "chipped:glowing_soul_sand", "chipped:graveled_soul_sand",
		"chipped:happy_soul_sand", "chipped:hardened_soul_sand", "chipped:lauching_soul_sand", "chipped:meming_soul_sand",
		"chipped:reanimated_soul_sand", "chipped:scared_soul_sand", "chipped:sifted_soul_sand", "chipped:smoothed_soul_sand",
		"chipped:trampled_soul_sand", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
