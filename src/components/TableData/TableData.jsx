import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import CustomNoRowsOverlay from "./CustomNoRowsOverlay";
import CustomLoadingOverlay from "./CustomLoadingOverlay";
import CustomErrorOverLay from "./CustomErrorOverLay";

import { Wrapper } from "./Styles";

const propTypes = {
   rows: PropTypes.array.isRequired,
   columns: PropTypes.array.isRequired,
};

const TableData = ({ rows, columns, autoRowHeight, loading, ...passProps }) => {
   const [pageSize, setPageSize] = useState(10);

   if (autoRowHeight) {
      passProps.getRowHeight = () => "auto";
   }

   return (
      <Wrapper>
         <DataGrid
            getRowClassName={() => "row"}
            getCellClassName={() => "cell"}
            pageSize={pageSize}
            rowsPerPageOptions={[5, 10, 20]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pagination
            {...passProps}
            className="table"
            rows={rows}
            columns={columns}
            disableSelectionOnClick
            disableColumnMenu={true}
            components={{
               NoRowsOverlay: CustomNoRowsOverlay,
               LoadingOverlay: CustomLoadingOverlay,
               ErrorOverlay: CustomErrorOverLay,
            }}
         />
      </Wrapper>
   );
};

TableData.propTypes = propTypes;

export default memo(TableData);
