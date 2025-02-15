import { useQuery, useMutation, } from '@tanstack/react-query'
import { createProduct, getProducts, deleteProduct, updateProduct } from '../../api/product'

export function useFetchProducts() {
   return useQuery({
        queryKey: ['products'],
        queryFn: getProducts,

    })
}

export function useCreateProduct({ onSuccess }) {
  return useMutation({
    mutationFn: createProduct,
    onSuccess,
    mutationKey: ['products']
    
  })
}

export function useUpdateProduct({ onSuccess }) {
  return useMutation({
    mutationFn: updateProduct,
    onSuccess
  })
}

export function useDeleteProduct({ onSuccess }) {
  return useMutation({
    mutationFn : deleteProduct,
    onSuccess,
})}