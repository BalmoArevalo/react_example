import Link from 'next/link'
import React, { ReactNode } from 'react'

interface IExampleLayoutProps {
    children: ReactNode
}

const ExamplesLayout = ({children}:IExampleLayoutProps) =>{
    return(
        <div className='flex flex-row gap-4'>
            <div className='border border-gray-300 rounded-md h-fit self-start overflow-hidden'>
                <Link href="/pages/examples">
                    <div className='p-2 hover:bg-blue-400 hover:text-white bordder-b border-gray-300'>
                        Inicio
                    </div>
                </Link>
                <Link href="/pages/examples/1">
                    <div className='p-2 hover:bg-blue-400 hover:text-white bordder-b border-gray-300'>
                        Ejemplo 1: Renderizar lista de objetos
                    </div>
                </Link>
                <Link href="/pages/examples/2">
                    <div className='p-2 hover:bg-blue-400 hover:text-white bordder-b border-gray-300'>
                        Ejemplo 2: Capturar datos y almacenar en estado                   
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