import { useState } from 'react'

export function useShowModal() {
    const [ isShow, setIsShow ] = useState(false);

    const handleShowModal = () => {
      setTimeout(() => {
        setIsShow(prevState => (!prevState));
      }, 500)

    }
  return {
    isShow,
    handleShowModal
  }
}
