// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:warped_stem"
	var block_ids = [
		"chipped:bundled_warped_stem", "chipped:center_cut_warped_stem", "chipped:damaged_warped_stem", "chipped:edge_cut_warped_stem",
		"chipped:firewood_warped_stem", "chipped:nailed_warped_stem", "chipped:planked_warped_stem", "chipped:rotted_warped_stem",
		"chipped:shrooming_warped_stem", "chipped:smooth_warped_stem", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
