import React from 'react'

const AdministratorPendingSummary = ({administrator}) => {
    return(
        <tr>
            <th scope="row">1</th>
            <td>{administrator.firstName}</td>
            <td>{administrator.lastName}</td>
            <td>{administrator.dateRegister}</td>
            <td><button className="btn btn-success">APROVAR</button></td>
            <td><button className="btn btn-danger">REPROVAR</button></td>
        </tr>
    )
}

export default AdministratorPendingSummary