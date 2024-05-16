"use client"

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'


import {Activity,CreditCard,Icon,Layout,Settings} from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation' // remember to use next/navigation insted of next/router since its no longer working daw
import { Button } from '@/components/ui/button'


type Organization = {
    id:string
    slug:string
    imageUrl:string
    name:string
}

interface NavItemProps{
    isExpanded:boolean
    isActive:boolean
    organization:any
    onExpand:(id:string) => void
}

const NavItem = ({isExpanded,isActive,organization,onExpand}:NavItemProps) => {

    const router = useRouter()

    const pathName = usePathname()

    const routes = [{
        label:'Boards',
        icon:<Layout className='h-4 w-4 mr-2' />,
        href:`/organization/${organization.id}`
    },
    {
        label:'Activity',
        icon:<Activity className='h-4 w-4 mr-2' />,
        href:`/organization/${organization.id}/activity`
    },
    {
        label:'Settings',
        icon:<Settings className='h-4 w-4 mr-2' />,
        href:`/organization/${organization.id}/settings`
    },
    {
        label:'Billing',
        icon:<CreditCard className='h-4 w-4 mr-2' />,
        href:`/organization/${organization.id}/billing`
    },
]

    const onClick = (href:string) =>{
        router.push(href)
    }

    return (
        <AccordionItem value={organization.id} className='border-none'>
            <AccordionTrigger 
                onClick={() => onExpand(organization.id)} 
                className={cn(
                    'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline', 
                    isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
                )}
            >
                <div className='flex items-center gap-x-2'>
                    <div className='w-7 h-7 relative'>
                        <Image 
                            layout='fill'
                            src={organization.imageUrl}
                            alt='Organization'
                            className='rounded-sm object-cover'
                        />
                    </div>

                    <span className='font-medium text-sm'>
                        {organization.name}
                    </span>
                </div>
            </AccordionTrigger>

            <AccordionContent className='pt-1 text-neutral-700'>
                {routes.map((route) =>(
                    <Button
                        key={route.href}
                        size='sm'
                        onClick={() => onClick(route.href)}
                        className={cn(
                            'w-full font-normal justify-start pl-10 mb-1',
                            pathName === route.href && 'bg-sky-500/10 text-sky-700'
                        )}
                        variant='ghost'
                    >
                        <div className='flex items-center'>
                            {route.icon}
                            <span className='ml-2'>{route.label}</span>  {/* Add this line */}
                        </div>
                    </Button>
                ))}

            </AccordionContent>

        </AccordionItem>
    )
}

export default NavItem