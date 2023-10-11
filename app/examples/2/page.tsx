'use client';
import Image from "next/image";
import React, { ChangeEvent, useState }  from "react";
import { IUsuario } from "@/components/UserCard";
type TRoles = 'Client'|'Admin';

interface IUser extends IUsuario {
    id: number;
    role: TRoles;
    terms: boolean;
}

const Example2 = ()=>{
    const [users, setUsers] = useState<IUser[]>([]);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [picture, setPicture] = useState('');
    const [role, setRole] = useState<TRoles>('Client')
    const [terms, setTerms] = useState(false);

    const handleNameOnChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setFirstName(event.currentTarget.value);
    }

    const handleLastNameOnChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setLastName(event.currentTarget.value);
    }

    const handlePictureOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPicture(event.currentTarget.value);
      };

    const handleRoleOnChange = (event:ChangeEvent<HTMLSelectElement>)=>{
        if(event.currentTarget.value === 'Client' || event.currentTarget.value === 'Admin'){
            setRole(event.currentTarget.value);
        }      
    }

    const handleTermsOnChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setTerms(event.currentTarget.checked);
    }

    const handleGuardarOnClick = ()=>{
        console.log('------------------');
        console.log('--------------')
        console.log('Nombre:', firstName)
        console.log('Apellido:', lastName)
        console.log('Picture:', picture)
        console.log('Rol:', role)
        console.log(terms ? 'Acepto los terminos' : 'No acepto los terminos')
        console.log('--------------')
        
        // Agregar el nuevo usuario al estado users
        const newUser: IUser = {
            // id: cards[cards.length - 1].id + 1,
            id: users.length + 1, // Genera un nuevo ID para el usuario
            firstName: firstName,
            lastName: lastName,
            picture: picture,
            role: role,
            terms: terms,
        };
        
        setUsers(prevUsers => [...prevUsers, newUser]);
        // Limpiar los campos de entrada
        setFirstName('');
        setLastName('');
        setPicture('');
        setRole('Client');
        setTerms(false);
    }
    
    return (
        <div>
            <div className="flex flex-col">
                <label htmlFor="firsName">Nombre: </label>
                <input id='firstName'  type="text" onChange={handleNameOnChange} value={firstName} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="lastName">Apellido: </label>
                <input id='lastName'  type="text" onChange={handleLastNameOnChange} value={lastName} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="picture">Imagen: </label>
                <input id='picture' type="text" onChange={handlePictureOnChange} value={picture} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="rol">Rol: </label>
                <select onChange={handleRoleOnChange}  id='rol' value={role} >
                    <option value="Client">Cliente</option>
                    <option value="Admin">Administrador</option>
                </select>
            </div>
            <div className="flex flex-row gap-1 items-center">
                <label htmlFor="terms">Aceptar terminos y servicios</label>
                <input id="terms" type="checkbox" onChange={handleTermsOnChange}/>
            </div>
            <button onClick={handleGuardarOnClick}>Guardar</button>

            {/* Renderizar la lista de usuarios */}
            {users.map(user => (
                <div key={user.id} className="border-2 border-gray-500 rounded-md mg-5">
                    <h2>{user.firstName} {user.lastName}</h2>
                    <Image src={user.picture} width={128} height={128} alt={`${user.firstName}`} />
                    <p>Rol: {user.role}</p>
                    <p>{user.terms ? 'Aceptó los términos y servicios' : 'No aceptó los términos y servicios'}</p>
                </div>
            ))}
        </div>
    )
}

export default Example2
