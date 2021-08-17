import React  from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  {name: 'Red', 'Сумма переводов по дням': 12},
  {name: 'Blue', 'Сумма переводов по дням': 19},
  {name: 'Yellow', 'Сумма переводов по дням': 3},
  {name: 'Green', 'Сумма переводов по дням': 5},
  {name: 'Purple', 'Сумма переводов по дням': 2},
  {name: 'Orange', 'Сумма переводов по дням': 3},
]

const Graphs = () => {
  return (
    // <ResponsiveContainer>
    <LineChart width={534} height={117} data={data} margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
      <Line type="monotone" dataKey="Сумма переводов по дням" stroke="dodgerblue" />
      <CartesianGrid stroke="#ccc" vertical={false} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
    // </ResponsiveContainer>
  )
}

export default Graphs;