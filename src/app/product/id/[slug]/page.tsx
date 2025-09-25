import React from 'react'
interface Props{
    params: {
        id: string
    }
}
export default function ProductDetail({params} : Props) {
    const id = params.id
    console.log(id);
    
    return (
        <div>
            ${params.id}
        </div>
    )
}
