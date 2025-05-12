// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:lantern"
	var block_ids = [
		"chipped:blue_paper_lantern", "chipped:burning_coal_lantern", "chipped:checkered_iron_lantern", "chipped:dark_blue_paper_lantern",
		"chipped:ender_lantern", "chipped:green_paper_lantern", "chipped:iron_bowl_lantern", "chipped:purple_paper_lantern",
		"chipped:red_paper_lantern", "chipped:small_green_lantern", "chipped:white_paper_lantern", "chipped:wooden_cage_lantern",
		"chipped:wrought_iron_lantern", "chipped:yellow_tube_lantern", "lantern", "chipped:blue_paper_lantern",
		"chipped:burning_coal_lantern", "chipped:checkered_iron_lantern", "chipped:dark_blue_paper_lantern", "chipped:ender_lantern",
		"chipped:green_paper_lantern", "chipped:iron_bowl_lantern", "chipped:purple_paper_lantern", "chipped:red_paper_lantern",
		"chipped:small_green_lantern", "chipped:white_paper_lantern", "chipped:wooden_cage_lantern", "chipped:wrought_iron_lantern",
		"chipped:yellow_tube_lantern", "chipped:big_lantern", "chipped:donut_lantern", "chipped:tall_lantern",
		"chipped:wide_lantern", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
