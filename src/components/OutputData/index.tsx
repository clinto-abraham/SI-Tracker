import React from 'react'
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useSelector } from 'react-redux';


const Output = () => {
    const formData = useSelector((state: any) => state.project);
  return (
    <div><Typography variant={"h1"} sx={{ height: 110, padding: 20 }}>
     SI Tracker : Project Information
  </Typography> 

  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Project Type</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Client Name</TableCell>
            <TableCell align="right">Collaborators</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {formData.projectName}
              </TableCell>
              <TableCell align="right">{formData.projectType}</TableCell>
              <TableCell align="right">{formData.textarea}</TableCell>
              <TableCell align="right">{formData.clientName}</TableCell>
              <TableCell align="right">{formData.collaborator}</TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
{/* 

  <Grid container>
    <Grid item xs={6}>
    <Typography variant={"h6"} sx={{ height: 110, padding: 20 }}>{JSON.stringify(formData)}</Typography> 
    </Grid>

  </Grid> */}
  </div>
  )
}

export default Output