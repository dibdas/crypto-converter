import React from "react";
// import { Button } from "antd";
import { Button } from "@nextui-org/react";
import { Card, Col, Row } from "antd";
import "./Converter.scss";
import { Checkbox, Form, Input, Select } from "antd";

function Converter() {
  const names = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "Yiminghe", label: "yiminghe" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];

  return (
    <div className="converter">
      <Row gutter={16}>
        <Col span={8}>
          <Card className="crypto-card" title="Card title" bordered={false}>
            Card content
            <Form>
              <Form.Item>
                <Input />
              </Form.Item>
            </Form>
            <div className="select-box">
              <Select options={names} style={{ width: 120 }} />
              <Select options={names} style={{ width: 120 }} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Converter;
