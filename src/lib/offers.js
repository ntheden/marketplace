import axios from 'axios';

import { consts } from '../config';

const mktplace = `${consts.apiEndpoint}/@bitcoinp2pmarketplace`;

const getOfferById = async (offerId: number) => {
  try {
    return await axios.get(`${mktplace}?msg_id=${offerId}`);
  } catch(err) {
    console.log(err);
  }
};

const offersCacheMap: Map<number, Promise> = new Map();

export const getOffer = (offerId: number) => {
  if (!offersCacheMap.has(offerId)) {
    offersCacheMap.set(offerId, getOfferById(offerId));
  }
  return offersCacheMap.get(offerId);
};


const getApi = async (api) => {
  try {
    return await axios.get(`${mktplace}/${api}`);
  } catch(err) {
    console.log(err);
  }
};

const apiCacheMap: Map<string, Promise> = new Map();

export const getAllOfferIds = async () => {
  if (!apiCacheMap.has(mktplace)) {
    apiCacheMap.set(mktplace, getApi(mktplace));
  }
  // This needs a timeout, maybe 1-2 minutes good enough
  console.log(mktplace, "fullfilled by cache");
  return apiCacheMap.get(mktplace);
};
