export interface iCard {
  cards: Card[];
}

export interface Card {
  name: string;
  manaCost: string;
  cmc: number;
  colors: (keyof typeof Color)[];
  colorIdentity: (keyof typeof ColorIdentity)[];
  type: string;
  supertypes: string[];
  types: string[];
  subtypes: string[];
  rarity: keyof typeof Rarity;
  set: string;
  setName: string;
  layout: keyof typeof Layout;
  imageUrl: string;
  printings: string[];
  originalText: string;
  originalType: string;
  legalities: BlockLegality[];
  id: string;
}

export interface CardFilter {
  name?: string;
  layout?: string;
  cmc?: number;
  colors?: string;
  colorIdentity?: string;
  type?: string;
  supertypes?: string;
  types?: string;
  subtypes?: string;
  rarity?: string;
  set?: string;
  setName?: string;
  text?: string;
  flavor?: string;
  artist?: string;
  number?: string;
  power?: string;
  toughness?: string;
  loyalty?: number;
  foreignName?: string;
  language?: string;
  gameFormat?: string;
  legality?: keyof typeof Legality;
  page?: number;
  pageSize?: number;
  orderBy?: string;
  random?: boolean;
  contains?: string;
}

export interface BlockLegality {
  format: string;
  legality: keyof typeof Legality;
}

export interface PaginationFilter {
  page?: number;
  pageSize?: number;
}

export interface headers {
  ratelimit: number;
  ratelimitRemain: number;
  totalCount: number;
}

export enum Color {
  White,
  Blue,
  Black,
  Red,
  Green,
}
export enum ColorIdentity {
  W, U, B, R, G,
}
export enum Rarity {
  "Basic Land",
  Common,
  Uncommon,
  "Mythic Rare",
  Timeshifted,
  Masterpiece,
}

export enum Layout {
  normal,
  split,
  flip,
  "double-faced",
  token,
  plane,
  scheme,
  phenomenon,
  leveler,
  vanguard,
}

export enum Legality {
  Legal,
  Banned,
  Restricted,
}
