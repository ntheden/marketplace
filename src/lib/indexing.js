import { Index } from "flexsearch";


export const index: Index = new Index({});
// This is separate from api cache in lib/offers, consider ways
// not to cache separately
export const dataCache = {};


export const addToIndex = (data) => {
  const entry = { id: data.message.id, caption: data.message.caption };
  dataCache[entry.id] = data;
  index.add(entry.id, entry.caption);
};
