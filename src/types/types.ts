export type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: any;
  abv: any;
  ibu: any;
  target_fg: any;
  target_og: any;
  ebc: any;
  srm: any;
  ph: any;
  attenuation_level: any;
  volume: Volume;
  boil_volume: Volume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};

type Ingredients = {
  malt: Malt[];
  hops: Hop[];
  yeast: string | null;
};

type Hop = {
  name: string;
  amount: Volume;
  add: string;
  attribute: string;
};

type Malt = {
  name: string;
  amount: Volume;
};

type Method = {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist?: any;
};

type Fermentation = {
  temp: Volume;
};

type MashTemp = {
  temp: Volume;
  duration: any;
};

type Volume = {
  value: any;
  unit: string;
};
