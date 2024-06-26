import { LogoItem } from '@/components/LogoItem'
import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'

const NavbarItem = () => {
    return (
        <nav className='fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center'>

            

            <div className='flex items-center gap-x-4'>
                <div className='hidden md:flex'>
                    <LogoItem />
                </div>

                <Button size='sm'  className='rounded-sm hidden md:block h-auto py-1.5 px-2' variant='primary'>
                    Create
                </Button>

                <Button size='sm' className='rounded-sm block md:hidden' variant='primary'>
                    <Plus className='h-4 w-4' />
                </Button>
            </div>

            <div className='ml-auto flex items-center gap-x-2'>
                <OrganizationSwitcher 
                hidePersonal
                afterCreateOrganizationUrl='/organization/:id'
                afterLeaveOrganizationUrl='/select-org'
                afterSelectOrganizationUrl='/organization/:id'
                appearance={{
                    elements:{
                        rootBox:{
                            display: 'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }
                    }
                }}
                />

                <UserButton 
                afterSignOutUrl='/'
                appearance={{
                    elements:{
                        avatarBox:{
                            height:30,
                            width:30
                        }
                    }
                }}
                
                />
            </div>
        </nav>
    )
}

export default NavbarItem