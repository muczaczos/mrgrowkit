'use client'
import React from 'react'

const ShippingTable = () => {
  return (
    <div>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border-solid border-2 border-gray-400 p-2">Zone</th>
            <th className="border border-gray-400 p-2">Weight Range</th>
            <th className="border border-gray-400 p-2">Shipping Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2" rowSpan={5}>
              Zone 1
            </td>
            <td className="p-2 text-left">0-1kg</td>
            <td className="border border-gray-400 p-2 text-right">14€</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-right">1-3kg</td>
            <td className="border border-gray-400 p-2 text-right">18€</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-right">3-10kg</td>
            <td className="border border-gray-400 p-2 text-right">33€</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-right">10-20kg</td>
            <td className="border border-gray-400 p-2 text-right">37€</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-right">20-31.5kg</td>
            <td className="border border-gray-400 p-2 text-right">41€</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShippingTable
