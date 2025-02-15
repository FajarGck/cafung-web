import React from 'react'

function FilterCard(props) {
    const { filter="All", handleChange } = props;
  return (
    <div className="menuBox">
            <div className="w-fit border border-gray-300 rounded-lg bg-white px-1 mt-6 z-10 text-end flex items-center justify-center">
                <p className='p-0.5 font-bold lg:px-2 lg:m-2'>Filter By : </p> 
                <select value={filter} onChange={handleChange} id="toggleSort" className='text-lg font-bold text-white rounded-lg mx-2 lg:px-4 lg:py-1 lg:m-2 bg-base-color'>
                        <option value="All" className="mr-2"> All</option>
                        <option value="Drink" className="mr-2"> Drink</option> 
                        <option value="Food" className="mr-2"> Food</option>
                </select>
            </div>
        </div>
  )
}

export default FilterCard