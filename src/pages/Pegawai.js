import React, { useState, Fragment } from "react";
import { Row, Col, FormGroup, Label, Input, Button, Table } from "reactstrap";

export default props => {
  const listPegawai = [
    {
      name: "Zinedine Zidane",
      phone: "09878787878",
      email: "zidane@gmail.com",
      birthDate: "2000/04/20",
      address: "Ciamis"
    },
    {
      name: "Luis Figo",
      phone: "09878787876",
      email: "figo@gmail.com",
      birthDate: "2000/04/10",
      address: "Tasikmalaya"
    }
  ];
  const cTr = listPegawai.map((p, i) => {
    return (
      <tr key={i}>
        <td>{p.name}</td>
        <td>{p.phone}</td>
        <td>{p.email}</td>
        <td>{p.birthDate}</td>
        <td>{p.address}</td>
      </tr>
    );
  });
  return (
    <Fragment>
      <h1>Data Pegawai</h1>
      <Row>
        <Col md={4}>
          <form>
            <FormGroup>
              <Label>Nama</Label>
              <Input type="text" placeholder="Nama Pegawai" />
            </FormGroup>
            <FormGroup>
              <Label>Telepon</Label>
              <Input type="text" placeholder="No. Telepon Pegawai" />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="text" placeholder="Alamat Email Pegawai" />
            </FormGroup>
            <FormGroup>
              <Label>Tanggal Lahir</Label>
              <Input type="date" placeholder="Tanggal Lahir Pegawai" />
            </FormGroup>
            <FormGroup>
              <Label>Alamat</Label>
              <Input type="textarea" placeholder="Alamat Pegawai" />
            </FormGroup>
            <Button color="primary">Simpan</Button>
          </form>
        </Col>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Telepon</th>
                <th>Email</th>
                <th>Tgl Lahir</th>
                <th>Alamat</th>
              </tr>
            </thead>
            <tbody>{cTr}</tbody>
          </Table>
        </Col>
      </Row>
    </Fragment>
  );
};
