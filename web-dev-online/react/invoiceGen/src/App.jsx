import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Filter, Plus } from 'lucide-react'

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
                <button className='w-full text-left px-4 py-2 rounded-lg capitalize'>
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
            </div>
          </div>

      {/* End of Invoice List */}
    </>
  )
}

export default App
