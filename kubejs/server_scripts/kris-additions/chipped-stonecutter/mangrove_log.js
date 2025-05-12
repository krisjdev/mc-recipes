// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:mangrove_log"
	var block_ids = [
		"chipped:bundled_mangrove_log", "chipped:center_cut_mangrove_log", "chipped:damaged_mangrove_log", "chipped:edge_cut_mangrove_log",
		"chipped:firewood_mangrove_log", "chipped:flowering_mangrove_log", "chipped:mixed_mangrove_log", "chipped:nailed_mangrove_log",
		"chipped:overgrown_mangrove_log", "chipped:planked_mangrove_log", "chipped:reinforced_mangrove_log", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
