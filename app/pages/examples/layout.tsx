import Link from 'next/link'
import React, { ReactNode } from 'react'
import LinkRoutes from '@/utils/constants';
import { linkSync } from 'fs';



interface IExampleLayoutProps {
    children: ReactNode
}

const ExamplesLayout = ({children}:IExampleLayoutProps) =>{
    return(
        <div className='flex flex-row gap-4'>
            <div className='border border-gray-300 rounded-md h-fit self-start overflow-hidden'>
                <Link href={LinkRoutes.home}>
                    <div className='p-2 hover:bg-blue-400 hover:text-white bordder-b border-gray-300'>
                        Inicio
                    </div>
                </Link>
                <Link href={LinkRoutes.example1}>
                    <div className='p-2 hover:bg-blue-400 hover:text-white bordder-b border-gray-300'>
                        Ejemplo 1: Renderizar lista de objetos
                    </div>
                </Link>
                <Link href={LinkRoutes.example2}>
                    <div className='p-2 hover:bg-blue-400 hover:text-white bordder-b border-gray-300'>
                        Ejemplo 2: Capturar datos y almacenar en estado                   
                    </div>
                </Link>
                <Link href={LinkRoutes.example3}>
                    <div className='p-2 hover:bg-blue-400 hover:text-white bordder-b border-gray-300'>
                        Ejemplo 3: Renderizar lista de un estado y manipular el estado                   
                    </div>
                </Link>
                <Link href={LinkRoutes.AO22002}>
                    <div className='p-2 hover:bg-blue-400 hover:text-white bordder-b border-gray-300'>
                        Ejemplo 4: AO22002                
                    </div>
                </Link>
            </div>
            <div className='flex-1 border-gray-300 rounded-md p-2'>
                {children}
            </div>
        </div>
    )
}

export default ExamplesLayout