import { Table } from "antd";
import { useCrypto } from "../../context/crypto-context";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: {
      target: "full-header",
    },
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Price, $ ",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sorter: (a, b) => a.amount - b.amount,
  },
];

export default function AssetTable() {
  const { assets } = useCrypto();

  const data = assets.map((a) => ({
    key: a.id,
    name: a.name + " " + "(" + a.symbol + ")",
    price: a.totalAmount.toFixed(2),
    amount: a.amount,
  }));

  return (
    <div>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
}
