import axios from "axios";
import { apiSecretKey, jsonbinUrl } from '../enums/commonConst'
import { BannerRestClientInterface } from '../interface/BannersRestClientInterface'

export const apiClient = axios.create({
  baseURL: jsonbinUrl,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "secret-key": apiSecretKey
  },
});

export const API_ROUTE = {
  BANNER: "6203a0f94ce71361b8d48065/7"
}

export async function getBanners(): Promise<BannerRestClientInterface> {
  let rtn = { result: false }
  await apiClient.get<BannerRestClientInterface>(API_ROUTE.BANNER, {})
    .then((res) => {
       rtn = res.data
    })
    .catch((err) => {
      throw err.response?.data
    })
  return rtn
}