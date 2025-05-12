// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:acacia_log"
	var block_ids = [
		"chipped:bundled_acacia_log", "chipped:center_cut_acacia_log", "chipped:damaged_acacia_log", "chipped:edge_cut_acacia_log",
		"chipped:firewood_acacia_log", "chipped:flowering_acacia_log", "chipped:mixed_acacia_log", "chipped:nailed_acacia_log",
		"chipped:overgrown_acacia_log", "chipped:planked_acacia_log", "chipped:reinforced_acacia_log", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
