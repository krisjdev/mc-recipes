// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:blue_ice"
	var block_ids = [
		"minecraft:blue_ice", "rechiseled:blue_ice_bordered", "rechiseled:blue_ice_bordered_connecting", "rechiseled:blue_ice_bricks",
		"rechiseled:blue_ice_bricks_connecting", "rechiseled:blue_ice_chiseled", "rechiseled:blue_ice_chiseled_connecting", "rechiseled:blue_ice_cone",
		"rechiseled:blue_ice_cracked", "rechiseled:blue_ice_patterned", "rechiseled:blue_ice_patterned_connecting", "rechiseled:blue_ice_pillar",
		"rechiseled:blue_ice_pillar_connecting", "rechiseled:blue_ice_rocky", "rechiseled:blue_ice_slanted_tiles", "rechiseled:blue_ice_slanted_tiles_connecting",
		"rechiseled:blue_ice_tiles", "rechiseled:blue_ice_tiles_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
