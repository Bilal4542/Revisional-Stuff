import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronRight, Filter, Plus, Trash2, X } from 'lucide-react'

function App() {

  return (
    <>
      {/* Start of Invoice Header */}
         <div className='flex items-center justify-between'>
      <div className="">
        <h1 className='text-3xl font-bold mb-2'>Invoices</h1>
        <p className='text-slate-700'>There are 0 Total Invoices</p>
      </div>
      <div className="flex items-center space-x-4">
        <Menu as="div" className="relative">
            <Menu.Button className="flex items-center space-x-2 cursor-pointer">
                <Filter size={20}/>
                <span>Filter by Status</span>
            </Menu.Button>
            <Menu.Items className='absolute right-0 mt-2 w-48 shadow-lg p-2 z-10'>
              <Menu.Item>
                <button className='w-full text-left px-4 py-2 rounded-lg capitalize bg-blue-500 text-white'>
                  status
                </button>
              </Menu.Item>
            </Menu.Items>
        </Menu>

        <button type='button' className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 cursor-pointer transition-all ease-in-out duration-300'>
          <div className="bg-white rounded-full p-2">
            <Plus size={16} className='text-blue-500' />
          </div>
          <span>New Invoice</span>
        </button>

      </div>
    </div>
      {/* End of Invoice Header */}
      {/* Start of Invoice List */}

          <div className="space-y-4">
            <div className="bg-blue-500 rounded-lg p-6 flex items-center justify-between hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                <div className="flex items-center space-x-6">
                  <span className='text-white'>Invoice ID</span>
                  <span className='text-white'>Due Date</span>
                  <span className='text-white font-semibold'>Waqas</span>
                </div>
                {/* start of invoice body */}
                <div className="flex items-center space-x-6">
                  <span className='text-white text-2xl font-bold'>$350</span>
                  <div className="">
                  <span className='text-white capitalize'>Invoice Status</span>
                  </div>
                <ChevronRight className='text-white'/>
                </div>
                {/* end of invoice body */}
            </div>
            {/* start of invoice Form */}
                <div className="fixed inset-0 bg-black/50 flex items-start justify-center overflow-y-auto">
                  <div className="p-8 rounded-lg w-full max-w-2xl my-8 bg-blue-500">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className='text-2xl font-bold text-white'>New Invoice</h2>
                      <X size={24} className='text-white cursor-pointer'/>
                    </div>
                    <form className='space-y-6'>
                        <div className="space-y-4">
                          <h3 className='text-white font-bold'>Bill From</h3>
                          <input type="text" placeholder='Street Address' required className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <input type="text" placeholder='City' required  className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                          <input type="text" placeholder='Country' required  className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                          <input type="text" placeholder='Post Code' required  className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                        </div>
                        <div className="space-y-4">
                           <h3 className='text-white font-bold'>Bill To</h3>
                           <input type="text" placeholder="Client's Name" required  className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                           <input type="email" placeholder="Client's Email" required  className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                           <input type="text" placeholder="Client's Address" required  className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <input type="text" placeholder='City' required  className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                          <input type="text" placeholder='Country' required  className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                          <input type="text" placeholder='Post Code' required  className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                        </div>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <input type="date" placeholder='' className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                            <select className='bg-blue-400 p-3 rounded-lg' required>
                              <option>Net 30 Days</option>
                              <option>Net 60 Days</option>
                            </select>
                          </div>
                          <input type="text" placeholder='Product Description' required  className='p-3 rounded-lg w-full outline-none bg-blue-400'/>
                        </div>
                        <div className="space-y-4">
                          <h3>Item List</h3>
                          <div className="grid grid-cols-12 items-center gap-4">
                            <input type="text" placeholder='Item Name' className='col-span-5 p-3 rounded-lg outline-none bg-blue-400' />
                            <input type="number" placeholder='Quantity' className='col-span-2 p-3 rounded-lg outline-none bg-blue-400' min="1" required />
                            <input type="number" placeholder='Price' className='col-span-2 p-3 rounded-lg outline-none bg-blue-400' min="0" step="0.01" required />
                            <div className="col-span-2 text-right text-white">TotalAmount</div>
                            <button type='button' className='text-white'> <Trash2 size={20}/> </button>
                          </div>
                        </div>
                    </form>
                  </div>
                </div>
            {/* End  of invoice Form */}
          </div>

      {/* End of Invoice List */}
    </>
  )
}

export default App
