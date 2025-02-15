import React from 'react'
import { z } from 'zod';
import { useQueryClient } from '@tanstack/react-query';
import { useCreateProduct } from '../hooks/products/useFetchProducts';
import { useFetchCategories } from '../hooks/categories/useFetchCategories'; 
import { useFetchStores } from '../hooks/stalls/useFetchStores';
import FormProduct from './FormProduct';
import Swal from 'sweetalert2';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const registerProductFormSchema = z.object({
    name: z.string().min(5).max(20).nonempty(),
    description: z.string().min(20).max(50).nonempty(),
    price: z.coerce.number().positive(),
    rate: z.coerce.number().positive().min(3),
    image: z.any(),
    categoryId: z.coerce.number().positive(),
    storeId: z.coerce.number().positive(),
})


function CreateFormProduct() {
    const { data: storesResponse, isLoading : storeLoading, isError : storeError } = useFetchStores();
    const { data : categoryResponse, isLoading : categoryLoading, isError : categoryError } = useFetchCategories();
    const stalls = storesResponse?.data || [];
    const categories = categoryResponse?.data || []
    const queryClient = useQueryClient()
    
    const { mutate : createProduct } = useCreateProduct({
        onSuccess: () => {
             queryClient.invalidateQueries(['products']);
              Swal.fire({
                title: "Product Added 😊",
                icon: 'success'
              })
        }
    })

    const submitHandler = (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("rate", data.rate);
        formData.append("categoryId", data.categoryId);
        formData.append("storeId", data.storeId);

        if (data.image instanceof File) {
            formData.append("image", data.image); // Pastikan file dikirim
        } else {
            // console.error("File tidak valid:", data.image);
            Swal({
              title: 'File Tidak Valid',
              icon: 'error'
            })
        }
        createProduct(formData);

    }

  return (
   <div className='m-2 p-2 flex'>
      <FormProduct 
        onSubmit={submitHandler}
        defaultValues={{ name: '', description: '', price: '', rate: '', categoryId: '', storeId: '' }}
        categories={categories}
        stalls={stalls}
        categoryLoading={categoryLoading}
        categoryError={categoryError}
        storeLoading={storeLoading}
        storeError={storeError}
        schema={registerProductFormSchema}
      />
    </div>

  )
}

export default CreateFormProduct