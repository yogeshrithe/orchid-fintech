import React from 'react'
import {
  Row,
  Col,
  Card,
  Statistic,
  Input,
  Button,
  List,
  Descriptions,
  Avatar,
} from "antd";
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { PlusOutlined, ExclamationOutlined } from "@ant-design/icons";
import mastercard from "../assets/images/mastercard-logo.png";
import paytm from "../assets/images/paytm.png";
import razorpay from "../assets/images/razorpay.jpg";
import googlepay from "../assets/images/google-pay.png";
import paypal from "../assets/images/paypal-logo-2.png";
import visa from "../assets/images/visa-logo.png";


const pencil = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
      className="fill-gray-7"
    ></path>
    <path
      d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
      className="fill-gray-7"
    ></path>
  </svg>,
];

const Payment = () => {
  const [copied,setCopied]=useState(false)
  return (
    <div>
      <Row>
        <Col xs={24} className="mb-24">
          <Card
            className="header-solid h-full ant-card-p-0"
            title={
              <>
                <Row
                  gutter={[24, 0]}
                  className="ant-row-flex ant-row-flex-middle"
                >
                  <Col xs={24} md={12}>
                    <h6 className="font-semibold m-0">Payment Gateways</h6>
                  </Col>
                  <Col xs={24} md={12} className="d-flex">
                    <Button type="primary">ADD</Button>
                  </Col>
                </Row>
              </>
            }
          >
            <Row gutter={[24, 0]}>
              <Col span={24} md={24}>
                <Card className="payment-method-card">
                  <img src={paytm} alt="paytm" style={{ height: '50px', width: '70px' }} />
                  <Input className="card-number" value="http://paytm/yogeshrithe" style={{ marginLeft: '8px' }}></Input>

                  <CopyToClipboard text="http://paytm/yogeshrithe" onCopy={()=>setCopied(true)}>
                    <Button type="primary" style={{ marginLeft: '20px' }}>
                      Copy
                    </Button>
                  </CopyToClipboard>


                  <Button type="primary" style={{ marginLeft: '30px', marginRight: '8px' }}>
                    Share
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row gutter={[24, 0]} style={{ marginTop: '20px' }}>
              <Col span={24} md={24}>
                <Card className="payment-method-card">
                  <img src={razorpay} alt="paytm" style={{ height: '50px', width: '70px' }} />
                  <Input className="card-number" value="http://paytm/yogeshrithe" style={{ marginLeft: '8px' }}></Input>
                  <Button type="primary" style={{ marginLeft: '20px' }}>
                    Copy
                  </Button>
                  <Button type="primary" style={{ marginLeft: '30px', marginRight: '8px' }}>
                    Share
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row gutter={[24, 0]} style={{ marginTop: '20px' }}>
              <Col span={24} md={24}>
                <Card className="payment-method-card">
                  <img src={googlepay} alt="paytm" style={{ height: '50px', width: '70px' }} />
                  <Input className="card-number" value="http://paytm/yogeshrithe" style={{ marginLeft: '8px' }}></Input>
                  <Button type="primary" style={{ marginLeft: '20px' }}>
                    Copy
                  </Button>
                  <Button type="primary" style={{ marginLeft: '30px', marginRight: '8px' }}>
                    Share
                  </Button>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Payment
