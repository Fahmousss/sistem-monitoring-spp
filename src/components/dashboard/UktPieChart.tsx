import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { TrendingUp } from "lucide-react";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

interface ChartDataItem {
  name: string;
  value: number;
  totalCount: number;
  color: string;
}

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  active?: boolean;
  payload?: any[];
}

// Custom tooltip component
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as ChartDataItem;

    return (
      <div className="bg-white p-2 border rounded-md shadow-sm">
        <p className="font-medium">{data.name}</p>
        <p className="text-sm">
          {data.value} mahasiswa (
          {((data.value / data.totalCount) * 100).toFixed(1)}%)
        </p>
      </div>
    );
  }
  return null;
};

interface UktPieChartProps {
  totalMahasiswa: number;
  totalLunas: number;
  totalBelumLunas: number;
}

export const UktPieChart: React.FC<UktPieChartProps> = ({
  totalMahasiswa,
  totalLunas,
  totalBelumLunas,
}) => {
  // Create data for the pie chart
  const chartData: ChartDataItem[] = [
    {
      name: "Sudah Bayar",
      value: totalLunas,
      totalCount: totalMahasiswa,
      color: "#10b981",
    },
    {
      name: "Belum Bayar",
      value: totalBelumLunas,
      totalCount: totalMahasiswa,
      color: "#ef4444",
    },
  ];

  // Calculate percentage of lunas vs total
  const percentage =
    totalMahasiswa > 0 ? ((totalLunas / totalMahasiswa) * 100).toFixed(1) : "0";

  // Get current semester and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const semester = currentMonth < 6 ? "Genap" : "Ganjil";
  const periodText = `${semester} ${currentYear}`;

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Status Pembayaran UKT</CardTitle>
        <CardDescription>Periode {periodText}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div className="mx-auto aspect-square max-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={40}
                paddingAngle={2}
                labelLine={false}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2">
          {parseFloat(percentage) > 50 ? (
            <>
              Pembayaran berjalan baik{" "}
              <TrendingUp className="h-4 w-4 text-green-500" />
            </>
          ) : (
            <>
              Pembayaran perlu diperhatikan{" "}
              <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />
            </>
          )}
        </div>
        <div className="text-muted-foreground">
          {percentage}% mahasiswa telah melunasi UKT
        </div>
      </CardFooter>
    </Card>
  );
};
