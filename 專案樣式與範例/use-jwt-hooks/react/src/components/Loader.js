import React from 'react'
import './Loader.scss'

function Loader({ loading = false }) {
  return (
    <div class="loader-p" style={{ display: loading ? 'block' : 'none' }}>
      {/* <div class="loader loader--audioWave"></div> */}
      {/* <div class="loader loader--snake"></div> */}
      <div class="loader loader--spinningDisc"></div>
      {/* <div class='loader loader--glisteningWindow'></div> */}
      {/* <div class="loader loader--circularSquare"></div> */}
    </div>
  )
}

export default Loader
