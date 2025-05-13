// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:emerald_block"
	var block_ids = [
		"minecraft:emerald_block", "rechiseled:emerald_block_bordered_crosses", "rechiseled:emerald_block_bordered_crosses_connecting", "rechiseled:emerald_block_bordered_plating",
		"rechiseled:emerald_block_bordered_plating_connecting", "rechiseled:emerald_block_chiseled", "rechiseled:emerald_block_chiseled_connecting", "rechiseled:emerald_block_clovers",
		"rechiseled:emerald_block_clovers_connecting", "rechiseled:emerald_block_crosses", "rechiseled:emerald_block_crystal", "rechiseled:emerald_block_crystal_connecting",
		"rechiseled:emerald_block_patterned", "rechiseled:emerald_block_patterned_connecting", "rechiseled:emerald_block_patterned_squares", "rechiseled:emerald_block_patterned_squares_connecting",
		"rechiseled:emerald_block_pillar", "rechiseled:emerald_block_pillar_connecting", "rechiseled:emerald_block_plating", "rechiseled:emerald_block_polished",
		"rechiseled:emerald_block_polished_connecting", "rechiseled:emerald_block_smooth", "rechiseled:emerald_block_striped", "rechiseled:emerald_block_striped_connecting",
		"rechiseled:emerald_block_waxed", "rechiseled:emerald_block_waxed_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
