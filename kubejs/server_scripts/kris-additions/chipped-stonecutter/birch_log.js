// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:birch_log"
	var block_ids = [
		"chipped:bundled_birch_log", "chipped:center_cut_birch_log", "chipped:damaged_birch_log", "chipped:edge_cut_birch_log",
		"chipped:firewood_birch_log", "chipped:flowering_birch_log", "chipped:mixed_birch_log", "chipped:nailed_birch_log",
		"chipped:overgrown_birch_log", "chipped:planked_birch_log", "chipped:reinforced_birch_log", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
