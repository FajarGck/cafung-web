import React, { useState } from 'react'
import ComentarCard from './ComentarCard'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import profilePictures from '../assets/dummy-profile.png'
import gwen from '../assets/dummy-profile2.png'

const comentarSchema = z.object({
    comentarName: z.string().max(10),
    comentarRating: z.coerce.number().positive().min(3).max(5),
    comentarMessages: z.string().nonempty(),
    comentarImage: z.any()
})

function FeedBack() {
    const { register, formState, handleSubmit, setValue, reset } = useForm({
        resolver: zodResolver(comentarSchema)
    })

    const [ dataComentar, setDataComentar ] = useState([
        {comentarName: "Gwen", comentarRating: 4, comentarMessages: "Ini tempatnya nyaman banget aku jadi sering apalagi buat ngerjain tugas", comentarImage: gwen},
        {comentarName: "John Wick", comentarRating: 3, comentarMessages: "Sebenernya tempat nya enak tapi kadang penuh jadi bingung duduk dimana"},
    ])
    const dataComentarSorted = [...dataComentar].reverse()
    const [ imagePreview, setImagePreview ] = useState(profilePictures)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            setValue("comentarImage", reader.result)
        };
        reader.readAsDataURL(file);
        }
  };

    const submitHandler = (data) => {
        setDataComentar((prevData) => [...prevData, {
            comentarName: data.comentarName,
            comentarRating: data.comentarRating,
            comentarMessages: data.comentarMessages,
            comentarImage: data.comentarImage
        }])
        setImagePreview(profilePictures)
        reset()
    }

  return (
    <>

    <section id='feedback' className='feedback pb-10 px-2 scroll-m-10'>
        <h3 className="text-white bg-base-color p-3 rounded-3xl max-w-md font-extrabold text-4xl mx-auto text-center w-fit my-4 md:my-8">Give Feedback to Imporve our Service😊😊</h3>
       <div className="comentar-form mx-auto w-[85%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 rounded-lg bg-base-color">
             <form onSubmit={handleSubmit(submitHandler)} className='p-4 text-white space-y-2 w-full'>
                <div className="image w-full flex flex-col justify-center items-center gap-2">
                    <img
                        src={imagePreview}
                        alt="Profile Preview"
                        className="w-20 h-20 rounded-full aspect-square object-cover object-center md:w-20 md:h-20 lg:w-52 lg:h-52"
                        />
                        <label className="cursor-pointer max-w-sm text-xs text-white border border-white font-bold p-1 rounded-lg">
                        upload😋
                        <input
                        type="file"
                        accept="image/*"
                        className="w-fit hidden rounded-md bg-transparent focus:ring-2 focus:ring-blue-500 p-2"
                        onChange={handleImageChange}
                        />
                        </label>

                </div>
                <label className='block text-sm font-semibold'>Nama: </label>
                <input type="text" className='w-full mt-1 border text-black font-medium px-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500'
                    {...register("comentarName")}
                />
                {formState.errors.comentarName && (
                <span className='text-red-600 text-sm'>{formState.errors.comentarName.message}</span>
                )}    
                <label className='block text-sm font-semibold'>Rating 1 - 5 : </label>
                <input type="number" className='w-full mt-1 border text-black font-medium px-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500'
                    {...register("comentarRating")}
                />
                {formState.errors.comentarRating && (
                <span className='text-red-600 text-sm'>{formState.errors.comentarRating.message}</span>
                )}    
                <label className='block text-sm font-semibold'>Messages: </label>
                <input type="text" className='w-full text-wrap border text-black font-medium px-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500'
                    {...register("comentarMessages")}
                />
                {formState.errors.comentarMessages && (
                <span className='text-red-600 text-sm'>{formState.errors.comentarMessages.message}</span>
                )}    
                <button type='submit' className='w-full py-2 text-xl text-white font-bold bg-transparent border rounded-lg hover:bg-white hover:text-black transition'>
                    Submit
                </button>
            </form>
            <div className="map w-full bg-base-color p-4 h-full">
                <h3 className="text-xl text-white text-center bg-base-color font-semibold p-2 lg:text-4xl"> <i className="fa-solid fa-location-dot fa-lg"></i> Our location</h3>
                <iframe className="w-full h-[85%] rounded-lg pb-2" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d588.1495639185309!2d109.23129638265347!3d-7.4005454272245625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655f9e9fe9a9ad%3A0x31ff43666a49235b!2sCAFE%20UNGU!5e0!3m2!1sen!2sid!4v1725177397086!5m2!1sen!2sid" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
       </div>
        <div className="container h-fit min-w-full bg-white pt-6 flex flex-wrap gap-5 justify-center">
           {dataComentarSorted.map((data, index) => (
            <ComentarCard 
                key={index}
                comentarName={data.comentarName}
                rating={data.comentarRating}
                comentarMessages={data.comentarMessages}
                comentarImage={data.comentarImage}
            />
           ))}
        </div>
    </section>
    </>
  )
}

export default FeedBack