import {useMemo} from 'react'
import DashboardBox from '../../Components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery } from '../../state/api'
import { ResponsiveContainer,   XAxis, YAxis, Tooltip,  Line, CartesianGrid,  LineChart, } from 'recharts';
import BoxHeader from '../../Components/BoxHeader';
import { useTheme } from '@mui/material';
function Row2() {
  const{ data: operationalData }= useGetKpisQuery();
  const{ data: productData }= useGetProductsQuery();
  const {palette} = useTheme()
  console.log("data: ",productData)
  const operationalExpenses = useMemo(()=> {
    return(
      operationalData && operationalData[0].monthlyData.map(({month, operationalExpenses, nonOperationalExpenses})=>{
        return {
          name: month.substring(0,3),
          "Operational Expenses": operationalExpenses,
          "Non Operational Expenses": nonOperationalExpenses
        }
      })
    )
  },[operationalData])
  return (
    <>
        <DashboardBox  gridArea="d">
          <BoxHeader title="Operational vs Non-Operational Expenses"  sideText='+4%' />
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={400}
              data={operationalExpenses}
              margin={{
                top: 20,
                right: 0,
                left: -10,
                bottom: 55,
              }}
            >
              <CartesianGrid vertical={false} stroke={palette.grey[800]} />
              <XAxis dataKey="name" tickLine={false} style={{fontSize: "10px"}} />
              <YAxis yAxisId="left" orientation='left' axisLine={false} tickLine={false} style={{fontSize: "10px"}} />
              <YAxis yAxisId="right" orientation='right' axisLine={false} tickLine={false} style={{fontSize: "10px"}} />
              <Tooltip />
          
              <Line yAxisId="left" type="monotone" dataKey="Non Operational Expenses" stroke={palette.tertiary[500]} />
              <Line yAxisId="right" type="monotone" dataKey="Operational Expenses" stroke={palette.primary.main} />
            </LineChart>
          </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox  gridArea="e"></DashboardBox>
        <DashboardBox  gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2