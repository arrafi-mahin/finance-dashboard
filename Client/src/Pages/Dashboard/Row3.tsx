import React from "react";
import DashboardBox from "../../Components/DashboardBox";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "../../state/api";
import { DataGrid } from "@mui/x-data-grid";
import BoxHeader from "../../Components/BoxHeader";
import { Box, useTheme } from "@mui/material";

function Row3() {
  const { palette } = useTheme();
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params}`,
    },
  ];

  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="List of Products"
          sideText={`${productData?.length} products`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            borderColor: palette.grey[800],
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            //   "& .MuiDataGrid-cell": {
            //     borderBottom: `1ox solid ${palette.grey[800]} !important`,
            //   },
            //   "& .MuiDataGrid-columnHeaders": {
            //     borderBottom: `1ox solid ${palette.grey[800]} !important`,
            //   },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
}

export default Row3;
