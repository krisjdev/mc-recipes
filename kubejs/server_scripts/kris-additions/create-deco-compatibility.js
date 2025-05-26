ServerEvents.recipes(event => {

    function compressing(input, output) {

        event.custom({
            type: "ad_astra:compressing",
            cookingtime: 100,
            energy: 20,
            ingredient: {
                item: input
            },
            result: {
                count: 1,
                id: output
            }
        })

        event.custom({
            type: "immersiveengineering:metal_press",
            energy: 2400,
            input: {
                item: input
            },
            mold: "immersiveengineering:mold_plate",
            result: {
                item: output
            }
        })

        event.custom({
            type: "thermal:press",
            ingredient: {
                item: input
            },
            result: [
                {
                    item: output
                }
            ]
        })
    }

    function replace_input(original, replacement) {
        event.replaceInput(
            // https://kubejs.com/wiki/tutorials/recipes#removing-recipes
            {mod: "createdeco", input: original},
            original,
            replacement
        )
    }

    compressing("create:andesite_alloy", "createdeco:andesite_sheet")
    compressing("minecraft:netherite_ingot", "createdeco:netherite_sheet")
    compressing("createdeco:industrial_iron_ingot", "createdeco:industrial_iron_sheet")

    replace_input("createdeco:zinc_sheet", "alltheores:zinc_plate")
    replace_input("create:zinc_ingot", "alltheores:zinc_ingot")
    replace_input("create:zinc_block", "alltheores:zinc_block")
    replace_input("create:zinc_nugget", "alltheores:zinc_nugget")
})