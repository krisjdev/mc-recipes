// priority: 10000
// extra SPS recipes

ServerEvents.recipes(event => {

    // remove existing recipe (light grey wool -> block of quartz)
    // BUG: doesn't actually remove it? see below
    event.remove(
        {input: "minecraft:light_gray_wool", output: "minecraft:quartz_block", type: "mekanism:nucleosynthesizing"}
    )

    // keys:
    //      input, output, gas_amount (default: 2), duration (default: 200)
    // BUG: despite the above not removing the recipe, these changes still go through
    //      so white wool -> quartz block, and light grey wool -> andesite seemingly both work correctly,
    //      despite the in-game gui being wrong?
    //      this is somewhat fixed by the priority: 10000 tag on the top, although the gui is still wrong
    var sps_recipe_list = [
        {input: "minecraft:white_wool", output: "minecraft:quartz_block"},
        {input: "minecraft:light_gray_wool", output: "minecraft:andesite"},
        {input: "minecraft:gray_wool", output: "ae2:sky_stone_block"},
        {input: "minecraft:black_wool", output: "minecraft:netherite_block", gas_amount: 5, duration: 1250},
        {input: "minecraft:brown_wool", output: "minecraft:ancient_debris", duration: 500},
        {input: "minecraft:orange_wool", output: "minecraft:honey_block"},
        {input: "minecraft:lime_wool", output: "alltheores:uranium_block", duration: 500},
        {input: "minecraft:green_wool", output: "minecraft:emerald_block", gas_amount: 36, duration: 500},
        {input: "minecraft:cyan_wool", output: "minecraft:reinforced_deepslate", duration: 500},
        {input: "minecraft:light_blue_wool", output: "minecraft:blue_ice", duration: 500},
    ]


    for (var i = 0; i < sps_recipe_list.length; i++) {
        var recipe = sps_recipe_list[i]

        event.custom({
            type: "mekanism:nucleosynthesizing",
            duration: recipe.duration ? recipe.duration : 200,
            gasInput: {
                amount: recipe.gas_amount ? recipe.gas_amount : 2,
                gas: "mekanism:antimatter"
            },
            itemInput: {
                ingredient: {
                    item: recipe.input
                }
            },
            output: {
                item: recipe.output
            }
        })
    }
})