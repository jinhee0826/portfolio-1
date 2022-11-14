import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DataContext from '../context/DataContext';

function  ProfileUpdateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {action, state} = useContext(DataContext);
  const[file, setFile] = useState("");
  const imgShow = useRef();

  const onLoadFile = (e) => {
    setFile(e.target.files[0])
    imgShow.current.style.backgroundSize = "cover"
    imgShow.current.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`
  }

  const updateProfile = () => {
    action.setUser({
        ...state.user, profile : URL.createObjectURL(file) 
    })
    handleClose();
  }

  return (
    <>
      <Button variant="light"  onClick={handleShow} className='mt-3 d-flex' >
        프로필 사진 수정하기
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Proflie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div ref={imgShow} style={{
            width: "200px", height: "200px", backgroundColor: "lightgray"}}>
          </div>
          <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>추가 할 이미지를 선택하세요</Form.Label>
              <Form.Control type="file"  onChange={onLoadFile} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateProfile}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileUpdateModal;