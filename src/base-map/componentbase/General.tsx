import DeviceTable from '@/components/DeviceTable'

import React from 'react'
import AppHeader from './AppHeader'
import Footer from '@/components/Footer'

const General = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full gap-10'>
        <AppHeader/>
  
        <table className="w-2/5 border  bg-white transition-all duration-300 ease-in shadow-2xl">
        <caption className='text-xl'>General Device Information</caption>
          <thead className="bg-white border-b rounded-2xl">
            <tr>
              <th className="text-left p-4 text-gray-600 font-semibold text-sm">Parameter</th>
              <th className="text-left p-4 text-gray-600 font-semibold text-sm">Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-gray-50">
              <td className="p-4 text-gray-800">System name</td>
              <td className="p-4 text-gray-800">Swo1.calico.palisadoes.org</td>
            </tr>
            <tr className="bg-white">
              <td className="p-4 text-gray-800">System hostname</td>
              <td className="p-4 text-gray-800">192.168.99.0</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-4 text-gray-800">Device description</td>
              <td className="p-4 text-gray-800">Cisco Internetwork Operating System Software IOS (tm) C3500XL Software (C3500XL-C3H2S-M), Version 12.0(5.1)XP, MAINTENANCE INTERIM SOFTWARE Copyright (C) 1986-1999 by Cisco Systems, Inc. Compiled Fri 10-Dec-99 11:16 by cchang</td>
            </tr>
            <tr className="bg-white">
              <td className="p-4 text-gray-800">System sysObjectID</td>
              <td className="p-4 text-gray-800">1.3.34..54.435.2</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-4 text-gray-800">System Uptime</td>
              <td className="p-4 text-gray-800">17 Days, 0.57.00</td>
            </tr>
          </tbody>
        </table>
      
<div className=' w-full px-7 md:px-0 md:w-1/2 shadow-2xl'>
      <DeviceTable /></div>
      <Footer/>
    </div>
  )
}

export default General
