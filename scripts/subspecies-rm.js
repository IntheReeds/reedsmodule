Hooks.on("setup", () => {
    let config = {
        subspecies : {
            dwarf  :{}         
        }
        
    }

    

    config.subspecies.dwarf["karakazul-rm"] = {
        name : "Karak Azul",
        skills : [
            "Climb",
            "Consume Alcohol",
            "Cool",
            "Endurance",
            "Evaluate",
            "Haggle",
            "Intimidate",
            "Language (Khazalid)",
            "Lore (Dwarfs)",
            "Lore (Metallurgy)",
            "Melee (Basic)",
            "Trade (Any)"
        ],
        talents : [
            "Hatred (Orcs and Goblins), Resolute",
            "Read/Write, Relentless",
            "Magic Resistance",
            "Sturdy"
        ]
    },
    config.subspecies.dwarf["karazkarak-rm"] = {
        name : "Karaz A Karak",
        skills : [
            "Consume Alcohol",
            "Cool",
            "Endurance",
            "Entertain (Storytelling)",
            "Evaluate",
            "Haggle",
            "Intimidate",
            "Language (Khazalid)",
            "Leadership",
            "Lore (Dwarfs)",
            "Lore (Geology)",
            "Lore (Metallurgy)",
            "Melee (Basic)",
            "Trade (Any)"
        ],
        talents : [
            "Hatred (Any), Resolute",
            "Read/Write, Relentless",
            "Magic Resistance",
            "Sturdy",
            "Night Vision"
        ]
    },
    config.subspecies.dwarf["karakhirn-rm"] = {
        name : "Karak Hirn",
        skills : [
            "Consume Alcohol",
            "Climb",
            "Cool",
            "Endurance",
            "Entertain (Storytelling)",
            "Evaluate",
            "Haggle",
            "Language (Khazalid)",
            "Lore (Dwarfs)",
            "Melee (Basic)",
            "Play (Horn)",
            "Trade (Any)"
        ],
        talents : [
            "Scale Sheer Surface, Strong-minded",
            "Read/Write, Relentless",
            "Magic Resistance",
            "Sturdy",
            "Night Vision"
        ]
    },
    config.subspecies.dwarf["barakvarr-rm"] = {
        name : "Barak Varr",
        skills : [
            "Consume Alcohol",
            "Cool",
            "Endurance",
            "Entertain (Storytelling)",
            "Evaluate",
            "Haggle",
            "Language (Khazalid)",
            "Lore (Dwarfs)",
            "Melee (Basic)",
            "Navigation",
            "Sail",
            "Trade (Any)"
        ],
        talents : [
            "Dealmaker, Strong-minded",
            "Read/Write, Resolute",
            "Magic Resistance",
            "Sturdy",
            "Night Vision"
        ]
    },
    config.subspecies.dwarf["karakeightpeaks-rm"] = {
        name : "Karak Eight Peaks",
        skills : [
            "Consume Alcohol",
            "Cool",
            "Endurance",
            "Evaluate",
            "Intuition",
            "Language (Khazalid)",
            "Lore (Dwarfs)",
            "Lore (Geology)",
            "Lore (Warfare)",
            "Melee (Basic)",
            "Set Traps",
            "Trade (Any)"
        ],
        talents : [
            "Resolute, Strong-minded",
            "Read/Write, Iron Jaw",
            "Magic Resistance",
            "Sturdy",
            "Night Vision"
        ]
    },
    config.subspecies.dwarf["karakkadrin-rm"] = {
        name : "Karak Kadrin",
        skills : [
            "Consume Alcohol",
            "Cool",
            "Endurance",
            "Entertain (Storytelling)",
            "Evaluate",
            "Gamble",
            "Intimidate",
            "Language (Khazalid)",
            "Lore (Dwarfs)",
            "Lore (Metallurgy)",
            "Melee (Basic)",
            "Trade (Any)"
        ],
        talents : [
            "Resolute, Strong-minded",
            "Read/Write, Iron Jaw",
            "Magic Resistance",
            "Sturdy",
            "Night Vision"
        ]
    },
    config.subspecies.dwarf["karakizor-rm"] = {
        name : "Karak Izor",
        skills : [
            "Consume Alcohol",
            "Climb",
            "Cool",
            "Endurance",
            "Entertain (Storytelling)",
            "Evaluate",
            "Language (Khazalid)",
            "Lore (Dwarfs)",
            "Lore (Geology)",
            "Melee (Basic)",
            "Outdoor Survival",
            "Trade (Any)"
        ],
        talents : [
            "Resolute, Enclosed FIghter",
            "Read/Write, Relentless",
            "Magic Resistance",
            "Sturdy",
            "Night Vision"
        ]
    },
    config.subspecies.dwarf["zhufbar-rm"] = {
        name : "Zhufbar",
        skills : [
            "Consume Alcohol",
            "Cool",
            "Endurance",
            "Entertain (Storytelling)",
            "Evaluate",
            "Language (Khazalid)",
            "Lore (Dwarfs)",
            "Lore (Engineering)",
            "Lore (Geology)",
            "Lore (Metallurgy)",
            "Melee (Basic)",
            "Trade (Any)"
        ],
        talents : [
            "Strong-minded, Tinker",
            "Read/Write, Relentless",
            "Magic Resistance",
            "Sturdy",
            "Night Vision"
        ]
    },
    config.subspecies.dwarf["karaknorn-rm"] = {
        name : "Karak Norn",
        skills : [
            "Consume Alcohol",
            "Climb",
            "Cool",
            "Endurance",
            "Entertain (Storytelling)",
            "Evaluate",
            "Language (Khazalid)",
            "Lore (Dwarfs)",
            "Melee (Basic)",
            "Perception",
            "Ranged (Crossbow)",
            "Trade (Any)"
        ],
        talents : [
            "Resolute, Stone Soup",
            "Read/Write, Relentless",
            "Magic Resistance",
            "Sturdy",
            "Night Vision"
        ]
    },
    config.subspecies.dwarf["dimperial-rm"] = {
        name : "Imperial",
        skills : [
            "Consume Alcohol",
            "Cool",
            "Endurance",
            "Entertain (Storytelling)",
            "Evaluate",
            "Intimidate",
            "Language (Khazalid)",
            "Lore (Dwarfs)",
            "Lore (Geology)",
            "Lore (Metallurgy)",
            "Melee (Basic)",
            "Trade (Any)"
        ],
        talents : [
            "Resolute, Strong-minded",
            "Read/Write, Relentless",
            "Magic Resistance",
            "Sturdy",
            "Night Vision"
        ]
    }
mergeObject(game.wfrp4e.config, config)
})