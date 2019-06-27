import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import './style.css'
// import ModalTitle from 'react-bootstrap/ModalTitle'

class FoodItemModal extends React.Component {
  constructor() {
    super();
  }
  render() {
    // console.log(this.props)
    return (
      <Modal
        {...this.props}
        // size="lg"
        size="md"
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            {/* Modal heading */}
            {this.props.foodInfo.food_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col col-12 text-center'>
                <h3>Total Calories - {this.props.foodInfo.nf_calories}</h3>
              </div>
            </div>
          </div>
          <div className='row foodItemRow'>
            <div className='col col-6'>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  <h4>Total Carbohydrate</h4>
                </div>
              </div>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  {this.props.foodInfo.nf_total_carbohydrate}
                </div>
              </div>
            </div>
            <div className='col col-6'>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  <h4>Total Fat</h4>
                </div>
              </div>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  {this.props.foodInfo.nf_total_fat}
                </div>
              </div>
            </div>
          </div>

          <div className='row foodItemRow'>
            <div className='col col-6'>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  <h5>Cholesterol</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  {this.props.foodInfo.nf_cholesterol}
                </div>
              </div>
            </div>
            <div className='col col-6'>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  <h5>Dietary Fiber</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  {this.props.foodInfo.nf_dietary_fiber}
                </div>
              </div>
            </div>
          </div>

          <div className='row foodItemRow'>
            <div className='col col-6'>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  <h5>Protein</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  {this.props.foodInfo.nf_protein}
                </div>
              </div>
            </div>
            <div className='col col-6'>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  <h5>Saturated Fat</h5>
                </div>
              </div>
              <div className='row '>
                <div className='col col-12 text-center foodItemCol'>
                  {this.props.foodInfo.nf_saturated_fat}
                </div>
              </div>
            </div>
          </div>
          <div className='row foodItemRow'>
            <div className='col col-6'>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  <h5>Sodium</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  {this.props.foodInfo.nf_sodium}
                </div>
              </div>
            </div>
            <div className='col col-6'>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  <h5>Sugars</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col col-12 text-center foodItemCol'>
                  {this.props.foodInfo.nf_sugars}
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FoodItemModal