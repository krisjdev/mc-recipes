// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:sand"
	var block_ids = [
		"chipped:ash_sand", "chipped:coarse_sand", "chipped:desert_sand", "chipped:kelp_sand",
		"chipped:lush_red_sand", "chipped:overgrown_sand", "chipped:pearl_sand", "chipped:soft_sand",
		"chipped:tar_sand", "chipped:wet_sand", "chipped:wet_red_sand", "chipped:white_sand",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
