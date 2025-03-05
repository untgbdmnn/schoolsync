import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb'

interface AppBreadcrumbProps {
    page: string
    parent?: string
    parentLink?: string
    showBreadcrumb?: boolean
}

export default function AppBreadcrumb({ page, parent, parentLink, showBreadcrumb }: AppBreadcrumbProps) {
    return (
        <div>
            <div className='flex flex-col items-start'>
                <h1 className='text-xs'>Schoolsync Admin Panel</h1>
                <h1 className='font-bold text-3xl'>{page}</h1>
            </div>
            {showBreadcrumb && (
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/dashboard">
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            {parent && (
                                <>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href={parentLink}>
                                            {parent}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                </>
                            )}
                            <BreadcrumbItem>
                                <BreadcrumbPage>{page}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            )}
        </div>
    )
}
