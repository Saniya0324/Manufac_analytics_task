import React from 'react';
import { Table } from '@mantine/core';
import processData from '../utils/dataProcessor';

const YearlyProductionTable = () => {
    const { yearCropProduction, cropAverage } = processData();

    const renderYearlyProduction = () => {
        return Object.entries(yearCropProduction).map(([year, crops]) => {
            const maxProductionCrop = crops.reduce((maxCrop, crop) => {
                return crop["Crop Production (UOM:t(Tonnes))"] > (maxCrop["Crop Production (UOM:t(Tonnes))"] || 0) ? crop : maxCrop;
            }, {});
            const minProductionCrop = crops.reduce((minCrop, crop) => {
                return crop["Crop Production (UOM:t(Tonnes))"] < (minCrop["Crop Production (UOM:t(Tonnes))"] || 0) ? crop : minCrop;
            }, {});

            return (
                <tr key={year}>
                    <td>{year}</td>
                    <td>{maxProductionCrop["Crop Name"]}</td>
                    <td>{minProductionCrop["Crop Name"]}</td>
                </tr>
            );
        });
    };

    const renderCropAverage = () => {
        return Object.entries(cropAverage).map(([crop, data]) => {
            const averageYield = (data.production / data.count).toFixed(3);
            const averageArea = (data.area / data.count).toFixed(3);
            return (
                <tr key={crop}>
                    <td>{crop}</td>
                    <td>{averageYield}</td>
                    <td>{averageArea}</td>
                </tr>
            );
        });
    };

    return (
        <div>
            <h2>Yearly Production Table</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Crop with Maximum Production</th>
                        <th>Crop with Minimum Production</th>
                    </tr>
                </thead>
                <tbody>
                    {renderYearlyProduction()}
                </tbody>
            </Table>

            <h2>Crop Average Table</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Crop</th>
                        <th>Average Yield (1950-2020)</th>
                        <th>Average Cultivation Area (1950-2020)</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCropAverage()}
                </tbody>
            </Table>
        </div>
    );
};

export default YearlyProductionTable;



