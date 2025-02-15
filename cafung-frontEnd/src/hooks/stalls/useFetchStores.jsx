import { useQuery } from '@tanstack/react-query'
import { getStalls, getStallsDetail } from '../../api/stall';


export function useFetchStores() {
  return useQuery({
    queryKey: ['stalls'],
    queryFn: getStalls
  })
}

export function useFetchStoresDetail(storeId) {
  return useQuery({
    queryKey: ['stallsDetail', storeId],
    queryFn:  () => getStallsDetail(storeId),
  })
}

