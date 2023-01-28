/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Row,
  Col,
  Card,
  Form,
  Radio,
  Table,
  Upload,
  Space,
  message,
  Progress,
  Modal,
  Button,
  Avatar,
  Select,
  Input,
  Typography,
} from "antd";

import { useState } from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import EditOutlined from '@ant-design/icons/EditOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import pencil from "../assets/images/pencil.svg";

const { Title } = Typography;
const { TextArea } = Input;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// table code start
const columns = [
  {
    title: "Srno",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",

  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Mobile No",
    key: "mobileno",
    dataIndex: "mobileno",
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "role",
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        {/* <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar> */}
        <div className="avatar-info">
          <Title level={5}>Yogesh Rithe</Title>
        </div>
        {/* </Avatar.Group>{" "} */}
      </>
    ),
    email: (
      <>
        <div className="author-info">
          <Title level={5}>yogeshrithe.yr@gmail.com</Title>
        </div>
      </>
    ),

    mobileno: (
      <>
        <div className="author-info">
          <Title level={5}>6789768543</Title>
        </div>
      </>
    ),

    role: (
      <>
        <div className="author-info">
          <Title level={5}>Branch Manager</Title>
        </div>
      </>
    ),
    action: (
      <>
        <Space wrap >
          <EditOutlined style={{color:'#1890ff'}} />
          <DeleteOutlined style={{color:'red'}}/>
        </Space>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        {/* <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar> */}
        <div className="avatar-info">
          <Title level={5}>Yogesh Rithe</Title>
        </div>
        {/* </Avatar.Group>{" "} */}
      </>
    ),
    email: (
      <>
        <div className="author-info">
          <Title level={5}>yogeshrithe.yr@gmail.com</Title>
        </div>
      </>
    ),

    mobileno: (
      <>
        <div className="author-info">
          <Title level={5}>6789768543</Title>
        </div>
      </>
    ),
    role: (
      <>
        <div className="author-info">
          <Title level={5}>Branch Manager</Title>
        </div>
      </>
    ),
    action: (
      <>
        <Space wrap >
          <EditOutlined style={{color:'#1890ff'}} />
          <DeleteOutlined style={{color:'red'}}/>
        </Space>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        {/* <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar> */}
        <div className="avatar-info">
          <Title level={5}>Yogesh Rithe</Title>
        </div>
        {/* </Avatar.Group>{" "} */}
      </>
    ),
    email: (
      <>
        <div className="author-info">
          <Title level={5}>yogeshrithe.yr@gmail.com</Title>
        </div>
      </>
    ),

    mobileno: (
      <>
        <div className="author-info">
          <Title level={5}>6789768543</Title>
        </div>
      </>
    ),
    role: (
      <>
        <div className="author-info">
          <Title level={5}>Branch Manager</Title>
        </div>
      </>
    ),
    action: (
      <>
        <Space wrap >
          <EditOutlined style={{color:'#1890ff'}} />
          <DeleteOutlined style={{color:'red'}}/>
        </Space>
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        {/* <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar> */}
        <div className="avatar-info">
          <Title level={5}>Yogesh Rithe</Title>
        </div>
        {/* </Avatar.Group>{" "} */}
      </>
    ),
    email: (
      <>
        <div className="author-info">
          <Title level={5}>yogeshrithe.yr@gmail.com</Title>
        </div>
      </>
    ),

    mobileno: (
      <>
        <div className="author-info">
          <Title level={5}>6789768543</Title>
        </div>
      </>
    ),
    role: (
      <>
        <div className="author-info">
          <Title level={5}>Branch Manager</Title>
        </div>
      </>
    ),
    action: (
      <>
       <Space wrap >
          <EditOutlined style={{color:'#1890ff'}} />
          <DeleteOutlined style={{color:'red'}}/>
        </Space>
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        {/* <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar> */}
        <div className="avatar-info">
          <Title level={5}>Yogesh Rithe</Title>
        </div>
        {/* </Avatar.Group>{" "} */}
      </>
    ),
    email: (
      <>
        <div className="author-info">
          <Title level={5}>yogeshrithe.yr@gmail.com</Title>
        </div>
      </>
    ),

    mobileno: (
      <>
        <div className="author-info">
          <Title level={5}>6789768543</Title>
        </div>
      </>
    ),
    role: (
      <>
        <div className="author-info">
          <Title level={5}>Branch Manager</Title>
        </div>
      </>
    ),
    action: (
      <>
        <Space wrap >
          <EditOutlined style={{color:'#1890ff'}} />
          <DeleteOutlined style={{color:'red'}}/>
        </Space>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        {/* <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar> */}
        <div className="avatar-info">
          <Title level={5}>Yogesh Rithe</Title>
        </div>
        {/* </Avatar.Group>{" "} */}
      </>
    ),
    email: (
      <>
        <div className="author-info">
          <Title level={5}>yogeshrithe.yr@gmail.com</Title>
        </div>
      </>
    ),

    mobileno: (
      <>
        <div className="author-info">
          <Title level={5}>6789768543</Title>
        </div>
      </>
    ),
    role: (
      <>
        <div className="author-info">
          <Title level={5}>Branch Manager</Title>
        </div>
      </>
    ),
    action: (
      <>
        <Space wrap >
          <EditOutlined style={{color:'#1890ff'}} />
          <DeleteOutlined style={{color:'red'}}/>
        </Space>
      </>
    ),
  },
];
// project table start
// const project = [
//   {
//     title: "COMPANIES",
//     dataIndex: "name",
//     width: "32%",
//   },
//   {
//     title: "BUDGET",
//     dataIndex: "age",
//   },
//   {
//     title: "STATUS",
//     dataIndex: "address",
//   },
//   {
//     title: "COMPLETION",
//     dataIndex: "completion",
//   },
// ];
// const dataproject = [
//   {
//     key: "1",

