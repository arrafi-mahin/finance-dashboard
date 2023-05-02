
import DashboardBox from '../../Components/DashboardBox'
import { useGetKpisQuery } from '../../state/api'
type Props = {}

function Row1({}: Props) {
  const {data } = useGetKpisQuery()
  return (
    <>
        <DashboardBox  gridArea="a"></DashboardBox>
        <DashboardBox  gridArea="b"></DashboardBox>
        <DashboardBox  gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1