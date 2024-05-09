import React from 'react'
import { NavbarItem } from './_components/NavbarItem'
import { FooterItem } from './_components/FooterItem'

const MarketingLayout = (
    {children}:{children:React.ReactNode}
) => {
    return (
        <div className='h-full bg-slate-100'>
            <NavbarItem />
            <main className='pt-40 pb-20 bg-slate-100'>
                {children}
            </main>
            <FooterItem />
        </div>
    )
}

export default MarketingLayout