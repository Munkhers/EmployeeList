import React from 'react'

export function EmployeesCard({ employee, onEdit, onDelete }) {

    return (
        <div className='card'>
            <img src={employee.avatar} height={100} width={100} alt='avatar' className='card-img'/>
            <div>{employee.firstName}</div>
            <div>{employee.lastName}</div>
            <div>{employee.role}</div>
            <div>{employee.company}</div>
            <div>{employee.address}</div>
            <div>Phone:{employee.phone}</div>
            <div className='card-button'>
                <button className='card-edit' onClick={() => onEdit()}>Edit</button>
                <button className='card-delete' onClick={() => onDelete()}>Delete</button>
            </div>
        </div>
    )
}