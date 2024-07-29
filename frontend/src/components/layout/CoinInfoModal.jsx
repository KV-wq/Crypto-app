import { Divider, Tag, Typography } from "antd";
import CoinInfo from "./CoinInfo";

export default function CoinInfoModal({ coin }) {
  return (
    <>
      <CoinInfo coin={coin} withSymbol />
      <Divider />
      <Typography.Paragraph>
        <Typography.Text strong>1 Hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>1 Day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? "green" : "red"}>
          {coin.priceChange1d}%
        </Tag>
        <Typography.Text strong>1 Week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>
      <Divider />
      {coin.price.toFixed(2) != 0 ? (
        <Typography.Paragraph style={{ fontSize: 30 }}>
          <Typography.Text strong style={{ fontSize: 30 }}>
            Price:{" "}
          </Typography.Text>
          {coin.price.toFixed(2)} $
        </Typography.Paragraph>
      ) : (
        <Typography.Paragraph style={{ fontSize: 30 }}>
          <Typography.Text strong style={{ fontSize: 30 }}>
            Price:{" "}
          </Typography.Text>
          {coin.price.toFixed(7)} $
        </Typography.Paragraph>
      )}
      <Typography.Paragraph style={{ fontSize: 20 }}>
        <Typography.Text strong style={{ fontSize: 20 }}>
          Price BTC:{" "}
        </Typography.Text>
        {coin.priceBtc.toFixed(10)}
      </Typography.Paragraph>
    </>
  );
}
