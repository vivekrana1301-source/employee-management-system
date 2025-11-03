import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div  className="bg-[#1c1c1c] p-5 rounded mx-5 mt-4 h-48">
      {/* Header Row */}
      <div className="bg-red-600 mb-2 py-2 px-4 flex justify-between font-semibold">
        <h2 className="w-1/5 bg-red-600 text-center">First Name</h2>
        <h3 className="w-1/5 bg-red-600 text-center">New Task</h3>
        <h5 className="w-1/5 bg-red-600 text-center">Active Task</h5>
        <h5 className="w-1/5 bg-red-600 text-center">Completed</h5>
        <h5 className="w-1/5 bg-red-600 text-center">Failed</h5>
      </div>

      {/* Scrollable Employee List */}
      <div id="task" className="h-[80%] overflow-auto">
        {authData?.employees?.length > 0 ? (
          authData.employees.map((elem, index) => (
            <div
              key={index}
              className="border mb-2 py-2 px-4 flex justify-between"
            >
              <h2 className="w-1/5 text-center">
                {elem.firstName || 'N/A'}
              </h2>
              <h3 className="w-1/5  text-center">
                {elem.taskCount.newTask}
              </h3>
              <h5 className="w-1/5  text-center">
              {elem.taskCount.active}
              </h5>
              <h5 className="w-1/5 text-green-500  text-center">
                {elem.taskCount.completed}
              </h5>
              <h5 className="w-1/5 text-red-500 text-center">
                {elem.taskCount.failed}
              </h5>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center mt-4">No employees found.</p>
        )}
      </div>
    </div>
  );
};

export default AllTask;
