import React from 'react';

function Result({ members }) {
  return (
    <div className="voting-container">
      <h1 className='ct-headline'>Result</h1>
      <div>
        <table className="voting-table">
          <thead>
            <tr>
              <th className="table-header-large">Title</th>
              <th className="table-header-large">Options</th>
              <th className="table-header-large">Images</th>
              <th className="table-header-large">No Of Votes</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td className="table-data-large">{member.name}</td>
                <td className="table-data-large">{member.options}</td>
                <td className="table-data-large">
                  <img src={member.image} alt={member.name} className="member-image" />
                </td>
                <td className='table-data-large'>{member.noofvotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Result;
