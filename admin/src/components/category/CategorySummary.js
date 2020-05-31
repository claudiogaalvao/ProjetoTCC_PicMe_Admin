import React from 'react'

const CategorySummary = ({category}) => {
    
    return(
        <tr>
            <td>{category.name}</td>
            <td>R$ {category.price},00</td>
            <td>{category.qtdMin === 1 ? category.qtdMin + " foto" : category.qtdMin + " fotos"}</td>
            <td>
                <ul>
                    {
                        category.acceptedTypes.map((element, index) => <li key={index}>{element}</li>)
                    }
                </ul>
            </td>
        </tr>
    )
}

export default CategorySummary