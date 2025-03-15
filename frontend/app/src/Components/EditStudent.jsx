import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditStudent = ({ student, onUpdate, onCancel }) => {
    const [form, setForm] = useState({ name: '', age: '', email: '' });

    useEffect(() => {
        setForm(student);
    }, [student]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/students/${student._id}`, form);
        alert('Student Updated!');
        onUpdate(); // Refresh list
    };

    return (
        <div>
            <h3>Edit Student</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br />
                <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} required /><br />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
                <button type="submit">Update</button> &nbsp;
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default EditStudent;
