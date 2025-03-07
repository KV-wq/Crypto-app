import { Layout, Select, Space, Button, Modal, Drawer } from "antd";
import { useCrypto } from "../../context/crypto-context";
import { useEffect, useState } from "react";
import CoinInfoModal from "./CoinInfoModal";
import AddAssetForm from "./AddAssetForm";

const headerStyle = {
  width: "100%",
  textAlign: "center",
  height: 60,
  backgroundColor: "#3072c3",
  paddind: ".5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function AppHeader() {
  const [select, setSelect] = useState(false);
  const [modal, setModal] = useState(false);
  const [coin, setCoin] = useState(null);
  const [drawer, setDrawer] = useState(false);

  const { crypto } = useCrypto();

  useEffect(() => {
    const keypress = (event) => {
      if (event.key == "/") {
        setSelect((prev) => !prev);
      }
    };
    document.addEventListener("keypress", keypress);
    return () => document.removeEventListener("keypress", keypress);
  }, []);

  function handleSelect(value) {
    setCoin(crypto.find((c) => c.id == value));
    setModal(true);
  }

  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{
          width: "17%",
        }}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        open={select}
        value="Press to open"
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.label}
            />{" "}
            {option.data.label}
          </Space>
        )}
      />
      <Button type="primary" onClick={() => setDrawer(true) & setCoin(null)}>
        Add Asset
      </Button>

      <Modal
        title="Basic Modal"
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        <CoinInfoModal coin={coin} />
      </Modal>

      <Drawer
        title="Add Asset"
        open={drawer}
        onClose={() => setDrawer(false)}
        destroyOnClose
        width={"35vw"}
      >
        <AddAssetForm onClose={() => setDrawer(false)} />
      </Drawer>
    </Layout.Header>
  );
}
