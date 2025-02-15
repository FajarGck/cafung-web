import React from 'react'
import profilePicture from '../assets/dummy-profile.png'


function ComentarCard(props) {
    const { comentarName = "Anonymus", 
            rating = 5 , 
            comentarMessages, 
            comentarImage = profilePicture } = props
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  return (
     <div className="comentar-card max-w-xs lg:max-w-sm w-full mx-4 flex flex-col p-2 md:p-4 bg-base-color rounded-lg">
        <div className="comentar-head flex justify-between ">
            <div className="commentar-title flex space-x-2 ">
                <img src={comentarImage} alt="profile-picture" className='w-12 h-12 rounded-full object-cover object-center' />
                <div className="comentar-title gap-0 space-y-0 leading-none flex flex-col">
                    <p className='text-xl text-white font-bold md:text-2xl'>{comentarName}</p>
                    <div className="bintang w-fit h-fit ">
                        {
                            Array.from({ length: rating}).map((value, index) => (
                                <i key={index} className="fas fa-star text-xs text-yellow-400"></i>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='text-sm self-start text-white italic lg:text-2xl'> {formattedDate}</div>
        </div>
        <div className="comentar-messages bg-white px-4 py-2 my-2 ml-10 text-black rounded-r-xl rounded-bl-xl">
            <p className='text-lg md-text-xl tracking-tight font-semibolf leading-none'>{comentarMessages}</p>
        </div>
    </div>
  )
}

export default ComentarCard