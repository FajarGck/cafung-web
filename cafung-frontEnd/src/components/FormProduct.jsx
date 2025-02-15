import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

function FormProduct(props) {
  const { onSubmit, defaultValues, categories, stalls, categoryLoading, categoryError, storeLoading, storeError, schema } = props
  const { register, handleSubmit, formState, setValue, reset, } = useForm({ 
    defaultValues,
    resolver: zodResolver(schema)
   });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('image', file);
    }
  };

  const submitHandler = (data) => {
    onSubmit(data),
    reset()
  }

  return (
    <form
      className='flex flex-col items-center md:items-start w-full max-w-lg space-y-2 p-4 border rounded-lg shadow-lg bg-white'
      onSubmit={handleSubmit(submitHandler)}
    >
      {[
        { label: 'Name', type: 'text', name: 'name' },
        { label: 'Description', type: 'text', name: 'description' },
        { label: 'Price', type: 'number', name: 'price' },
        { label: 'Rate', type: 'number', name: 'rate' },
      ].map((field) => (
        <div key={field.name} className='w-full'>
          <label className='block text-sm font-semibold'>{field.label}:</label>
          <input
            type={field.type}
            {...register(field.name)}
            className='w-full mt-1 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500'
          />
          {formState.errors[field.name] && (
            <span className='text-red-600 text-sm'>{formState.errors[field.name].message}</span>
          )}
        </div>
      ))}

      <div className='w-full'>
        <label className='block text-sm font-semibold'>Category:</label>
        {categoryLoading ? (
          <p>Loading...</p>
        ) : categoryError ? (
          <p className='text-red-600'>Error: {categoryError}</p>
        ) : (
          <select
            {...register('categoryId')}
            className='w-full mt-1 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500'
            defaultValue={''}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        )}
        {formState.errors.categoryId && <span className='text-red-600 text-sm'>{formState.errors.categoryId.message}</span>}
      </div>

      <div className='w-full'>
        <label className='block text-sm font-semibold'>Stalls:</label>
        {storeLoading ? (
          <p>Loading...</p>
        ) : storeError ? (
          <p className='text-red-600'>Error: {storeError}</p>
        ) : (
          <select
            {...register('storeId')}
            className='w-full mt-1 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500'
            defaultValue={''}
          >
            {stalls.map((stall) => (
              <option key={stall.id} value={stall.id}>{stall.name}</option>
            ))}
          </select>
        )}
        {formState.errors.storeId && <span className='text-red-600 text-sm'>{formState.errors.storeId.message}</span>}
      </div>

      <div className='w-full'>
        <label className='block text-sm font-semibold'>Image:</label>
        <input
          onChange={handleImageChange}
          type='file'
          accept='image/*'
          className='w-full mt-1 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500'
        />
        {formState.errors.imgPath && <span className='text-red-600 text-sm'>{formState.errors.imgPath.message}</span>}
      </div>

      <button
        type='submit'
        className='w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition'
      >
        Submit
      </button>
    </form>
  );
}

export default FormProduct;
