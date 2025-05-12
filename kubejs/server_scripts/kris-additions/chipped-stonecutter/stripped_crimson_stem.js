// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:stripped_crimson_stem"
	var block_ids = [
		"chipped:carved_stripped_crimson_stem", "chipped:chipped_stripped_crimson_stem", "chipped:d_sign_stripped_crimson_stem", "chipped:edged_stripped_crimson_stem",
		"chipped:f_sign_stripped_crimson_stem", "chipped:i_sign_stripped_crimson_stem", "chipped:k_sign_stripped_crimson_stem", "chipped:knotted_stripped_crimson_stem",
		"chipped:l_sign_stripped_crimson_stem", "chipped:layered_stripped_crimson_stem", "chipped:lumpy_stripped_crimson_stem", "chipped:m_sign_stripped_crimson_stem",
		"chipped:patient_stripped_crimson_stem", "chipped:reinforced_stripped_crimson_stem", "chipped:sign_stripped_crimson_stem", "chipped:stern_stripped_crimson_stem",
		"chipped:wise_stripped_crimson_stem", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
