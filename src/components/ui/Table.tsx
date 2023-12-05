"use client";

import React, { useReducer } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import TableSearchbox from "./tableSearchbox";
import { Button } from "./button";
import SideModal from "./sideModal";
import { ContentSize } from "@app/types/appTypes";
import AlertModal from "../alerts/alertModal";
import TableFilter from "./tableFilter";

export type DataRow = Record<string, any>;

interface ITable {
  addNewRecordLabel?: string;
  addButtonLabel?: string;
  addButtonFunction?: () => void;
  updateRecordLabel?: string;
  sideModalSize?: ContentSize;
  Editor?: any;
  searchPlaceholder?: string;
  showAddButton?: boolean;
  showSearchBox?: boolean;
  // renderFormInTable?: boolean;

  columns: TableColumn<DataRow>[];
  tableData: DataRow[];
}

const Table: React.FC<ITable> = ({
  addButtonLabel = "New Record",
  addNewRecordLabel = "Add New Record",
  updateRecordLabel = "Update Record",
  sideModalSize = "md",
  Editor,
  searchPlaceholder = "Search...",
  showAddButton = true,
  showSearchBox = true,
  columns,
  tableData = [],
  addButtonFunction,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSideModal = () => {
    if (Editor) {
      if (!state.openSideModal)
        dispatch({ type: "SET_EDITOR_HEADING", payload: addNewRecordLabel });
      dispatch({ type: "TOGGLE_SIDE_MODAL", payload: !state.openSideModal });
    } else {
      addButtonFunction;
    }
  };

  const toggleAlertModal = () => {
    dispatch({ type: "TOGGLE_ALERT_MODAL", payload: !state.openAlertModal });
  };

  const handleAlertMutation = () => {
    dispatch({ type: "TOGGLE_LOAD_DELETE", payload: !state.loadDelete });
    setTimeout(() => {
      dispatch({ type: "TOGGLE_ALERT_MODAL", payload: !state.openAlertModal });
      dispatch({ type: "TOGGLE_LOAD_DELETE", payload: !state.loadDelete });
    }, 700);
  };

  return (
    <div className="w-full h-full flex flex-col gap-3">
      <div className="flex justify-between">
        <div className={`flex-grow max-w-md ${!showSearchBox && "hidden"}`}>
          <TableSearchbox placeholder={searchPlaceholder} />
        </div>
        <div className="flex items-center gap-4">
          <div>
            {/* <Paginate
              onNextPage={getMore}
              onPreviousPage={getLess}
              currentPage={pageInfo.currentPage}
              totalPages={pageInfo.totalPages}
              hasNextPage={pageInfo.hasNextPage}
              hasPreviousPage={pageInfo.hasPrevPage}
              refresh={fetchData}
            /> */}
          </div>
          <TableFilter />
          <div className={`${!showAddButton && "hidden"}`}>
            <Button
              variant="primary"
              label={addButtonLabel}
              onClick={toggleSideModal}
            />
          </div>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={tableData}
        pagination
        striped
        responsive
      />
      <SideModal
        open={state.openSideModal}
        closeModal={toggleSideModal}
        size={sideModalSize}
        title={state.editorHeading}
      >
        <Editor />
      </SideModal>
      <AlertModal
        open={state.openAlertModal}
        onCancel={toggleAlertModal}
        onContinue={handleAlertMutation}
        busy={state.loadDelete}
      />
    </div>
  );
};

export default Table;

const initialState = {
  openSideModal: false,
  addRecord: false,
  updateRecord: false,
  editorHeading: "",
  openAlertModal: false,
  loadDelete: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "TOGGLE_SIDE_MODAL":
      return {
        ...state,
        openSideModal: action.payload,
      };
    case "TOGGLE_ADD_RECORD":
      return {
        ...state,
        addRcord: action.payload,
      };
    case "TOGGLE_UPDATE_RECORD":
      return {
        ...state,
        updateRecord: action.payload,
      };
    case "TOGGLE_LOAD_DELETE":
      return {
        ...state,
        loadDelete: action.payload,
      };
    case "TOGGLE_ALERT_MODAL":
      return {
        ...state,
        openAlertModal: action.payload,
      };
    case "SET_EDITOR_HEADING":
      return {
        ...state,
        editorHeading: action.payload,
      };

    default:
      return state;
  }
};
