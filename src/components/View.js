import React from 'react'
import { Icon } from 'react-icons-kit'
import { trash } from 'react-icons-kit/feather/trash'

export const View = ({ cars, deleteCar }) => {
    return cars.map(car => (
        <tr key={car.year}>
            <td>{car.year}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td className="delete-btn" onClick={() => deleteCar(car.year)}><Icon icon={trash} /></td>
        </tr>
    ))
}

export default View