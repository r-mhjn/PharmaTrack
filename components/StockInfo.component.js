import React, { useState } from 'react'
import BarChart from './StockInfo_subcomponents/BarChart.component';
import CategoryInfo from './StockInfo_subcomponents/CategoryInfo.component';

export default function StockInfo() {
	const [currentCategory, changeCurrentCategory] = useState('');

	return (
		<div className='p-grid p-nogutter' >
			<div className='p-col  p-md-12 p-lg-8' style={{ border: '1px solid black' }}>

				<BarChart changeCurrentCategory={changeCurrentCategory} />
			</div>
			<div className='p-col  p-md-12 p-lg-4' style={{ border: '1px solid black' }}>

				<CategoryInfo currentCategory={currentCategory} />
			</div>
		</div>
	)
}
