import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditStudent from './EditStudent';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/students');
            setStudents(res.data);
        } catch (error) {
            console.error('❌ Error fetching students:', error);
        }
    };

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/students/${id}`);
            fetchStudents(); // Refresh list after deletion
        } catch (error) {
            console.error('❌ Error deleting student:', error);
        }
    };

    const handleEdit = (student) => {
        setEditingStudent(student);
    };

    const handleUpdate = () => {
        setEditingStudent(null);
        fetchStudents(); // Refresh list after update
    };

    const handleCancel = () => {
        setEditingStudent(null);
    };

    return (
        <div>
            <h2>Student List</h2>
            {editingStudent && (
                <EditStudent
                    student={editingStudent}
                    onUpdate={handleUpdate}
                    onCancel={handleCancel}
                />
            )}
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th> {/* ✅ Change Email to Course */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.course}</td> {/* ✅ Show course instead of email */}
                            <td>
                                <button onClick={() => handleEdit(student)}>Edit</button> &nbsp;
                                <button onClick={() => deleteStudent(student._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;

