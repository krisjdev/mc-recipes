// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:oak_log"
	var block_ids = [
		"chipped:bundled_oak_log", "chipped:center_cut_oak_log", "chipped:damaged_oak_log", "chipped:edge_cut_oak_log",
		"chipped:firewood_oak_log", "chipped:flowering_oak_log", "chipped:mixed_oak_log", "chipped:nailed_oak_log",
		"chipped:overgrown_oak_log", "chipped:planked_oak_log", "chipped:reinforced_oak_log", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
