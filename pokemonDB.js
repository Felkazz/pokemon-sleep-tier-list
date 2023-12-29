const pokemonDB = [
	{
		Pokemon: "Bulbasaur",
		Specialty: "Ingredients",
		MainSkill: "Ingredient Magnet S",
		Berry: "Durin",
		Ingredients: "Honey/Tomato/Potato",
		Tier: "C+",
		Order: 80,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/001.png"
	},
	{
		Pokemon: "Ivysaur",
		Specialty: "Ingredients",
		MainSkill: "Ingredient Magnet S",
		Berry: "Durin",
		Ingredients: "Honey/Tomato/Potato",
		Tier: "B",
		Order: 53,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/002.png"
	},
	{
		Pokemon: "Venusaur",
		Specialty: "Ingredients",
		MainSkill: "Ingredient Magnet S",
		Berry: "Durin",
		Ingredients: "Honey/Tomato/Potato",
		Tier: "A-",
		Order: 31,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/003.png"
	},
	{
		Pokemon: "Charmander",
		Specialty: "Ingredients",
		MainSkill: "Ingredient Magnet S",
		Berry: "Leppa",
		Ingredients: "Sausage/Ginger/Herb",
		Tier: "B-",
		Order: 64,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/004.png"
	},
	{
		Pokemon: "Charmeleon",
		Specialty: "Ingredients",
		MainSkill: "Ingredient Magnet S",
		Berry: "Leppa",
		Ingredients: "Sausage/Ginger/Herb",
		Tier: "B+",
		Order: 42,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/005.png"
	},
	{
		Pokemon: "Charizard",
		Specialty: "Ingredients",
		MainSkill: "Ingredient Magnet S",
		Berry: "Leppa",
		Ingredients: "Sausage/Ginger/Herb",
		Tier: "A+",
		Order: 13,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/006.png"
	},
	{
		Pokemon: "Squirtle",
		Specialty: "Ingredients",
		MainSkill: "Ingredient Magnet S",
		Berry: "Oran",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "C+",
		Order: 81,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/007.png"
	},
	{
		Pokemon: "Wartortle",
		Specialty: "Ingredients",
		MainSkill: "Ingredient Magnet S",
		Berry: "Oran",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "B",
		Order: 54,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/008.png"
	},
	{
		Pokemon: "Blastoise",
		Specialty: "Ingredients",
		MainSkill: "Ingredient Magnet S",
		Berry: "Oran",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "A-",
		Order: 32,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/009.png"
	},
	{
		Pokemon: "Caterpie",
		Specialty: "Berries",
		MainSkill: "Ingredient Magnet S",
		Berry: "Lum",
		Ingredients: "Honey/Tomato/Soybeans",
		Tier: "C+",
		Order: 82,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/010.png"
	},
	{
		Pokemon: "Metapod",
		Specialty: "Berries",
		MainSkill: "Ingredient Magnet S",
		Berry: "Lum",
		Ingredients: "Honey/Tomato/Soybeans",
		Tier: "B-",
		Order: 65,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/011.png"
	},
	{
		Pokemon: "Butterfree",
		Specialty: "Berries",
		MainSkill: "Ingredient Magnet S",
		Berry: "Lum",
		Ingredients: "Honey/Tomato/Soybeans",
		Tier: "S-",
		Order: 7,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/012.png"
	},
	{
		Pokemon: "Rattata",
		Specialty: "Berries",
		MainSkill: "Charge Energy S",
		Berry: "Persim",
		Ingredients: "Apple/Soybeans/Sausage",
		Tier: "C",
		Order: 91,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/019.png"
	},
	{
		Pokemon: "Raticate",
		Specialty: "Berries",
		MainSkill: "Charge Energy S",
		Berry: "Persim",
		Ingredients: "Apple/Soybeans/Sausage",
		Tier: "A-",
		Order: 33,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/020.png"
	},
	{
		Pokemon: "Ekans",
		Specialty: "Berries",
		MainSkill: "Charge Energy S",
		Berry: "Chesto",
		Ingredients: "Sausage/Egg/Herb",
		Tier: "C",
		Order: 92,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/023.png"
	},
	{
		Pokemon: "Arbok",
		Specialty: "Berries",
		MainSkill: "Charge Energy S",
		Berry: "Chesto",
		Ingredients: "Sausage/Egg/Herb",
		Tier: "B",
		Order: 55,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/024.png"
	},
	{
		Pokemon: "Pichu",
		Specialty: "Berries",
		MainSkill: "Charge Strength S",
		Berry: "Grepa",
		Ingredients: "Apple/Ginger/Egg",
		Tier: "C+",
		Order: 83,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/172.png"
	},
	{
		Pokemon: "Pikachu",
		Specialty: "Berries",
		MainSkill: "Charge Strength S",
		Berry: "Grepa",
		Ingredients: "Apple/Ginger/Egg",
		Tier: "A",
		Order: 16,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/025.png"
	},
	{
		Pokemon: "Raichu",
		Specialty: "Berries",
		MainSkill: "Charge Strength S",
		Berry: "Grepa",
		Ingredients: "Apple/Ginger/Egg",
		Tier: "S+",
		Order: 1,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/026.png"
	},
	{
		Pokemon: "Cleffa",
		Specialty: "Berries",
		MainSkill: "Metronome",
		Berry: "Pecha",
		Ingredients: "Apple/Honey/Soybeans",
		Tier: "C-",
		Order: 100,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/173.png"
	},
	{
		Pokemon: "Clefairy",
		Specialty: "Berries",
		MainSkill: "Metronome",
		Berry: "Pecha",
		Ingredients: "Apple/Honey/Soybeans",
		Tier: "B-",
		Order: 66,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/035.png"
	},
	{
		Pokemon: "Clefable",
		Specialty: "Berries",
		MainSkill: "Metronome",
		Berry: "Pecha",
		Ingredients: "Apple/Honey/Soybeans",
		Tier: "A",
		Order: 17,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/036.png"
	},
	{
		Pokemon: "Igglybuff",
		Specialty: "Skills",
		MainSkill: "Energy for Everyone S",
		Berry: "Pecha",
		Ingredients: "Honey/Oil/Cacao",
		Tier: "C-",
		Order: 101,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/174.png"
	},
	{
		Pokemon: "Jigglypuff",
		Specialty: "Skills",
		MainSkill: "Energy for Everyone S",
		Berry: "Pecha",
		Ingredients: "Honey/Oil/Cacao",
		Tier: "B-",
		Order: 67,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/039.png"
	},
	{
		Pokemon: "Wigglytuff",
		Specialty: "Skills",
		MainSkill: "Energy for Everyone S",
		Berry: "Pecha",
		Ingredients: "Honey/Oil/Cacao",
		Tier: "S",
		Order: 4,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/040.png"
	},
	{
		Pokemon: "Diglett",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Figy",
		Ingredients: "Tomato/Leek/Soybeans",
		Tier: "C+",
		Order: 84,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/050.png"
	},
	{
		Pokemon: "Dugtrio",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Figy",
		Ingredients: "Tomato/Leek/Soybeans",
		Tier: "A",
		Order: 18,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/051.png"
	},
	{
		Pokemon: "Meowth",
		Specialty: "Skills",
		MainSkill: "Dream Shard Magnet S",
		Berry: "Persim",
		Ingredients: "Milk/Sausage",
		Tier: "F",
		Order: 106,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/052.png"
	},
	{
		Pokemon: "Persian",
		Specialty: "Skills",
		MainSkill: "Dream Shard Magnet S",
		Berry: "Persim",
		Ingredients: "Milk/Sausage",
		Tier: "B",
		Order: 56,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/053.png"
	},
	{
		Pokemon: "Psyduck",
		Specialty: "Skills",
		MainSkill: "Charge Strength S - Var",
		Berry: "Oran",
		Ingredients: "Cacao/Apple/Sausage",
		Tier: "F",
		Order: 107,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/054.png"
	},
	{
		Pokemon: "Golduck",
		Specialty: "Skills",
		MainSkill: "Charge Strength S - Var",
		Berry: "Oran",
		Ingredients: "Cacao/Apple/Sausage",
		Tier: "B",
		Order: 57,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/055.png"
	},
	{
		Pokemon: "Mankey",
		Specialty: "Berries",
		MainSkill: "Charge Strength S - Var",
		Berry: "Cheri",
		Ingredients: "Sausage/Mushroom/Honey",
		Tier: "B-",
		Order: 68,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/056.png"
	},
	{
		Pokemon: "Primeape",
		Specialty: "Berries",
		MainSkill: "Charge Strength S - Var",
		Berry: "Cheri",
		Ingredients: "Sausage/Mushroom/Honey",
		Tier: "A",
		Order: 19,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/057.png"
	},
	{
		Pokemon: "Growlithe",
		Specialty: "Skills",
		MainSkill: "Extra Helpful S",
		Berry: "Leppa",
		Ingredients: "Herb/Sausage/Milk",
		Tier: "C",
		Order: 93,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/058.png"
	},
	{
		Pokemon: "Arcanine",
		Specialty: "Skills",
		MainSkill: "Extra Helpful S",
		Berry: "Leppa",
		Ingredients: "Herb/Sausage/Milk",
		Tier: "A",
		Order: 20,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/059.png"
	},
	{
		Pokemon: "Bellsprout",
		Specialty: "Ingredients",
		MainSkill: "Charge Energy S",
		Berry: "Durin",
		Ingredients: "Tomato/Potato/Leek",
		Tier: "C-",
		Order: 102,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/069.png"
	},
	{
		Pokemon: "Weepinbell",
		Specialty: "Ingredients",
		MainSkill: "Charge Energy S",
		Berry: "Durin",
		Ingredients: "Tomato/Potato/Leek",
		Tier: "B-",
		Order: 69,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/070.png"
	},
	{
		Pokemon: "Victreebel",
		Specialty: "Ingredients",
		MainSkill: "Charge Energy S",
		Berry: "Durin",
		Ingredients: "Tomato/Potato/Leek",
		Tier: "A",
		Order: 21,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/071.png"
	},
	{
		Pokemon: "Geodude",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S - Var",
		Berry: "Sitrus",
		Ingredients: "Soybeans/Potato/Mushroom",
		Tier: "F",
		Order: 108,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/074.png"
	},
	{
		Pokemon: "Graveler",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S - Var",
		Berry: "Sitrus",
		Ingredients: "Soybeans/Potato/Mushroom",
		Tier: "B-",
		Order: 70,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/075.png"
	},
	{
		Pokemon: "Golem",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S - Var",
		Berry: "Sitrus",
		Ingredients: "Soybeans/Potato/Mushroom",
		Tier: "B+",
		Order: 43,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/076.png"
	},
	{
		Pokemon: "Slowpoke",
		Specialty: "Skills",
		MainSkill: "Energizing Cheer S",
		Berry: "Oran",
		Ingredients: "Cacao/Tail/Tomato",
		Tier: "F",
		Order: 109,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/079.png"
	},
	{
		Pokemon: "Slowbro",
		Specialty: "Skills",
		MainSkill: "Energizing Cheer S",
		Berry: "Oran",
		Ingredients: "Cacao/Tail/Tomato",
		Tier: "B+",
		Order: 44,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/080.png"
	},
	{
		Pokemon: "Slowking",
		Specialty: "Skills",
		MainSkill: "Energizing Cheer S",
		Berry: "Oran",
		Ingredients: "Cacao/Tail/Tomato",
		Tier: "A-",
		Order: 34,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/199.png"
	},
	{
		Pokemon: "Magnemite",
		Specialty: "Skills",
		MainSkill: "Cooking Power-Up S",
		Berry: "Belue",
		Ingredients: "Oil/Herb",
		Tier: "F",
		Order: 110,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/081.png"
	},
	{
		Pokemon: "Magneton",
		Specialty: "Skills",
		MainSkill: "Cooking Power-Up S",
		Berry: "Belue",
		Ingredients: "Oil/Herb",
		Tier: "B-",
		Order: 71,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/082.png"
	},
	{
		Pokemon: "Magnezone",
		Specialty: "Skills",
		MainSkill: "Cooking Power-Up S",
		Berry: "Belue",
		Ingredients: "Oil/Herb",
		Tier: "A",
		Order: 22,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/462.png"
	},
	{
		Pokemon: "Doduo",
		Specialty: "Berries",
		MainSkill: "Charge Energy S",
		Berry: "Pamtre",
		Ingredients: "Soybeans/Cacao/Sausage",
		Tier: "B",
		Order: 58,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/084.png"
	},
	{
		Pokemon: "Dodrio",
		Specialty: "Berries",
		MainSkill: "Charge Energy S",
		Berry: "Pamtre",
		Ingredients: "Soybeans/Cacao/Sausage",
		Tier: "S+",
		Order: 2,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/085.png"
	},
	{
		Pokemon: "Gastly",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Bluk",
		Ingredients: "Herb/Mushroom/Oil",
		Tier: "B",
		Order: 59,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/092.png"
	},
	{
		Pokemon: "Haunter",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Bluk",
		Ingredients: "Herb/Mushroom/Oil",
		Tier: "A",
		Order: 23,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/093.png"
	},
	{
		Pokemon: "Gengar",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Bluk",
		Ingredients: "Herb/Mushroom/Oil",
		Tier: "S+",
		Order: 3,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/094.png"
	},
	{
		Pokemon: "Onix",
		Specialty: "Berries",
		MainSkill: "Ingredient Magnet S",
		Berry: "Sitrus",
		Ingredients: "Tomato/Sausage/Potato",
		Tier: "A-",
		Order: 35,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/095.png"
	},
	{
		Pokemon: "Steelix",
		Specialty: "Berries",
		MainSkill: "Ingredient Magnet S",
		Berry: "Belue",
		Ingredients: "Tomato/Sausage/Potato",
		Tier: "A",
		Order: 24,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/208.png"
	},
	{
		Pokemon: "Cubone",
		Specialty: "Berries",
		MainSkill: "Charge Energy S",
		Berry: "Figy",
		Ingredients: "Ginger/Cacao",
		Tier: "C",
		Order: 94,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/104.png"
	},
	{
		Pokemon: "Marowak",
		Specialty: "Berries",
		MainSkill: "Charge Energy S",
		Berry: "Figy",
		Ingredients: "Ginger/Cacao",
		Tier: "B+",
		Order: 45,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/105.png"
	},
	{
		Pokemon: "Kangaskhan",
		Specialty: "Ingredients",
		MainSkill: "Ingredient Magnet S",
		Berry: "Persim",
		Ingredients: "Ginger/Potato/Soybeans",
		Tier: "A-",
		Order: 36,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/115.png"
	},
	{
		Pokemon: "Mime Jr.",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Mago",
		Ingredients: "Tomato/Potato/Leek",
		Tier: "C+",
		Order: 85,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/439.png"
	},
	{
		Pokemon: "Mr. Mime",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Mago",
		Ingredients: "Tomato/Potato/Leek",
		Tier: "A",
		Order: 25,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/122.png"
	},
	{
		Pokemon: "Pinsir",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Lum",
		Ingredients: "Honey/Apple/Sausage",
		Tier: "A",
		Order: 26,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/127.png"
	},
	{
		Pokemon: "Ditto",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Persim",
		Ingredients: "Oil/Leek/Tail",
		Tier: "A",
		Order: 27,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/132.png"
	},
	{
		Pokemon: "Eevee",
		Specialty: "Skills",
		MainSkill: "Ingredient Magnet S",
		Berry: "Persim",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "C",
		Order: 95,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/133.png"
	},
	{
		Pokemon: "Vaporeon",
		Specialty: "Skills",
		MainSkill: "Ingredient Magnet S",
		Berry: "Oran",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "B",
		Order: 60,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/134.png"
	},
	{
		Pokemon: "Jolteon",
		Specialty: "Skills",
		MainSkill: "Extra Helpful S",
		Berry: "Grepa",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "A",
		Order: 28,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/135.png"
	},
	{
		Pokemon: "Flareon",
		Specialty: "Skills",
		MainSkill: "Cooking Power-Up S",
		Berry: "Leppa",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "S-",
		Order: 10,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/136.png"
	},
	{
		Pokemon: "Espeon",
		Specialty: "Skills",
		MainSkill: "Charge Strength M",
		Berry: "Mago",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "S-",
		Order: 8,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/196.png"
	},
	{
		Pokemon: "Umbreon",
		Specialty: "Skills",
		MainSkill: "Charge Energy S",
		Berry: "Wiki",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "B-",
		Order: 72,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/197.png"
	},
	{
		Pokemon: "Leafeon",
		Specialty: "Skills",
		MainSkill: "Energizing Cheer S",
		Berry: "Durin",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "B",
		Order: 61,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/470.png"
	},
	{
		Pokemon: "Glaceon",
		Specialty: "Skills",
		MainSkill: "Cooking Power-Up S",
		Berry: "Rawst",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "B+",
		Order: 46,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/471.png"
	},
	{
		Pokemon: "Sylveon",
		Specialty: "Skills",
		MainSkill: "Energy for Everyone S",
		Berry: "Pecha",
		Ingredients: "Milk/Cacao/Sausage",
		Tier: "S-",
		Order: 9,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/700.png"
	},
	{
		Pokemon: "Chikorita",
		Specialty: "Berries",
		MainSkill: "Charge Strength S - Var",
		Berry: "Durin",
		Ingredients: "Cacao/Honey/Leek",
		Tier: "B-",
		Order: 73,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/152.png"
	},
	{
		Pokemon: "Bayleef",
		Specialty: "Berries",
		MainSkill: "Charge Strength S - Var",
		Berry: "Durin",
		Ingredients: "Cacao/Honey/Leek",
		Tier: "B+",
		Order: 48,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/153.png"
	},
	{
		Pokemon: "Meganium",
		Specialty: "Berries",
		MainSkill: "Charge Strength S - Var",
		Berry: "Durin",
		Ingredients: "Cacao/Honey/Leek",
		Tier: "A+",
		Order: 14,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/154.png"
	},
	{
		Pokemon: "Cyndaquil",
		Specialty: "Berries",
		MainSkill: "Charge Strength S - Var",
		Berry: "Leppa",
		Ingredients: "Ginger/Herb/Oil",
		Tier: "B",
		Order: 62,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/155.png"
	},
	{
		Pokemon: "Quilava",
		Specialty: "Berries",
		MainSkill: "Charge Strength S - Var",
		Berry: "Leppa",
		Ingredients: "Ginger/Herb/Oil",
		Tier: "A-",
		Order: 37,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/156.png"
	},
	{
		Pokemon: "Typhlosion",
		Specialty: "Berries",
		MainSkill: "Charge Strength S - Var",
		Berry: "Leppa",
		Ingredients: "Ginger/Herb/Oil",
		Tier: "S",
		Order: 6,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/157.png"
	},
	{
		Pokemon: "Totodile",
		Specialty: "Berries",
		MainSkill: "Charge Strength S - Var",
		Berry: "Oran",
		Ingredients: "Sausage/Oil",
		Tier: "C+",
		Order: 86,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/158.png"
	},
	{
		Pokemon: "Croconaw",
		Specialty: "Berries",
		MainSkill: "Charge Strength S - Var",
		Berry: "Oran",
		Ingredients: "Sausage/Oil",
		Tier: "B",
		Order: 63,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/159.png"
	},
	{
		Pokemon: "Feraligatr",
		Specialty: "Berries",
		MainSkill: "Charge Strength S - Var",
		Berry: "Oran",
		Ingredients: "Sausage/Oil",
		Tier: "A",
		Order: 29,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/160.png"
	},
	{
		Pokemon: "Togepi",
		Specialty: "Skills",
		MainSkill: "Metronome",
		Berry: "Pecha",
		Ingredients: "Egg/Ginger/Cacao",
		Tier: "C-",
		Order: 103,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/175.png"
	},
	{
		Pokemon: "Togetic",
		Specialty: "Skills",
		MainSkill: "Metronome",
		Berry: "Pecha",
		Ingredients: "Egg/Ginger/Cacao",
		Tier: "C+",
		Order: 87,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/176.png"
	},
	{
		Pokemon: "Togekiss",
		Specialty: "Skills",
		MainSkill: "Metronome",
		Berry: "Pecha",
		Ingredients: "Egg/Ginger/Cacao",
		Tier: "A-",
		Order: 38,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/468.png"
	},
	{
		Pokemon: "Mareep",
		Specialty: "Skills",
		MainSkill: "Charge Strength M",
		Berry: "Grepa",
		Ingredients: "Herb/Egg",
		Tier: "C+",
		Order: 88,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/179.png"
	},
	{
		Pokemon: "Flaaffy",
		Specialty: "Skills",
		MainSkill: "Charge Strength M",
		Berry: "Grepa",
		Ingredients: "Herb/Egg",
		Tier: "B+",
		Order: 47,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/180.png"
	},
	{
		Pokemon: "Ampharos",
		Specialty: "Skills",
		MainSkill: "Charge Strength M",
		Berry: "Grepa",
		Ingredients: "Herb/Egg",
		Tier: "S",
		Order: 5,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/181.png"
	},
	{
		Pokemon: "Bonsly",
		Specialty: "Skills",
		MainSkill: "Charge Strength M",
		Berry: "Sitrus",
		Ingredients: "Tomato/Soybeans/Mushroom",
		Tier: "F",
		Order: 111,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/438.png"
	},
	{
		Pokemon: "Sudowoodo",
		Specialty: "Skills",
		MainSkill: "Charge Strength M",
		Berry: "Sitrus",
		Ingredients: "Tomato/Soybeans/Mushroom",
		Tier: "B-",
		Order: 74,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/185.png"
	},
	{
		Pokemon: "Wynaut",
		Specialty: "Skills",
		MainSkill: "Energizing Cheer S",
		Berry: "Mago",
		Ingredients: "Apple/Mushroom/Oil",
		Tier: "F",
		Order: 112,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/360.png"
	},
	{
		Pokemon: "Wobbuffet",
		Specialty: "Skills",
		MainSkill: "Energizing Cheer S",
		Berry: "Mago",
		Ingredients: "Apple/Mushroom/Oil",
		Tier: "B-",
		Order: 75,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/202.png"
	},
	{
		Pokemon: "Heracross",
		Specialty: "Skills",
		MainSkill: "Ingredient Magnet S",
		Berry: "Lum",
		Ingredients: "Honey/Mushroom/Sausage",
		Tier: "A-",
		Order: 39,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/214.png"
	},
	{
		Pokemon: "Houndour",
		Specialty: "Berries",
		MainSkill: "Charge Strength S",
		Berry: "Wiki",
		Ingredients: "Herb/Ginger/Leek",
		Tier: "C",
		Order: 96,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/228.png"
	},
	{
		Pokemon: "Houndoom",
		Specialty: "Berries",
		MainSkill: "Charge Strength S",
		Berry: "Wiki",
		Ingredients: "Herb/Ginger/Leek",
		Tier: "B+",
		Order: 49,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/229.png"
	},
	{
		Pokemon: "Larvitar",
		Specialty: "Ingredients",
		MainSkill: "Charge Energy S",
		Berry: "Sitrus",
		Ingredients: "Ginger/Soybeans/Sausage",
		Tier: "C",
		Order: 97,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/246.png"
	},
	{
		Pokemon: "Pupitar",
		Specialty: "Ingredients",
		MainSkill: "Charge Energy S",
		Berry: "Sitrus",
		Ingredients: "Ginger/Soybeans/Sausage",
		Tier: "B-",
		Order: 76,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/247.png"
	},
	{
		Pokemon: "Tyranitar",
		Specialty: "Ingredients",
		MainSkill: "Charge Energy S",
		Berry: "Wiki",
		Ingredients: "Ginger/Soybeans/Sausage",
		Tier: "A+",
		Order: 15,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/248.png"
	},
	{
		Pokemon: "Slakoth",
		Specialty: "Berries",
		MainSkill: "Ingredient Magnet S",
		Berry: "Persim",
		Ingredients: "Tomato/Honey/Apple",
		Tier: "C",
		Order: 98,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/287.png"
	},
	{
		Pokemon: "Vigoroth",
		Specialty: "Berries",
		MainSkill: "Ingredient Magnet S",
		Berry: "Persim",
		Ingredients: "Tomato/Honey/Apple",
		Tier: "A-",
		Order: 40,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/288.png"
	},
	{
		Pokemon: "Slaking",
		Specialty: "Berries",
		MainSkill: "Ingredient Magnet S",
		Berry: "Persim",
		Ingredients: "Tomato/Honey/Apple",
		Tier: "A-",
		Order: 41,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/289.png"
	},
	{
		Pokemon: "Sableye",
		Specialty: "Skills",
		MainSkill: "Dream Shard Magnet S - Var",
		Berry: "Wiki",
		Ingredients: "Oil/Mushroom",
		Tier: "C+",
		Order: 89,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/302.png"
	},
	{
		Pokemon: "Gulpin",
		Specialty: "Skills",
		MainSkill: "Dream Shard Magnet S - Var",
		Berry: "Chesto",
		Ingredients: "Soybeans/Mushroom",
		Tier: "F",
		Order: 113,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/316.png"
	},
	{
		Pokemon: "Swalot",
		Specialty: "Skills",
		MainSkill: "Dream Shard Magnet S - Var",
		Berry: "Chesto",
		Ingredients: "Soybeans/Mushroom",
		Tier: "C+",
		Order: 90,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/317.png"
	},
	{
		Pokemon: "Swablu",
		Specialty: "Berries",
		MainSkill: "Charge Energy S",
		Berry: "Pamtre",
		Ingredients: "Egg/Soybeans/Apple",
		Tier: "B-",
		Order: 77,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/333.png"
	},
	{
		Pokemon: "Altaria",
		Specialty: "Berries",
		MainSkill: "Charge Energy S",
		Berry: "Yache",
		Ingredients: "Egg/Soybeans/Apple",
		Tier: "B+",
		Order: 50,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/334.png"
	},
	{
		Pokemon: "Shuppet",
		Specialty: "Berries",
		MainSkill: "Charge Strength S",
		Berry: "Bluk",
		Ingredients: "Oil/Ginger/Mushroom",
		Tier: "B-",
		Order: 78,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/353.png"
	},
	{
		Pokemon: "Banette",
		Specialty: "Berries",
		MainSkill: "Charge Strength S",
		Berry: "Bluk",
		Ingredients: "Oil/Ginger/Mushroom",
		Tier: "S-",
		Order: 11,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/354.png"
	},
	{
		Pokemon: "Absol",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Wiki",
		Ingredients: "Cacao/Apple/Mushroom",
		Tier: "S-",
		Order: 12,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/359.png"
	},
	{
		Pokemon: "Spheal",
		Specialty: "Berries",
		MainSkill: "Ingredient Magnet S",
		Berry: "Rawst",
		Ingredients: "Oil/Sausage/Ginger",
		Tier: "C-",
		Order: 104,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/363.png"
	},
	{
		Pokemon: "Sealeo",
		Specialty: "Berries",
		MainSkill: "Ingredient Magnet S",
		Berry: "Rawst",
		Ingredients: "Oil/Sausage/Ginger",
		Tier: "B-",
		Order: 79,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/364.png"
	},
	{
		Pokemon: "Walrein",
		Specialty: "Berries",
		MainSkill: "Ingredient Magnet S",
		Berry: "Rawst",
		Ingredients: "Oil/Sausage/Ginger",
		Tier: "A",
		Order: 30,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/365.png"
	},
	{
		Pokemon: "Riolu",
		Specialty: "Skills",
		MainSkill: "Dream Shard Magnet S",
		Berry: "Cheri",
		Ingredients: "Oil/Potato/Egg",
		Tier: "C",
		Order: 99,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/447.png"
	},
	{
		Pokemon: "Lucario",
		Specialty: "Skills",
		MainSkill: "Dream Shard Magnet S",
		Berry: "Cheri",
		Ingredients: "Oil/Potato/Egg",
		Tier: "B+",
		Order: 51,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/448.png"
	},
	{
		Pokemon: "Croagunk",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Chesto",
		Ingredients: "Oil/Sausage",
		Tier: "C-",
		Order: 105,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/453.png"
	},
	{
		Pokemon: "Toxicroak",
		Specialty: "Ingredients",
		MainSkill: "Charge Strength S",
		Berry: "Chesto",
		Ingredients: "Oil/Sausage",
		Tier: "B+",
		Order: 52,
		Image: "https://www.serebii.net/pokemonsleep/pokemon/icon/454.png"
	}
];