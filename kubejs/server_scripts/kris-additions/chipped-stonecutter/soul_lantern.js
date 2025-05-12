// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:soul_lantern"
	var block_ids = [
		"chipped:blue_paper_soul_lantern", "chipped:blue_tube_soul_lantern", "chipped:checkered_iron_soul_lantern", "chipped:golden_paper_soul_lantern",
		"chipped:gray_paper_soul_lantern", "chipped:iron_bowl_soul_lantern", "chipped:lime_paper_soul_lantern", "chipped:orange_paper_soul_lantern",
		"chipped:small_red_soul_lantern", "chipped:wooden_cage_soul_lantern", "chipped:yellow_paper_soul_lantern", "soul_lantern",
		"chipped:blue_paper_soul_lantern", "chipped:blue_tube_soul_lantern", "chipped:checkered_iron_soul_lantern", "chipped:golden_paper_soul_lantern",
		"chipped:gray_paper_soul_lantern", "chipped:iron_bowl_soul_lantern", "chipped:lime_paper_soul_lantern", "chipped:orange_paper_soul_lantern",
		"chipped:small_red_soul_lantern", "chipped:wooden_cage_soul_lantern", "chipped:yellow_paper_soul_lantern", "chipped:big_soul_lantern",
		"chipped:donut_soul_lantern", "chipped:tall_soul_lantern", "chipped:wide_soul_lantern", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
