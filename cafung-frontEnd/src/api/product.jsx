import { axiosInstance } from "./axios";

export const getProducts = async () => {
    const productResponse = await axiosInstance.get('/products')
    return productResponse?.data || [];
}

export const createProduct = async (formData) => {
    const productResponse = await axiosInstance.post("/products", formData,{
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    return productResponse
}

export const updateProduct = async ({id, formData}) => {
  const { productResponse } = await axiosInstance.patch(`/products/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  return productResponse
}

export const deleteProduct = async (productId) => {
  const { productResponse } = await axiosInstance.delete(`/products/${productId}`)
  return productResponse
}