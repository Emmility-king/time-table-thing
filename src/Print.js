import React from 'react';
import PrintButton from './PrintButton'; // Ensure the path is correct

const Timetable = () => {
  return (
    <div>
      <h1>My Timetable</h1>
      
      {/* Your timetable structure */}
      <div className="timetable">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00 AM - 10:00 AM</td>
              <td>Math</td>
              <td>English</td>
              <td>Physics</td>
              <td>Chemistry</td>
              <td>History</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      
      {/* Use the PrintButton component */}
      <PrintButton />
    </div>
  );
};

export default Timetable;
