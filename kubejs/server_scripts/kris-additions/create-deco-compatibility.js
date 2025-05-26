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

    compressing("create:andesite_alloy", "createdeco:andesite_sheet")
    compressing("minecraft:netherite_ingot", "createdeco:netherite_sheet")
    compressing("createdeco:industrial_iron_ingot", "createdeco:industrial_iron_sheet")
})