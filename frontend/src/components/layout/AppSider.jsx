import { Card, Layout, Statistic, List, Typography, Tag } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { capitalize } from "../../utils";
import { useContext, useState } from "react";
import CryptoContext, {
  CryptoContextProvider,
} from "../../context/crypto-context";

const siderStyle = {
  textAlign: "start",
  lineHeight: "50px",
  color: "#fff",
  backgroundColor: "#022647",
  padding: "1rem",
};

export default function AppSider() {
  const { assets, setAssets } = useContext(CryptoContext);

  const handleDeleteAsset = (id) => {
    const updatedAssets = assets.filter((asset) => asset.id !== id);
    setAssets(updatedAssets);
  };

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      {assets.map((asset) => (
        <Card className="card" key={asset.id} style={{ marginBottom: "1rem" }}>
          <CloseOutlined
            onClick={() => handleDeleteAsset(asset.id)}
            className="close"
            style={{
              fontSize: "20px",
              position: "absolute",
              right: "1em",
            }}
          />
          <Statistic
            title={capitalize(asset.id)}
            value={asset.totalAmount}
            precision={2}
            valueStyle={{
              color: asset.grow ? "#3f8600" : "#cf1322",
            }}
            prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            suffix="$"
          />

          <List
            size="small"
            dataSource={[
              {
                title: "Total profit",
                value: asset.totalProfit,
                withTag: true,
              },
              { title: "Asset amount", value: asset.amount, isPlan: true },
            ]}
            renderItem={(item) => (
              <List.Item>
                <span>{item.title}</span>
                <span>
                  {item.withTag && (
                    <Tag color={asset.grow ? "green" : "red"}>
                      {asset.growPercent}%
                    </Tag>
                  )}
                  {item.isPlan && item.value}
                  {!item.isPlan && (
                    <Typography.Text type={asset.grow ? "success" : "danger"}>
                      {item.value.toFixed(2)}$
                    </Typography.Text>
                  )}
                </span>
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
}