//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava1} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}>Spotify Version</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">$14,000</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">working</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress percent={30} size="small" />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "2",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava2} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}>Progress Track</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">$3,000</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">working</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress percent={10} size="small" />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "3",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava3} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}> Jira Platform Errors</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">Not Set</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">done</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress percent={100} size="small" format={() => "done"} />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "4",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}> Launch new Mobile App</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">$20,600</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">canceled</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress
//             percent={50}
//             size="small"
//             status="exception"
//             format={() => "50%"}
//           />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "5",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}>Web Dev</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">$4,000</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">working</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress percent={80} size="small" />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "6",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava6} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}>Redesign Online Store</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">$2,000</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">canceled</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress percent={0} size="small" />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },
// ];


function Tables() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const option = [{ value: 'Central Manager', label: 'Central Manager' }, { value: 'Branch Manager', label: 'Branch Manager' }]
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Row>
        <Col>
          <Button type="primary" size="large" onClick={showModal} style={{ height: '50px' }}>Add User</Button>
        </Col>
        <Col xl={21} style={{ marginLeft: '10px' }}>
          <Input prefix={<SearchOutlined />} placeholder="Search" />
        </Col>
      </Row>
      <Modal title="Add User" okText="Add" width={1000} bodyStyle={{ height: 400 }} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <Row>
            <Col xl={8}>
              <label >First Name</label>
              <Input placeholder="First Name" />
            </Col>
            <Col xl={8}>
              <label style={{ marginLeft: '13px' }}>Middle Name</label>
              <Input placeholder="Last Name" style={{ marginLeft: '10px' }} />
            </Col>
            <Col xl={8}>
              <label style={{ marginLeft: '13px' }}>Last Name</label>
              <Input placeholder="Enter Mobile No" style={{ marginLeft: '18px' }} />
            </Col>
          </Row>
          <Row style={{ marginTop: '30px' }}>
            <Col xl={8}>
              <label>Email</label>
              <Input placeholder="Enter Email" />
            </Col>
            <Col xl={8}>
              <label style={{ marginLeft: '13px' }}>Mobile No</label>
              <Input placeholder="Enter Mobile No" style={{ marginLeft: '10px' }} />
            </Col>
            <Col xl={8}>
              <p style={{ marginLeft: '15px' }}>Role</p>
              <Select placeholder="Select Type" size="large" options={option} style={{ marginLeft: '18px', width: 310, marginTop: '-14px' }} />
            </Col>
          </Row>
          <Row style={{ marginTop: '30px' }}>
            <Col xl={24}>
              <label>Address</label>
              <TextArea placeholder="Enter Address" rows={6} />
            </Col>
          </Row>
        </Form>
      </Modal>
      <div className="tabled" style={{ marginTop: '30px' }}>
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="User Master"
            // extra={
            //   // <>
            //   //   <Radio.Group onChange={onChange} defaultValue="a">
            //   //     <Radio.Button value="a">All</Radio.Button>
            //   //     <Radio.Button value="b">ONLINE</Radio.Button>
            //   //   </Radio.Group>
            //   // </>
            // }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>

            {/* <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Projects Table"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="all">
                    <Radio.Button value="all">All</Radio.Button>
                    <Radio.Button value="online">ONLINE</Radio.Button>
                    <Radio.Button value="store">STORES</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={project}
                  dataSource={dataproject}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
              <div className="uploadfile pb-15 shadow-none">
                <Upload {...formProps}>
                  <Button
                    type="dashed"
                    className="ant-full-box"
                    icon={<ToTopOutlined />}
                  >
                    Click to Upload
                  </Button>
                </Upload>
              </div>
            </Card>*/}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
