import React from 'react';
import ModalStores from './ModalStores';
import { useShowModal } from '../hooks/useShowModal';
import { useFetchStoresDetail } from '../hooks/stalls/useFetchStores';


function StoresCard(props) {
    const { stallId, 
            stallName, 
            stallOwner, 
            stallContact, 
            stallImg } = props;
    const { isShow, handleShowModal } = useShowModal();
    const { data: storeResponse, isLoading, isError } = useFetchStoresDetail(stallId);
    const store = storeResponse?.data || [];
    const storeProducts = store.products|| [];
    if (isLoading) return <p className="text-center text-gray-500">Loading stalls...</p>;
    if (isError) return <p className="text-center text-red-500">Error: {isError}</p>;


  return (
    <>
      <div id={stallId} className="card-stall w-40 h-52 border bg-base-color mt-14 p-2 rounded-2xl flex flex-col justify-center items-center content-center space-y-1 lg:w-64 lg:h-72">
        <img className="stall-img h-auto w-[80%] object-center border rounded-t-3xl mt-[-50px]" src={stallImg} alt="stall-img" />
        <h3 className="text-lg font-semibold text-center text-white lg:text-xl">{stallName}</h3>
        <h3 className="text-sm text-center font-semibold text-white lg:text-lg"><i className="fa-solid fa-user"></i> {stallOwner}</h3>
        <p className="text-sm text-center font-semibold text-white lg:text-lg"><i className="fa-brands fa-whatsapp"></i> {stallContact}</p>
        { isLoading ? (
          <p className="text-center text-gray-500">Loading stalls...</p>
        ) : (
          <button onClick={handleShowModal} className={`stall-btn bg-transparent text-sm text-white border-2  w-fit rounded-3xl py-2 px-4 font-semibold hover:bg-white hover:text-black`}>
              <p>MENU</p>
          </button>
        )}
      </div>
      <ModalStores 
      isShow={isShow} 
      handleShowModal={handleShowModal} 
      stallName={stallName}
      stallOwner={stallOwner}
      stallImg={stallImg}
      stallKontak={stallContact}
      listProduct={storeProducts}
      />

    </>
  )
}

export default StoresCard