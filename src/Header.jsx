import React from 'react'

const Header = () => {
    return (
        <div className='bg-red-200 flex justify-between'>
            <div className='flex -my-6 ml-5'>
                < img className='w-7' src="https://www.svgrepo.com/show/421558/burger-menu.svg" alt="" />
                <img className='w-40 p-2' src="https://imgs.search.brave.com/DmZxYT5KTuheQO4amNiCpG1yYOEqf1CeuaiEid2P3Vc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Zb3VUdWJl/L1lvdVR1YmUtTG9n/by53aW5lLnN2Zw.svg" alt="" />
            </div >

            <div className='flex items-center mr-10'>
                <input className='border border-gray-500 py-2 px-5 w-96 rounded-l-full' type="text" name="" id="" />
                <button className='border border-r-gray-500 border-b-gray-500 border-t-gray-500 p-2 rounded-r-full'>Search</button>
            </div>

            <img className='w-8 mr-5' src="https://imgs.search.brave.com/2ChBlWC_P2fxCSvr82kDGDmS-y1JkUs1PaHYa5uN9QE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdlL0NpcmNsZS1p/Y29ucy1wcm9maWxl/LnN2Zw.svg" alt="" />
        </div >
    )
}

export default Header