import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


function MyVerticallyCenteredModal(props) {

    const {ProdName,ProdDet,Comp,Price,Quant} = props;

    const handleInput = (e) => {
      e.persist();
    }

      

    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='text-title'>
            Add Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='form-group mb-3'>
              <label>Product Name:</label>
              <input type="text" name="ProdName" onClick={handleInput} value={ProdName} className="form-control" />
            </div>
            <div className='form-group mb-3'>
              <label>Product Details:</label>
              <input type="text" name="ProdDet" onClick={handleInput} value={ProdDet} className="form-control" />
            </div>
            <div className='form-group mb-3'>
              <label>Company:</label>
              <input type="text" name="Comp" onClick={handleInput} value={Comp} className="form-control" />
            </div>
            <div className='form-group mb-3'>
              <label>Price:</label>
              <input type="text" name="Price" onClick={handleInput} value={Price} className="form-control" />
            </div> 
            <div className='form-group mb-3'>
              <label>Quantity:</label>
              <input type="text" name="Quant" onClick={handleInput} value={Quant} className="form-control" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick="">Clear</Button>
          <Button type="submit" onClick={props.onHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal;
