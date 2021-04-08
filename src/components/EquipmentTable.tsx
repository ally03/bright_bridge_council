import React from 'react';
import Table from 'react-bootstrap/Table';
import zephyrs from '../utils';

function EquipmentTable() {
  const bridgeBridgeOwned = zephyrs.filter(({ currentlyOwned }) => currentlyOwned)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Type</th>
          <th>Battery Percentage</th>
          <th>NO2</th>
          <th>PM25</th>
        </tr>
      </thead>
      <tbody>
        {bridgeBridgeOwned.map(({ name, type, batteryPercentage, NO2, PM25 }, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{type}</td>
              <td>{batteryPercentage}</td>
              <td>{NO2}</td>
              <td>{PM25}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default EquipmentTable;
