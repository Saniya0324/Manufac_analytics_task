// src/components/CropAverageTable.js

import React from 'react';
import { Table } from '@mantine/core';

const CropAverageTable = ({ data }) => {
    const rows = Object.keys(data).map(crop => {
        const cropData = data[crop];
        const avgProduction = (cropData.production / cropData.count).toFixed(3);
        const avgArea = (cropData.area / cropData.count).toFixed(3);

        return (
            <tr key={crop}>
                <td>{crop}</td>
                <td>{avgProduction}</td>
                <td>{avgArea}</td>
            </tr>
        );
    });

    return (
        <Table>
            <thead>
                <tr>
                    <th>Crop</th>
                    <th>Average Yield (Kg/Ha)</th>
                    <th>Average Cultivation Area (Ha)</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
};

export default CropAverageTable;
