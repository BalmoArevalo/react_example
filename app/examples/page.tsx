import React, { Children } from 'react'

import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Inicio',
}

const ExamplesHome = () => {
return (
<div>
    <h1 className='text-2xl font-bold'>Ejemplos</h1>
    <p>Esta seccion del sitio web esta destinada a alojar ejemplos en react.</p>
</div>
)
}
export default ExamplesHome