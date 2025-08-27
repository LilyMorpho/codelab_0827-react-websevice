import { useEffect, useState } from "react";

import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";
export default function BoardList() {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const [list, setList] = useState([])

    const getPosts = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts"
    const {data} = await axios.get(url)
    setList(data)
}
    useEffect(() => {
        getPosts()
    }, [])  

    return (
        <TableContainer component={{Paper}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
} 