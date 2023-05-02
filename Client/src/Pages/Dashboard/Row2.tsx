import React from 'react'
import DashboardBox from '../../Components/DashboardBox'
type Props = {}

function Row2({}: Props) {
  return (
    <>
        <DashboardBox  gridArea="d"></DashboardBox>
        <DashboardBox  gridArea="e"></DashboardBox>
        <DashboardBox  gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2