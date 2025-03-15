import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
    const [form, setForm] = useState({ name: '', age: '', course: '' }); // Change 'email' to 'course'

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const studentData = {
                name: form.name,
                age: Number(form.age), // Make sure age is a number
                course: form.course
            };
            await axios.post('http://localhost:5000/api/students', studentData);
            alert('✅ Student Added!');
            setForm({ name: '', age: '', course: '' }); // Reset form
        } catch (error) {
            console.error('❌ Error adding student:', error.response?.data || error.message);
            alert('❌ Failed to add student');
        }
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br />
                <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} required /><br />
                <input type="text" name="course" placeholder="Course" value={form.course} onChange={handleChange} required /><br />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;


