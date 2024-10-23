Hooks.on("setup", () => {
    let config = {
        subspecies : {
            human  :{}         
        }
        
    }

    

    config.subspecies.human["westerlander-nom"] = {
        name : "Marienburger",
        skills : [
            "Bribery",
            "Charm",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Arabyan or Bretonnian)",
            "Language (Cathayan or Nipponese)",
            "Language (Estalian or Tilean)",
            "Lore (Westerland)",
            "Sail",
            "Trade (Any)"
        ],
        talents : [
            "Briber, Deal Maker",
            "Savvy, Suave",
            3
        ]
    }

    

mergeObject(game.wfrp4e.config, config)
})