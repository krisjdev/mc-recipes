// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:iron_bars"
	var block_ids = [
		"chipped:iron_bars_top", "chipped:barbed_iron_bars", "chipped:bolted_iron_bars", "chipped:chained_iron_bars",
		"chipped:crossbolted_iron_bars", "chipped:crossed_iron_bars", "chipped:floral_iron_bars", "chipped:harp_iron_bars",
		"chipped:linked_iron_bars", "chipped:loose_iron_bars", "chipped:piked_iron_bars", "chipped:railed_iron_bars",
		"chipped:sighthole_iron_bars", "chipped:stepped_iron_bars", "chipped:sturdy_iron_bars", "chipped:supported_iron_bars",
		"chipped:thorned_iron_bars", "chipped:victorian_iron_bars_pikes", "chipped:vined_iron_bars", "chipped:woven_iron_bars",
		"chipped:zippered_iron_bars", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
