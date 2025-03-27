const DeviceTable = () => {
    return (
      <div className="overflow-x-scroll scrollbar-hide overflow-hidden rounded-t-2xl border-gray-200 shadow-sm">

        <table className="min-w-full bg-white  transition-all duration-300 ease-in">
          <thead className="bg-white border-b">
            <tr>
              <th className="text-left p-4 text-gray-600 font-semibold text-sm">PORT</th>
              <th className="text-left p-4 text-gray-600 font-semibold text-sm">VLAN</th>
              <th className="text-left p-4 text-gray-600 font-semibold text-sm">DAYS INACTIVE</th>
              <th className="text-left p-4 text-gray-600 font-semibold text-sm">SPEED</th>
              <th className="text-left p-4 text-gray-600 font-semibold text-sm">DUPLEX</th>
              <th className="text-left p-4 text-gray-600 font-semibold text-sm">PORT LABEL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-gray-50">
              <td className="p-4 text-gray-800">Fa0/1</td>
              <td className="p-4">
                <span className="px-3 py-1 text-purple-700 bg-purple-300 rounded-xl">N/A</span>
              </td>
              <td className="p-4 text-center">2</td>
              <td className="p-4 text-center">100 M</td>
              <td className="p-4 text-center">HALF</td>
              <td className="p-4 text-center">Bad port</td>
            </tr>
  
            <tr className="bg-white">
              <td className="p-4 text-gray-800">Fa0/2</td>
              <td className="p-4">
                <span className="px-3 py-1 text-green-700 bg-green-300 rounded-xl">Active</span>
              </td>
              <td className="p-4 text-center">0</td>
              <td className="p-4 text-center">20 M</td>
              <td className="p-4 text-center">N/A</td>
              <td className="p-4 text-center">Unused</td>
            </tr>
  
            <tr className="bg-gray-50">
              <td className="p-4 text-gray-800">Fa0/3</td>
              <td className="p-4">
                <span className="px-3 py-1 text-blue-700 bg-blue-300 rounded-xl">Inactive</span>
              </td>
              <td className="p-4 text-center">3</td>
              <td className="p-4 text-center">120 M</td>
              <td className="p-4 text-center">Full</td>
              <td className="p-4 text-center">Good Port</td>
            </tr>
  
            <tr className="bg-white">
              <td className="p-4 text-gray-800">Fa0/4</td>
              <td className="p-4">
                <span className="px-3 py-1 text-red-700 bg-red-300 rounded-xl">Disabled</span>
              </td>
              <td className="p-4 text-center">8</td>
              <td className="p-4 text-center">10 M</td>
              <td className="p-4 text-center">N/A</td>
              <td className="p-4 text-center">N/A</td>
            </tr>
  
            <tr className="bg-gray-50">
              <td className="p-4 text-gray-800">Fa0/6</td>
              <td className="p-4">
                <span className="px-3 py-1 text-purple-700 bg-purple-300 rounded-xl">N/A</span>
              </td>
              <td className="p-4 text-center">2</td>
              <td className="p-4 text-center">100 M</td>
              <td className="p-4 text-center">HALF</td>
              <td className="p-4 text-center">Bad port</td>
            </tr>
  
            <tr className="bg-white">
              <td className="p-4 text-gray-800">Fa0/7</td>
              <td className="p-4">
                <span className="px-3 py-1 text-blue-700 bg-blue-300 rounded-xl">Inactive</span>
              </td>
              <td className="p-4 text-center">5</td>
              <td className="p-4 text-center">300 M</td>
              <td className="p-4 text-center">FULL</td>
              <td className="p-4 text-center">Good port</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DeviceTable;
  