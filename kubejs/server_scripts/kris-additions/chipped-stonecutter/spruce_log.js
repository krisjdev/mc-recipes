// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:spruce_log"
	var block_ids = [
		"chipped:bundled_spruce_log", "chipped:center_cut_spruce_log", "chipped:damaged_spruce_log", "chipped:edge_cut_spruce_log",
		"chipped:firewood_spruce_log", "chipped:flowering_spruce_log", "chipped:mixed_spruce_log", "chipped:nailed_spruce_log",
		"chipped:overgrown_spruce_log", "chipped:planked_spruce_log", "chipped:reinforced_spruce_log", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
