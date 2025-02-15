import { axiosInstance } from "../../api/axios" 
import { useQuery } from "@tanstack/react-query"

export function useFetchCategories() {
  return useQuery({
    queryKey: ['category'],
    queryFn: async () => {
        const categoryResponse = await axiosInstance.get('/categories')
        return categoryResponse?.data || [];
    }
  })
}
