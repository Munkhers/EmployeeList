import React, { useEffect, useState } from 'react'
import avatar1 from './images/avatar1.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'
import avatar5 from './images/avatar5.png'
import avatar6 from './images/avatar6.png'
import avatar7 from './images/avatar7.png'
import avatar8 from './images/avatar8.png'


const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
]

export function EmployeesForm({ editingEmployee, onEditSubmit, cardList, setCardList, handleSubmit }) {

    const [formData, setFormData] = useState({
        avatar: null,
        firstName: '',
        lastName: '',
        role: '',
        company: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        phone: '',
    })
    const onFormValueChange = (e) => {
        setFormData((currState) => ({
            ...currState, [e.target.name]: e.target.value
        }))
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (editingEmployee) {
            onEditSubmit({ ...editingEmployee, ...formData })
        } else {
            handleSubmit({ ...formData, avatar: avatars[Math.floor(Math.random() * avatars.length)] })
        }
        setFormData({ firstName: '', lastName: '', role: '', company: '', address: '', phone: '', address2: '', city: '', state: '' })
    }
    useEffect(() => {
        if (editingEmployee) {
            setFormData(editingEmployee)
        }
    }, [editingEmployee]
    )
    return (
        <div>
            <form onSubmit={onFormSubmit} className='form'>
                <h3>Personal information</h3>
                {/* {employeeData.map(() => {
                    return (
                        <div>
                            <label>
                                First name:<br/>
                                <input type="text" name="firstName" value={employeeData.firstName} required
                                onChange={(e) => {onFormValueChange(e)}}
                                />
                            </label><br/>
                        </div>
                    )
                })} */}
                <label>
                    First name:<br />
                    <input type="text" name="firstName" value={formData.firstName} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Last name:<br />
                    <input type="text" name="lastName" value={formData.lastName} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Role:<br />
                    <input type="text" name="role" value={formData.role} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Company:<br />
                    <input type="text" name="company" value={formData.company} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Address:<br />
                    <input type="text" name="address" value={formData.address} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Address2:<br />
                    <input type="text" name="address2" value={formData.address2}
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    City:<br />
                    <input type="text" name="city" value={formData.city} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    State:<br />
                    <input type="text" name="state" value={formData.state} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Phone:<br />
                    <input type="number" name="phone" value={formData.phone} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <button type='submit'>Submit form</button>
            </form>
        </div>
    )
}