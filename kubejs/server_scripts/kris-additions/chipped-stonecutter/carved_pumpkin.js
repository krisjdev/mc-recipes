// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:carved_pumpkin"
	var block_ids = [
		"chipped:anguished_carved_pumpkin", "chipped:bad_time_carved_pumpkin", "chipped:boo_carved_pumpkin", "chipped:creepy_carved_pumpkin",
		"chipped:devious_carved_pumpkin", "chipped:end_carved_pumpkin", "chipped:end_purple_carved_pumpkin", "chipped:horrified_carved_pumpkin",
		"chipped:kitty_faced_carved_pumpkin", "chipped:nether_carved_pumpkin", "chipped:overjoyed_carved_pumpkin", "chipped:owo_carved_pumpkin",
		"chipped:silly_carved_pumpkin", "chipped:slight_smile_carved_pumpkin", "chipped:smiling_carved_pumpkin", "chipped:spooky_carved_pumpkin",
		"chipped:squished_cute_carved_pumpkin", "chipped:suspicious_carved_pumpkin", "chipped:tiny_smug_carved_pumpkin", "chipped:traditional_carved_pumpkin",
		"chipped:upside_down_carved_pumpkin", "chipped:wide_eyed_carved_pumpkin", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
