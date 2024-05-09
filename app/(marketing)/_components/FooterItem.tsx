import { LogoItem } from '@/components/LogoItem'
import { Button } from '@/components/ui/button'
import React from 'react'

export const FooterItem = () => {
    return (
        <div className='fixed bottom-0 w-full p-4 border-t bg-slate-50'>
            <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
                <LogoItem />

                <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
                    <Button size='sm' variant='ghost'>
                        Privacy Policy
                    </Button>

                    <Button size='sm' variant='ghost'>
                        Terms of Service
                    </Button>   
                </div>
            </div>
        </div>
    )
}