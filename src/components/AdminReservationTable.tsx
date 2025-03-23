'use client'

import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import SearchBox from './SearchBox';

export default function AdminReservationTable() {
  const [reservations, setReservations] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

//   useEffect(() => {
//     async function fetchReservations() {
//       try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reservations`);

//         if (!response.ok) throw new Error('Failed to fetch reservations');
//         const data = await response.json();
//         setReservations(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchReservations();
//   });

  const handleChangePage = (_event: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <main>
      <div className="flex flex-col pt-5 flex-center w-[90vw] max-w-[850px] mt-10 h-fit rounded-lg shadow-lg bg-white mx-auto">
        <SearchBox />
      <Paper sx={{ width: '90vw', maxWidth: 800, overflow: 'hidden', margin: '20px auto' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="reservation table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ minWidth: 170 }}>Reservation Date</TableCell>
                <TableCell align="left" style={{ minWidth: 170 }}>User</TableCell>
                <TableCell align="left" style={{ minWidth: 170 }}>Restaurant</TableCell>
                <TableCell align="left" style={{ minWidth: 170 }}>Created At</TableCell>
                <TableCell align="right" style={{ minWidth: 100 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {reservations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((reservation) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={reservation._id}>
                  <TableCell align="left">{new Date(reservation.reservationDate).toLocaleDateString()}</TableCell>
                  <TableCell align="left">{reservation.user.name}</TableCell>
                  <TableCell align="left">{reservation.restaurant.name}</TableCell>
                  <TableCell align="left">{new Date(reservation.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => window.location.href = `/reservations?restaurant=${reservation.restaurant._id}`}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      style={{ marginLeft: 8 }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={reservations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>  
      </div>
    </main>
  );
}
