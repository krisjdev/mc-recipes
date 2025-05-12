// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cherry_log"
	var block_ids = [
		"chipped:bundled_cherry_log", "chipped:center_cut_cherry_log", "chipped:damaged_cherry_log", "chipped:edge_cut_cherry_log",
		"chipped:firewood_cherry_log", "chipped:flowering_cherry_log", "chipped:mixed_cherry_log", "chipped:nailed_cherry_log",
		"chipped:overgrown_cherry_log", "chipped:planked_cherry_log", "chipped:reinforced_cherry_log", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
