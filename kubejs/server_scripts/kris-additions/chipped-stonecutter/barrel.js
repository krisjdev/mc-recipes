// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:barrel"
	var block_ids = [
		"chipped:acacia_barrel", "chipped:acacia_crate", "chipped:bamboo_barrel", "chipped:birch_barrel",
		"chipped:birch_crate", "chipped:coal_barrel", "chipped:copper_barrel", "chipped:crimson_barrel",
		"chipped:crimson_crate", "chipped:dark_oak_crate", "chipped:fish_barrel", "chipped:fruit_barrel",
		"chipped:gilded_barrel", "chipped:gold_barrel", "chipped:iron_barrel", "chipped:jungle_crate",
		"chipped:mangrove_brick_barrel", "chipped:mangrove_crate", "chipped:mangrove_tile_barrel", "chipped:metal_barrel",
		"chipped:mushroom_barrel", "chipped:netherite_safe", "chipped:oak_barrel", "chipped:oak_crate",
		"chipped:reinforced_acacia_crate", "chipped:reinforced_birch_crate", "chipped:reinforced_crimson_crate", "chipped:reinforced_dark_oak_crate",
		"chipped:reinforced_jungle_crate", "chipped:reinforced_mangrove_crate", "chipped:reinforced_oak_crate", "chipped:reinforced_spruce_crate",
		"chipped:reinforced_warped_crate", "chipped:spruce_barrel", "chipped:spruce_crate", "chipped:varnished_barrel",
		"chipped:warped_crate", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
