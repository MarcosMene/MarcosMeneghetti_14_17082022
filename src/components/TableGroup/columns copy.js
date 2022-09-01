import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters: true, //disable filter for id
    sticky: "left",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    sticky: "left",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    sticky: "left",
  },
  {
    Header: "Start Date",
    Footer: "Start Date",
    accessor: "start_date",
    //to format date
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Departament",
    Footer: "Departament",
    accessor: "departament",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_birth",
    //to format date
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Street",
    Footer: "Street",
    accessor: "street",
  },
  {
    Header: "City",
    Footer: "City",
    accessor: "city",
  },
  {
    Header: "State",
    Footer: "State",
    accessor: "state",
  },
  {
    Header: "Zipcode",
    Footer: "Zipcode",
    accessor: "zipcode",
  },
];

export const GROUPED_COLUMNS = [
  {
    //group header, footer and accessor
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    //group name and last name
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    //group all others info
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Start Date",
        Footer: "Start Date",
        accessor: "start_date",
      },
      {
        Header: "Departament",
        Footer: "Departament",
        accessor: "departament",
      },
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_birth",
      },
      {
        Header: "Street",
        Footer: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        Footer: "City",
        accessor: "city",
      },
      {
        Header: "State",
        Footer: "State",
        accessor: "state",
      },
      {
        Header: "Zipcode",
        Footer: "Zipcode",
        accessor: "zipcode",
      },
    ],
  },
];
