import { Modal, Button } from "react-bootstrap";
import "../styles/ManageQRPOSModal.scss";
import { IoClose } from "react-icons/io5";

export default function ManageQRPOSModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} className="manage-qrpos-modal">
      <Modal.Header>
        <Modal.Title>Manage QR/POS</Modal.Title>
        <IoClose onClick={onHide} />
      </Modal.Header>

      <Modal.Body>
        <div className="popup-container">
          <div className="collection-summary">
            <span className="label">Today's Total Collection</span>
            <span className="amount">₹1,023</span>
          </div>
          <div className="collection-summary-2">
            <span className="label">Already Settled</span>
            <span className="amount">₹100</span>
          </div>
          <div className="settlement-box">
            <h6 className="section-title">Settlement Calculation</h6>
            <div className="row-item">
              <span>Amount yet to be settled</span>
              <span className="row-right">IBRAHIM MOHAMMEDALI</span>
            </div>
            <div className="row-item">
              <span>Past pending amount</span>
              <span className="row-right">09214124127</span>
            </div>
            <div className="row-item">
              <span>Charges</span>
              <span className="row-right">07, Aug 2024</span>
            </div>
          </div>
          <div className="total-box">
            <span className="bold">Today's Total Collection</span>
            <span className="amount">₹1,023</span>
          </div>
          <div className="info-box">
            <div className="info-left">
              <p className="small-text">
                Tap "Settle Now" to instantly get settlements in your bank
                account.
              </p>
              <p className="chargeable">Settle Now is Chargeable</p>
            </div>
            <Button variant="success" size="sm">
              Settle Now
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
