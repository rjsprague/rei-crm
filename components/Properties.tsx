import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const properties = [
  {
    id: 1,
    address: "123 Main St",
    type: "Single Family",
    value: 250000,
    status: "Owned",
  },
  {
    id: 2,
    address: "456 Elm St",
    type: "Multi-Family",
    value: 500000,
    status: "For Sale",
  },
  {
    id: 3,
    address: "789 Oak St",
    type: "Commercial",
    value: 1000000,
    status: "Under Contract",
  },
]

export default function Properties() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
        <div className="flex items-center space-x-2">
          <Input className="w-[150px] lg:w-[250px]" placeholder="Search properties..." />
          <Button>Add Property</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Address</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell className="font-medium">{property.address}</TableCell>

              <TableCell>{property.type}</TableCell>
              <TableCell>${property.value.toLocaleString()}</TableCell>
              <TableCell>{property.status}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost">View</Button>
                <Button variant="ghost">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}