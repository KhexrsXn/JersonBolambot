import React, { useState } from 'react';
import "../GetinTouch/style.css";
import { Button, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Typography, TextField, Checkbox } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTableCells } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const GetInTouch = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [tableHeaders] = useState(['Items', 'Description', 'QTY', 'Unit', 'Unit Price', 'Amount', 'VAT INC.']);
  const [tableRows, setTableRows] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const createEmptyRow = () => ({
    key: Date.now().toString(),
    rowIndex: `0${tableRows.length + 1}`,
    content: (
      <TableRow key={Date.now().toString()}>
        <TableCell>
          <Button onClick={() => handleDeleteRow(Date.now().toString())}>
            <DeleteIcon />
          </Button>
        </TableCell>
        <TableCell width="400px">
          <TextField fullWidth size="small" />
        </TableCell>
        <TableCell width="300px">
          <TextField fullWidth size="small" />
        </TableCell>
        <TableCell width="150px">
          <TextField type='number' fullWidth size="small" />
        </TableCell>
        <TableCell width="150px">
          <TextField type='number' fullWidth size="small" />
        </TableCell>
        <TableCell width="150px">
          <TextField type='number' fullWidth size="small" />
        </TableCell>
        <TableCell width="150px">
          <TextField type='number' fullWidth size="small" />
        </TableCell>
        <TableCell width="80px" align='center'>
          <Checkbox />
        </TableCell>
      </TableRow>
    ),
  });

  const handleAddRow = () => {
    const newRow = createEmptyRow();
    setTableRows((prevRows) => [...prevRows, newRow]);
  };

  const handleDeleteRow = (key) => {
    const updatedRows = tableRows.filter((row) => row.key !== key);
    setTableRows(updatedRows);
  };

  return (
    <section id='contact' className='contact-container'>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" width={100}>
                <Button
                  size="small"
                  onClick={handleClick}
                >
                  <Typography variant="h6">
                    <BsThreeDotsVertical />
                  </Typography>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{
                    cursor: "pointer",
                    "& .MuiButtonBase-root:hover": { background: "#cccccc" },
                  }}
                >
                  <MenuItem onClick={handleAddRow}>
                    <FaTableCells />
                    &nbsp;&nbsp;&nbsp;<Typography> Add Row</Typography>
                  </MenuItem>
                </Menu>
              </TableCell>
              {tableHeaders.map((header, index) => (
                <TableCell align='center' key={index}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row) => row.content)}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default GetInTouch;
