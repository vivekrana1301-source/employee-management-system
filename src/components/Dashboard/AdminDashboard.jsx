import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTAsk from '../other/AllTAsk';

const AdminDashboard = () => {
     
    return (
        <div >
            <Header />
            <CreateTask/>
            <AllTAsk/>
        </div>
    );
}

export default AdminDashboard;
