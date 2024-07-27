import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { testIncomeStatementData } from "../../Components/Table/testData";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>
        This is the deisgn guide of finshark bla bla bla Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Necessitatibus, velit.
      </h1>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table data={testIncomeStatementData} config={tableConfig} />
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        incidunt itaque consequuntur in quis veniam perferendis eligendi, eos
        nisi iusto?
      </h3>
    </>
  );
};

export default DesignGuide;
