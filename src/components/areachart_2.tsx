'use client'

import React from 'react';
import  MouseClickIcon from '../assets/icons/mouse_click.svg';
import { AreaChart } from '@tremor/react';

const chartdata = [
    { date: 'Jan 1', Visitors: 5 },
    { date: 'Jan 8', Visitors: 10 },
    { date: 'Jan 15', Visitors: 15 },
    { date: 'Jan 22', Visitors: 12 },
    { date: 'Jan 29', Visitors: 8 },
    { date: 'Feb 5', Visitors: 3 },
    { date: 'Feb 12', Visitors: 7 },
    { date: 'Feb 19', Visitors: 14 },
    { date: 'Feb 26', Visitors: 9 },
    { date: 'Mar 4', Visitors: 11 },
    { date: 'Mar 11', Visitors: 5 },
    { date: 'Mar 18', Visitors: 20 },
];

export function AreaChartHero() {
    return (
        <div className='p-4 lg:w-[514px] border-2 border-custom rounded-custom'>
            <div className='flex flex-row justify-between items-center'>
                <span className='flex flex-row gap-x-1 items-center'>
                    <h2 className='text-base font-light text-secondary-text'>Total Visitors:</h2>
                    <p className='text-base font-bold text-primary'>231</p>
                </span>
                <div className='flex flex-row items-center gap-x-1 py-1 px-2 border rounded-custom text-primary bg-green-950 border-green-950'>
                    <MouseClickIcon className='w-[18px] h-[18px]'/>
                    <p className='text-xs'>You&apos;re Visitor #<b>32</b></p>
                </div>
            </div>
            <AreaChart
                className="h-[80px] mt-3"
                data={chartdata}
                index="date"
                categories={['Visitors']}
                colors={['emerald']}
                showLegend={false}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
                showAnimation={true}
                animationDuration={900}
                autoMinValue={true}
            />
        </div>
    );
};