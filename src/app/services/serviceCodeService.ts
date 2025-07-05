const labelsToCodes = {
  "Dark Brotherhood": "DB",
  "Fighters Guild": "FG",
  "Mages Guild": "MG",
  "Thieves Guild": "TG",
  "Alchemists": "Alc",
  "Armorers": "Arm",
  "Banks": "Ban",
  "Bookstores": "Boo",
  "Clothing Stores": "Clo",
  "General Stores": "Gen",
  "Gem Stores": "Gem",
  "Libraries": "Lib",
  "Pawn Shops": "Paw",
  "Weapon Smiths": "Wea",
  "Akatosh Chantry": "Akatosh",
  "Order of Arkay": "Arkay",
  "House of Dibella": "Dibella",
  "School of Julianos": "Julianos",
  "Temple of Kynareth": "Kyn",
  "Benevolence of Mara": "Mara",
  "Temple of Stendarr": "Stendarr",
  "Resolution of Z'en": "Zen",
  "Host of the Horn": "HH",
  "Knights of the Dragon": "KD",
  "Knights of the Flame": "KF",
  "Knights of the Hawk": "KH",
  "Knights of the Owl": "KO",
  "Knights of the Rose": "KR",
  "Knights of the Wheel": "KW",
  "Order of the Candle": "OC",
  "Order of the Raven": "OR",
  "Order of the Scarab": "OS"
}

const codesToLabels = {
  "DB": "Dark Brotherhood",
  "FG": "Fighters Guild",
  "MG": "Mages Guild",
  "TG": "Thieves Guild",
  "Alc": "Alchemists",
  "Arm": "Armorers",
  "Ban": "Banks",
  "Boo": "Bookstores",
  "Clo": "Clothing Stores",
  "Gen": "General Stores",
  "Gem": "Gem Stores",
  "Lib": "Libraries",
  "Paw": "Pawn Shops",
  "Wea": "Weapon Smiths",
  "Akatosh": "Akatosh Chantry",
  "Arkay": "Order of Arkay",
  "Dibella": "House of Dibella",
  "Julianos": "School of Julianos",
  "Kyn": "Temple of Kynareth",
  "Mara": "Benevolence of Mara",
  "Stendarr": "Temple of Stendarr",
  "Zen": "Resolution of Z'en",
  "HH": "Host of the Horn",
  "KD": "Knights of the Dragon",
  "KF": "Knights of the Flame",
  "KH": "Knights of the Hawk",
  "KO": "Knights of the Owl",
  "KR": "Knights of the Rose",
  "KW": "Knights of the Wheel",
  "OC": "Order of the Candle",
  "OR": "Order of the Raven",
  "OS": "Order of the Scarab"
};


export const transformServiceLabelsToServiceCode = (services: string[]): string[] => {
  let serviceCodes: string[] = [];
  // @ts-ignore
  serviceCodes = services.map(ser => labelsToCodes[ser]);
  return serviceCodes;
}

export const transformServiceCodesToServiceLabels = (codes: string[]): string[] => {
  let serviceLabels: string[] = [];
  // @ts-ignore
  serviceLabels = codes.map(code => codesToLabels[code]);
  return serviceLabels;
}
