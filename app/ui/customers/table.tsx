import { customers, invoices } from '@/app/lib/dummy-data';
import {
  countCustomerInvoices,
  calculateCustomerInvoices,
} from '@/app/lib/calculations';
import Image from 'next/image';

export default function CustomersTable() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-base font-semibold">Customers</h1>
      </div>
      <div className="mt-8 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md border">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 text-left text-sm">
                  <tr>
                    <th scope="col" className="px-3.5 py-3.5  sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 font-semibold">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 font-semibold">
                      Total Invoices
                    </th>
                    <th scope="col" className="px-3 py-3.5 font-semibold">
                      Total Pending
                    </th>
                    <th scope="col" className="px-3 py-3.5 font-semibold">
                      Total Paid
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white text-gray-500">
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.imageUrl}
                            className="rounded-full"
                            alt={customer.name}
                            width={28}
                            height={28}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {countCustomerInvoices(invoices, customer.id)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {calculateCustomerInvoices(
                          invoices,
                          'pending',
                          customer.id,
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {calculateCustomerInvoices(
                          invoices,
                          'paid',
                          customer.id,
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
