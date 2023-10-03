'use client'
import React, { useState } from 'react';

// Definir la estructura de los datos
interface TopItem {
  id: number;
  title: string;
  image: string;
  description: string;
  columnStart: number;
  columnFinal: number;
  rowStart: number;
  rowFinal: number;
}

const TopThree = () => {
  // Inicializar el estado
  const [topItems, setTopItems] = useState<TopItem[]>([
    {
      id: 1,
      title: 'Toyota Supra',
      image: 'https://es.digitaltrends.com/wp-content/uploads/2022/05/GR-Supra-2021.jpeg?fit=720%2C479&p=1',
      description: 'Es de la quinta generación de este coupé sagrado se destaca con un chasis bien equilibrado y un aspecto llamativo.',
      columnStart: 1,
      columnFinal: 3,
      rowStart: 1,
      rowFinal: 5,
    },
    {
      id: 2,
      title: 'Ford Mustang Shelby GT350R',
      image: 'https://es.digitaltrends.com/wp-content/uploads/2019/10/shelby-gt350r-mustang.jpg?fit=720%2C480&p=1',
      description: 'Lo que es aún más impresionante, si se tiene en cuenta que se trata de uno de los mejores que Ford ha construido jamás.',
      columnStart: 4,
      columnFinal: 5,
      rowStart: 1,
      rowFinal: 3,
    },
    {
      id: 3,
      title: 'Aston Martin DB11',
      image: 'https://es.digitaltrends.com/wp-content/uploads/2020/04/mejores-autos-deportivos-aston-martin-2.jpg?fit=720%2C480&p=1',
      description: 'El DB11 es el primer diseño “de hoja limpia” de Aston en más de una década, y eso se nota.',
      columnStart: 4,
      columnFinal: 5,
      rowStart: 4,
      rowFinal: 5,
    },
  ]);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: 'repeat(5, 1fr)',
      gap: '10px',
      width: '100%',
      height: '100vh'
    }}>
      {topItems.map((item, index) => (
        <div key={item.id} style={{
          gridColumn:`${item.columnStart}/${item.columnFinal}`,
          gridRow:`${item.rowStart}/${item.rowFinal}`,
        }}>
          <h2>{`Top ${index + 1}: ${item.title}`}</h2>
          <img src={item.image} alt={item.title} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TopThree;
