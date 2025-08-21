import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Spinner,
  Alert,
  Pagination,
  Card,
  Form,
} from "react-bootstrap";
// import "./SettlementHistory.scss";
import "../styles/SettlementHistory.scss";
import ManageQRPOSModal from "./ManageQRPOSModal";
import { IoFilter } from "react-icons/io5";
import transactionsData from "../Json/List.json";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk";

export default function SettlementHistory() {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  // const fetchTransactions = async (pageNum = 0) => {
  //   try {
  //     setLoading(true);
  //     setError("");

  //     const response = await axios.get("http://64.227.189.27/wallet/api/v1/transaction_history", {
  //       headers: {
  //         "Authorization": `Bearer ${TOKEN}`,
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-Type": "application/json",
  //       },
  //       params: {
  //         service_id: 111,
  //         page: pageNum,
  //       },
  //     });

  //     console.log("API Response:", response.data);

  //     setTransactions(response.data?.data || []);
  //     setTotalPages(response.data?.totalPages || 1);
  //   } catch (err) {
  //     setError(
  //       err.response?.data?.message || err.message || "Something went wrong"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchTransactions(page);
  // }, [page]);

  useEffect(() => {

    if (transactionsData?.data) {
      setTransactions(transactionsData.data);
    }
  }, []);

  return (
    <div className="layout">
      <div className="main">
        {/* <header className="topbar">
          <h5>Settlement History</h5>
          <Button variant="outline-success">Download statement</Button>
        </header> */}
        <div className="search-banner">
          <div className="form-filter">
            <Form.Control
              type="text"
              placeholder="Search"
              className="search-box"
            />
            <span className="filter-icon">
              <IoFilter />
            </span>
          </div>

          <div className="banner-info">
            <p>
              Today’s total collection will be auto-settled by{" "}
              <b>06:00AM, 23rd Oct’23</b> Tomorrow.
            </p>
            <Button variant="success" onClick={() => setShowModal(true)}>
              Settle Now!
            </Button>
            <ManageQRPOSModal
              show={showModal}
              onHide={() => setShowModal(false)}
            />
          </div>
        </div>
        {loading && (
          <div className="text-center my-4">
            <Spinner animation="border" variant="success" />
          </div>
        )}
        {error && <Alert variant="danger">{error}</Alert>}

        <table className="transaction-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date & Time</th>
              <th>Account</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((txn, idx) => (
                <tr key={idx}>
                  <td>{txn.transaction_id}</td>
                  <td>
                    {new Date(txn.created_date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td>
                    <span className="wallet">
                      <img src={txn.wallet?.image} alt={txn.wallet?.name} />
                      From {txn.wallet?.name}
                    </span>
                  </td>
                  <td>₹{txn.amount.toLocaleString()}</td>
                  <td>
                    <span
                      className={`status-badge ${txn.status.toLowerCase()}`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td>
                    <a
                      href={`/txn/${txn.transaction_id}`}
                      className="view-link"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="d-flex justify-content-center mt-3">
          <Pagination className="custom-pagination">
            <Pagination.Prev
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
            />
            {[...Array(totalPages)].map((_, idx) => (
              <Pagination.Item
                key={idx}
                active={idx === page}
                onClick={() => setPage(idx)}
              >
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
}
