// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:jungle_log"
	var block_ids = [
		"chipped:bundled_jungle_log", "chipped:center_cut_jungle_log", "chipped:damaged_jungle_log", "chipped:edge_cut_jungle_log",
		"chipped:firewood_jungle_log", "chipped:flowering_jungle_log", "chipped:mixed_jungle_log", "chipped:nailed_jungle_log",
		"chipped:overgrown_jungle_log", "chipped:planked_jungle_log", "chipped:reinforced_jungle_log", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
