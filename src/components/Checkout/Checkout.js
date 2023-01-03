import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useLoaderData } from "react-router-dom";
import ReactToPrint from "react-to-print";

const Checkout = () => {
  const pdfRef = useRef();
  const data = useLoaderData();
  const { picture, name, duration, about, price } = data;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className=" container pb-5">
      <p className="text-center text-success mt-3 fs-5 text-uppercase fw-semibold">
        Congratulations, You Got Premium Mebmership. Ready to Enroll!!
      </p>
      <div ref={pdfRef} className="p-3">
        <div className="text-center">
          <img className="w-25" src={picture} alt="" />
          <h1 className="text-uppercase">{name}</h1>
        </div>
        <p>
          <span className="fw-semibold">Details:</span> {about}
        </p>

        <div className="d-flex justify-content-between">
          <p>
            <span className="fw-semibold">Price:</span> ${price}
          </p>
          <p>
            <span className="fw-semibold">Duration: </span> {duration}
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between px-3">
        <button onClick={handleShow} className="btn btn-outline-success">
          Enroll Now
        </button>
        <ReactToPrint
          trigger={() => (
            <button className="btn btn-outline-success">Download PDF</button>
          )}
          content={() => pdfRef.current}
        />
      </div>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-success">
              Congratulations!! Successfully Enrolled
            </Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    </div>
  );
};

export default Checkout;
