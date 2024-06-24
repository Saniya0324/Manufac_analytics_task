// src/utils/dataProcessor.js

import data from '../Manufac_India_Agro_Dataset.json';

const processData = () => {
    const processedData = data.map(item => ({
        ...item,
        "Crop Production (UOM:t(Tonnes))": item["Crop Production (UOM:t(Tonnes))"] || 0,
        "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0,
        "Area Under Cultivation (UOM:Ha(Hectares))": item["Area Under Cultivation (UOM:Ha(Hectares))"] || 0,
    }));

    const yearCropProduction = processedData.reduce((acc, curr) => {
        const year = curr.Year.split(",")[1].trim();
        if (!acc[year]) acc[year] = [];
        acc[year].push(curr);
        return acc;
    }, {});

    const cropAverage = processedData.reduce((acc, curr) => {
        const crop = curr["Crop Name"];
        if (!acc[crop]) acc[crop] = { production: 0, area: 0, count: 0 };
        acc[crop].production += parseFloat(curr["Crop Production (UOM:t(Tonnes))"]);
        acc[crop].area += parseFloat(curr["Area Under Cultivation (UOM:Ha(Hectares))"]);
        acc[crop].count += 1;
        return acc;
    }, {});

    return { yearCropProduction, cropAverage };
};

export default processData;
