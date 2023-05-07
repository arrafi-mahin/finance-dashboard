import React from "react";
import { Box, Typography } from "@mui/material";
import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <Box
        height="80%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        color="#ffffff"
      >
        <Rings
          height="80"
          width="80"
          color="#4fa94d"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
        <Typography variant="h5" mt="0.10rem" fontSize="18px">
          Loading...
        </Typography>
      </Box>
    </>
  );
};
export default Loader;
