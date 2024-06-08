import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout";
import axios from "axios";
import { message, Table, Button, Tag, Space } from "antd";
// import {
//   CheckCircleOutlined,
//   CloseCircleOutlined,
// } from "@ant-design/icons";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  // getUsers
  const getDoctors = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllDoctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle account
  const handleAccountStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/admin/changeAccountStatus",
        {
          doctorId: record._id,
          userId: record.userId,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag
          className={`status-tag ${status.toLowerCase()} status`} // Add dynamic class based on status
          icon={
            status === "pending" ? (
              <Space>
                {/* You can add any icons or additional elements here */}
              </Space>
            ) : null
          }
        >
          {status}
        </Tag>
      ),
    },
  
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <Space size="middle">
          {record.status === "pending" ? (
            <Button
              type="primary"
              onClick={() => handleAccountStatus(record, "approved")}
            >
              Approve
            </Button>
          ) : (
            <Button type="danger">Reject</Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="text-center m-3">All Doctors</h1>
      <Table
        className="custom-table"
        columns={columns}
        dataSource={doctors}
        bordered
        onRow={(record, rowIndex) => {
          return {
            onMouseEnter: (event) => {
              // Handle hover enter if needed
              event.currentTarget.classList.add("hovered-row");
            },
            onMouseLeave: (event) => {
              // Handle hover leave if needed
              event.currentTarget.classList.remove("hovered-row");
            },
          };
        }}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "even-row" : "odd-row"
        }
      />
    </Layout>
  );
};

export default Doctors;
