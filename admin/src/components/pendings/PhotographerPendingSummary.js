import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const PhotographerPendingSummary = ({photographer}) => {
    const pathDetails = "/internal/analyse/photographer/"+photographer.id;
    
    return(
        <tr>
            <th scope="row">1</th>
            <td>{photographer.firstName}</td>
            <td>{photographer.lastName}</td>
            <td>{moment(photographer.createdAt.toDate()).calendar()}</td>
            <td><Link to={pathDetails}>Ver detalhes</Link></td>
        </tr>
    )
}

export default PhotographerPendingSummary