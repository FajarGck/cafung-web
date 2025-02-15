import { useQueryClient } from '@tanstack/react-query'
import { useDeleteProduct } from '../hooks/products/useFetchProducts'
import DoubleButton from './DoubleButton'
import Swal from 'sweetalert2'

function ProductCard(props) {
    const { productId, 
            productName, 
            productPrice, 
            productDesc, 
            productRate, 
            productImage,
            isShowBtn,
            handleEdit } = props
    const queryClient = useQueryClient()
    const { mutate: deleteProduct } = useDeleteProduct({
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
            Swal.fire({
                title: 'Product Deleted!🙂‍↕️',
                icon: 'success'
            })
        }
    })

    const handleDelete = (data) => {
        Swal.fire({
            title: 'Are you Sure want to delete this?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'blue',
            cancelButtonColor: 'red'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(data)
            }
        })
    }


  return (
   <>
    
     <div id={productId} className="card-menu w-40 h-52 border bg-base-color mt-20 p-2 rounded-2xl flex flex-col justify-center items-center content-center lg:w-72 lg:h-80">
        <img className="menu-img h-auto w-[100%] lg:w-[85%] object-center border rounded-t-3xl mt-[-100px]" src={productImage} alt="menu-img" />
        <div className="bintang">
            {
                Array.from({ length: productRate}).map((value, index) => (
                    <i key={index} className="fas fa-star text-yellow-400"></i>
                ))
            }
        </div>
        <h3 className="text-sm text-center font-bold text-white lg:text-lg">{productName}</h3>
        <h3 className="text-xl font-semibold text-white lg:text-2xl">Rp. {productPrice}</h3>
        <p className="text-xs h-10 text-white text-center font-semibold lg:text-base">{productDesc}</p>
        {isShowBtn && <DoubleButton handleButton1={() => handleEdit(productId)} handleButton2={() => handleDelete(productId)} buttonTitle1={"Edit"} buttonTitle2={"Delete"}/>}
    </div>
   </>
    
  )
}

export default ProductCard