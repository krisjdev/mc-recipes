// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:nether_sprouts"
	var block_ids = [
		"chipped:bolby_nether_sprouts", "chipped:bushy_nether_sprouts", "chipped:corny_nether_sprouts", "chipped:corrupted_nether_sprouts",
		"chipped:creeping_nether_sprouts", "chipped:crusted_nether_sprouts", "chipped:fired_nether_sprouts", "chipped:flimsy_nether_sprouts",
		"chipped:grizly_nether_sprouts", "chipped:high_nether_sprouts", "chipped:large_nether_sprouts", "chipped:nether_sprouts_weeds",
		"chipped:seeded_nether_sprouts", "chipped:short_nether_sprouts", "chipped:shroomy_nether_sprouts", "chipped:tall_shroomy_nether_sprouts",
		"chipped:thin_nether_sprouts", "chipped:tubed_nether_sprouts", "chipped:warty_nether_sprouts", "chipped:wide_nether_sprouts",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
