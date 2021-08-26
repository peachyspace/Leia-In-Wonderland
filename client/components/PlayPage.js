import React from 'react'
import Typography from '@material-ui/core/Typography'

const PlayPage = () => {
  return (
    <div>
      <Typography variant="h2" align="center">
        Can You Save Leia ?
      </Typography>
      <div id="canvasContianer">
        <canvas id="canvas" />
      </div>
    </div>
  )
}
export default PlayPage
