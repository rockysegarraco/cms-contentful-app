import React from 'react'

const Modal = ({ children, width }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-30 h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className={`bg-white  rounded-3xl  ${width ? width : 'w-[906px]'}`}>
        <div className="flex border-[#D7E7EB] items-start justify-between border-b p-2">

          <div className="block px-4 py-2">
            <h5 className="text-3xl font-medium leading-normal text-secondary">
              Update content
            </h5>
          </div>

        </div>
        {children}

      </div>
    </div>
  )
}

export default Modal