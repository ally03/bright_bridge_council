import React from 'react';
import Table from 'react-bootstrap/Table';
import { zephyrs, colours } from '../utils';

const rowColor = (NO2: number, PM25: number) => colours.find(({ value }) => value === Math.round((NO2 + PM25) / 2))?.hex
function EquipmentTable(props: { type: string; }) {
  const bridgeBridgeOwned = zephyrs.filter(({ currentlyOwned }) => currentlyOwned);

  const isAllEquipmentSelected = props.type === 'All';

  const userSelectedType = isAllEquipmentSelected ? bridgeBridgeOwned
    : bridgeBridgeOwned.filter(({ type }) => props.type === type);

  const equimentSortByType = isAllEquipmentSelected ?
    userSelectedType.sort((a, b) => b.type.localeCompare(a.type)) : userSelectedType;

  return (
    <Table striped borderless hover>
      <thead style={{ backgroundColor: 'slategray' }}>
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
        {equimentSortByType.map(({ name, type, batteryPercentage, NO2, PM25 }, index) => {
          return (
            <tr style={{ backgroundColor: rowColor(NO2, PM25) }} key={index}>
              <td >{index + 1}</td>
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
