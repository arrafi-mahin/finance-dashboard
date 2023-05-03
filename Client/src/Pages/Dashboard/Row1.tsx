import {useMemo} from 'react'
import DashboardBox from '../../Components/DashboardBox'
import { useGetKpisQuery } from '../../state/api'
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts';
import { useTheme } from '@mui/material';
import BoxHeader from '../../Components/BoxHeader';
type Props = {}

function Row1({}: Props) {
  const {palette} = useTheme();
  const {data } = useGetKpisQuery();
  console.log("data", data);

  const revenueExpenses = useMemo(()=> {
    return(
      data && data[0].monthlyData.map(({month, revenue, expenses})=>{
        return {
          name: month.substring(0,3),
          revenue: revenue,
          expenses: expenses
        }
      })
    )
  },[data])
  return (
    <>
        <DashboardBox  gridArea="a">
          <BoxHeader title="Revenue and Expenses" subtitle='Top line represents revenue, bottom line represents expenses' sideText='+4%' />
          <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
              <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
              <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} style={{fontSize: "10px"}} />
          <YAxis axisLine={{strokeWidth: "0" }} tickLine={false} style={{fontSize: "10px"}} domain={[8000, 23000]} />
          <Tooltip />
          <Area type="monotone" dot={true} dataKey="revenue" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
          <Area type="monotone" dot={true} dataKey="expenses" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
        </AreaChart>
          </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox  gridArea="b">
          <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
              <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
              <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} style={{fontSize: "10px"}} />
          <YAxis axisLine={{strokeWidth: "0" }} tickLine={false} style={{fontSize: "10px"}} domain={[8000, 23000]} />
          <Tooltip />
          <Area type="monotone" dot={true} dataKey="revenue" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
          <Area type="monotone" dot={true} dataKey="expenses" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
        </AreaChart>
          </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox  gridArea="c">
          <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
              <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
              <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} style={{fontSize: "10px"}} />
          <YAxis axisLine={{strokeWidth: "0" }} tickLine={false} style={{fontSize: "10px"}} domain={[8000, 23000]} />
          <Tooltip />
          <Area type="monotone" dot={true} dataKey="revenue" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
          <Area type="monotone" dot={true} dataKey="expenses" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
        </AreaChart>
          </ResponsiveContainer>
        </DashboardBox>
    </>
  )
}

export default Row1