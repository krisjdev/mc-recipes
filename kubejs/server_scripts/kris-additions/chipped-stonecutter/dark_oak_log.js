// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:dark_oak_log"
	var block_ids = [
		"chipped:bundled_dark_oak_log", "chipped:center_cut_dark_oak_log", "chipped:damaged_dark_oak_log", "chipped:edge_cut_dark_oak_log",
		"chipped:firewood_dark_oak_log", "chipped:flowering_dark_oak_log", "chipped:mixed_dark_oak_log", "chipped:nailed_dark_oak_log",
		"chipped:overgrown_dark_oak_log", "chipped:planked_dark_oak_log", "chipped:reinforced_dark_oak_log", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
