'use client'
import Image from 'next/image';
import React, { useState } from 'react';


// Definir la estructura de los datos
interface TopItem {
  id: number;
  title: string;
  image: string;
  description: string;

  rowStart: number;
  rowFinal: number;
  columnStart: number;
  columnFinal: number;
}

const TopThree = () => {
  // Inicializar el estado
  const [topItems, setTopItems] = useState<TopItem[]>([
    {
      id: 1,
      title: 'Toyota Supra',
      image: 'https://es.digitaltrends.com/wp-content/uploads/2022/05/GR-Supra-2021.jpeg?fit=720%2C479&p=1',
      description: 'Es de la quinta generación de este coupé sagrado se destaca con un chasis bien equilibrado y un aspecto llamativo.',
      rowStart: 1,
      rowFinal: 6,
      columnStart: 1,
      columnFinal: 4,

    },
    {
      id: 2,
      title: 'Ford Mustang Shelby GT350R',
      image: 'https://es.digitaltrends.com/wp-content/uploads/2019/10/shelby-gt350r-mustang.jpg?fit=720%2C480&p=1',
      description: 'Lo que es aún más impresionante, si se tiene en cuenta que se trata de uno de los mejores que Ford ha construido jamás.',
      rowStart: 1,
      rowFinal: 4,
      columnStart: 4,
      columnFinal: 6,
    },
    {
      id: 3,
      title: 'Aston Martin DB11',
      image: 'https://es.digitaltrends.com/wp-content/uploads/2020/04/mejores-autos-deportivos-aston-martin-2.jpg?fit=720%2C480&p=1',
      description: 'El DB11 es el primer diseño “de hoja limpia”',
      rowStart: 4,
      rowFinal: 6,
      columnStart: 4,
      columnFinal: 6,
    },
  ]);

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4  w-full h-screen">
      {topItems.map((item, index) => (
        <div key={item.id} className="p-5 gap-3 border border-gray-300 rounded-lg w-fit h-full"
          style={{ gridRow: ` ${item.rowStart} / ${item.rowFinal}`,
                   gridColumn: ` ${item.columnStart} / ${item.columnFinal}` }}>
          <h2 className='w-4/5'>{`Top ${index + 1}: ${item.title}`}</h2>
          <Image width={500} height={500} className="w-5/12 h-fit" src={item.image} alt={item.title} />
          <p className='w-full'>{item.description}</p>
        </div>
      ))}
    </div>

  );
};

export default TopThree;
