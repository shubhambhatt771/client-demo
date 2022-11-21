import React from 'react'
import DocImg from './assets/imgs/black-doctor.jpg'
const DemoCard = () => {
  return (
    <div className='d-flex flex-column align-items-center py-4 justify-content-center'>
      <div className="card">
        <div className='card-body'>
          <div className="d-flex align-items-center mb-3">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <div className='w-100 heading-text'>
              {/* <p> */}
              UPCOMING APPOINTMENTS
              {/* </p> */}
            </div>
          </div>
          <div className='wrapper-info mt-5 mb-3 py-4 px-3 d-flex justify-content-between align-items-center'>
            <p className='p-0 m-0 booking-text'>New Booking in 2 Minutes</p>
            <button className='book-now-btn'>Book Now</button>
          </div>
          {
            [1, 2].map(() => (
              <>
                <div>
                  <div className='doc-card mt-3 py-3 my-3'>
                    <div className='px-1 mb-3 d-flex justify-content-around align-items-center'>
                      <button className='btn d-btn d-btn-selected rounded-pill'>Clinic</button>

                      <button className='btn d-btn rounded-pill'>Test</button>

                      <button className='btn d-btn rounded-pill'>Surgery</button>

                      <button className='btn d-btn rounded-pill'>Medicine</button>

                    </div>
                    <div className='d-flex align-items-center  justify-content-around my-4'>
                      <img className='doc-logo' src={DocImg} alt="doc" />
                      <div className='d-flex flex-column align-items-start'>
                        <p>
                          17 september 2021, 9.30 PM
                        </p>
                        <p className='appointment-text'>
                          Appointment With Doctor Arun
                        </p>
                        <p>
                          Doctor World Clinic
                        </p>
                      </div>
                    </div>

                    <div className='d-flex justify-content-around mt-3 mb-3 align-items-center'>
                      <button className='btn action-btn'>RESCHEDULE</button>

                      <button className='btn action-btn action-btn-cancel'>CANCEL</button>

                      <button className='btn action-btn-view'>
                        <i className="fa fa-eye fa-lg eye-icon" aria-hidden="true"></i>
                        VIEW
                      </button>

                    </div>
                  </div>
                </div>
              </>
            ))
          }
          <div className='d-flex'>
            <button className='btn py-2 w-100 rounded-pill btn-back'>Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoCard