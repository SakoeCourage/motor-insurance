import Table from "@app/components/ui/Table";
import React from "react";
import Editor from "./partials/editor";


const page = () => {
  return (
    <div>
      <Table
        Editor={Editor}
        addButtonLabel="New Customer"
        addNewRecordLabel="New Customer"
        updateRecordLabel="Update Customer"
      />
    </div>
  );
};

export default page;
