import { axiosInstance } from "./axios";

export const getStalls = async () => {
      const storesResponse = await axiosInstance.get('/stores')
      return storesResponse?.data || [];
}

export const getStallsDetail = async (storeId) => {
        const storesDetailResponse = await axiosInstance.get(`/stores/${storeId}/products`)
        return storesDetailResponse?.data || [];
    
}