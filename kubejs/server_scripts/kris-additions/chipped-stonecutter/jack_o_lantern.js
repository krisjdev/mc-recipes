// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:jack_o_lantern"
	var block_ids = [
		"chipped:anguished_jack_o_lantern", "chipped:bad_time_jack_o_lantern", "chipped:boo_jack_o_lantern", "chipped:creepy_jack_o_lantern",
		"chipped:devious_jack_o_lantern", "chipped:end_jack_o_lantern", "chipped:end_purple_jack_o_lantern", "chipped:horrified_jack_o_lantern",
		"chipped:kitty_faced_jack_o_lantern", "chipped:nether_jack_o_lantern", "chipped:overjoyed_jack_o_lantern", "chipped:owo_jack_o_lantern",
		"chipped:silly_jack_o_lantern", "chipped:slight_smile_jack_o_lantern", "chipped:smiling_jack_o_lantern", "chipped:spooky_jack_o_lantern",
		"chipped:squished_cute_jack_o_lantern", "chipped:suspicious_jack_o_lantern", "chipped:tiny_smug_jack_o_lantern", "chipped:traditional_jack_o_lantern",
		"chipped:upside_down_jack_o_lantern", "chipped:wide_eyed_jack_o_lantern", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
