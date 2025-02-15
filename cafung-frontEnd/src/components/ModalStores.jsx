import React from 'react'

function ModalStores(props) {
    const { stallName, 
            stallOwner, 
            stallImg, 
            stallKontak, 
            isShow, 
            handleShowModal, 
            listProduct } = props;

  return (
    <section className="modal">
         <div id="modal" className={`fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-[998] flex ${isShow ? 'flex' : 'hidden'}`}>
            <div className="bg-base-color h-auto text-white p-2 mb-2 rounded-lg w-[80%] flex flex-col md:grid md:grid-cols-2 md:w-[70%] md:max-h-[90vh] relative">
            <button onClick={handleShowModal}  id="close-btn" className="close-btn absolute top-0 right-0 p-2 cursor-pointer hover:bg-red-600 rounded-lg">
                <p className="text-xlfont-extrabold px-2 rounded-xl hover:bg-red-600"><i className="fa-solid fa-x"></i></p>
            </button>
            <div id="modal-img" className="modal-img my-2 px-2 py-2 items-center md:w-full md:h-fit">
                <img src={stallImg} alt="Warung Image" className=" h-full w-full max-h-40 self-start mx-auto object-center object-cover rounded-3xl md:max-h-60 md:self-center" />
            </div>
            <div className="stall-content w-full h-auto my-2 px-2 py-2 flex flex-col">
                <div id="stall-detail" className="stall-detail flex flex-col gap-1">
                <h3 className="stall-title text-xl font-semibold text-white lg:text-2xl">{stallName}</h3>
                <h3 className="stall-owner textxlg font-semibold text-white lg:text-xl"><i className="fa-solid fa-user"></i> {stallOwner}</h3>
                <p className="stall-contact text-lg font-semibold text-white lg:text-xl"><i className="fa-brands fa-whatsapp"></i> {stallKontak}</p>
                <h3 className="text-xl font-semibold text-white lg:text-2xl">Menu:</h3>
                </div>
                <ul className="list-menu w-full text-lg font-medium flex flex-wrap space-x-2 md: lg:max-w-[70%]">
                    { listProduct && listProduct.length > 0 ? (
                        listProduct.map((product) => (
                        <li key={product.id} className="list text-xs p-0.5 md:text-base">-{product.name}</li>
                    ))
                    ) : (
                        <p className="text-center text-gray-500">Product empty ...</p>
                    )}
                </ul>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ModalStores