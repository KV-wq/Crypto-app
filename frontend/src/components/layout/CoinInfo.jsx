import { Flex, Typography } from "antd";

export default function CoinInfo({ coin, withSymbol }) {
  return (
    <Flex align="center">
      <img
        src={coin.icon}
        alt={coin.name}
        style={{ paddingRight: 10, width: 50 }}
      />
      <Typography.Title style={{ margin: 0 }} level={2}>
        {coin.name} {withSymbol && <span>({coin.symbol})</span>}
      </Typography.Title>
    </Flex>
  );
}
