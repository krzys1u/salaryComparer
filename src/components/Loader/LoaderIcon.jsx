import React from 'react'

export const LoaderIcon = () => (
  <div style={{ width: 400, height: 400 }}>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g className="loader__icon">
        <g>
          <g>
            <g className="loader__icon--animation">
              <path
                strokeMiterlimit="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="8"
                stroke="#3f51b5"
                fill="none"
                d="M71.172 23.77H36.885c-7.243 0-13.115 5.872-13.115 13.115v0C23.77 44.128 29.642 50 36.885 50h26.23c7.243 0 13.115 5.872 13.115 13.115v0c0 7.243-5.872 13.115-13.115 13.115H23.77"
                className="loader__icon--letter"></path>
            </g>
          </g>
          <g>
            <g className="loader__icon--animation">
              <path
                className="loader__icon--pipe"
                d="M41.631 10v80"
                strokeMiterlimit="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="8"
                stroke="#849b87"
                fill="none"></path>
            </g>
          </g>
          <g>
            <g className="loader__icon--animation">
              <path
                className="loader__icon--pipe"
                d="M56.746 10v80"
                strokeMiterlimit="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="8"
                stroke="#849b87"
                fill="none"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
)
