import React, { useState, useEffect } from 'react'
import { EmployeesCard } from './card'
import { EmployeesForm } from './form'
import './style.css'

export function EmployeesList() {
    const [cardList, setCardList] = useState(localStorage.getItem('employee-data') ? 
            JSON.parse(localStorage.getItem('employee-data')): [])
    const [editingEmployee, setEditingEmployee] = useState(null)

    useEffect(() => {
        localStorage.setItem(
            'employee-data',
            JSON.stringify(cardList),
        )
    }, [cardList])

    const handleSubmit = (data) => {
        setCardList(currState => [...currState, data])
    }

    const onEdit = (empData) => {
        setEditingEmployee(empData)
    }

    const onEditSubmit = (empData) => {
        setCardList((currState) => {
            return currState.map((item, idx) => {
                 return idx === empData.empIndex ? empData : item
            })
        }
        )
    }

    const onDelete = (index) => {
        setCardList((currState) => {
            return currState.filter((c, cIdx) => { return cIdx !== index })
        })
    }

    return (
        <div className='app-container'>
            <EmployeesForm handleSubmit={(data) => { handleSubmit(data) }} onEditSubmit = {(empData) => {onEditSubmit(empData)}} editingEmployee={editingEmployee} />
            {cardList.map((empData, empIdx) => {
                return <EmployeesCard key={empIdx} employee={empData} onEdit={() => { onEdit({...empData, empIndex : empIdx}) }} onDelete={() => { onDelete(empIdx) }} />
            })}
        </div>
    )
}