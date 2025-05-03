import { useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(1)}%)`}
      </text>
    </g>
  );
};

const Charts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const axiosSecure = useAxiosSecure();

  const { data: allPendingSales = {}, isLoading: loadingPending } = useQuery({
    queryKey: ["pending"],
    queryFn: async () => {
      const res = await axiosSecure("/sales/pending");
      return res.data;
    },
  });

  const { data: allPaidSales = {}, isLoading: loadingPaid } = useQuery({
    queryKey: ["paid"],
    queryFn: async () => {
      const res = await axiosSecure("/salesPaid/paid");
      return res.data;
    },
  });

  if (loadingPending || loadingPaid) {
    return <p>Loading chart data...</p>;
  }

  const {
    totalPendingPrice = 0,
    // You can include more if needed from pending
  } = allPendingSales;

  const { totalPaidPrice = 0, totalUser = 0, totalSeller = 0 } = allPaidSales;

  const chartData = [
    { name: "Pending", value: totalPendingPrice },
    { name: "Paid", value: totalPaidPrice },
    { name: "Users", value: totalUser },
    { name: "Sellers", value: totalSeller },
  ];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={120}
          dataKey="value"
          onMouseEnter={onPieEnter}
          
        >
          {chartData.map((entry, index) => (
            <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Charts;
