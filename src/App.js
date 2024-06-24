// src/App.js

import React from 'react';
import processData from './utils/dataProcessor';
import YearlyProductionTable from './components/YearlyProductionTable';
import CropAverageTable from './components/CropAverageTable';

const App = () => {
  const { yearCropProduction, cropAverage } = processData();

  return (
    <div>
      <h1>Yearly Crop Production Analysis</h1>
      <YearlyProductionTable data={yearCropProduction} />
      <h1>Crop Average Yield and Cultivation Area</h1>
      <CropAverageTable data={cropAverage} />
    </div>
  );
};

export default App;
