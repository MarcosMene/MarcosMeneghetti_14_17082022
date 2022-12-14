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
    accessor: "firstname",
    sticky: "left",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "lastname",
    sticky: "left",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "datebirth",
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
    Header: "Start Date",
    Footer: "Start Date",
    accessor: "startdate",
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
    accessor: "countrystate",
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
        accessor: "firstname",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "lastname",
      },
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "datebirth",
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
        accessor: "startdate",
      },
      {
        Header: "Departament",
        Footer: "Departament",
        accessor: "departament",
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
        accessor: "countrystate",
      },
      {
        Header: "Zipcode",
        Footer: "Zipcode",
        accessor: "zipcode",
      },
    ],
  },
];
