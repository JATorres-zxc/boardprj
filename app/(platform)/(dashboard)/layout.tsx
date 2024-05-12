import React from 'react'
import NavbarItem from './_components/NavbarItem'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='h-full'>
            <NavbarItem />
            {children}
        </div>
    )
}

export default DashboardLayout