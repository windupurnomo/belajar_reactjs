import React, { useState, Fragment } from "react";
import { Row, Col, FormGroup, Label, Input, Button, Table } from "reactstrap";

export default props => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [listPegawai, setListPegawai] = useState([]);
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
  const submit = e => {
    e.preventDefault();
    if (name === "") {
      alert("Nama Pegawai harus diisi");
      return;
    }
    if (phone === "") {
      alert("Nomor Telepon Pegawai harus diisi");
      return;
    }
    const pegawai = {
      name: name,
      phone: phone,
      email: email,
      birthDate: birthDate,
      address: address
    };
    setListPegawai([...listPegawai, pegawai]);
    setName("");
    setPhone("");
    setEmail("");
    setBirthDate("");
    setAddress("");
  };
  return (
    <Fragment>
      <h1>Data Pegawai</h1>
      <Row>
        <Col md={4}>
          <form onSubmit={submit}>
            <FormGroup>
              <Label>Nama</Label>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Nama Pegawai"
              />
            </FormGroup>
            <FormGroup>
              <Label>Telepon</Label>
              <Input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                type="text"
                placeholder="No. Telepon Pegawai"
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
                placeholder="Alamat Email Pegawai"
              />
            </FormGroup>
            <FormGroup>
              <Label>Tanggal Lahir</Label>
              <Input
                value={birthDate}
                onChange={e => setBirthDate(e.target.value)}
                type="date"
                placeholder="Tanggal Lahir Pegawai"
              />
            </FormGroup>
            <FormGroup>
              <Label>Alamat</Label>
              <Input
                value={address}
                onChange={e => setAddress(e.target.value)}
                type="textarea"
                placeholder="Alamat Pegawai"
              />
            </FormGroup>
            <Button color="primary" onClick={submit}>
              Simpan
            </Button>
          </form>
        </Col>
        <Col>
          {listPegawai.length === 0 ? (
            <center>
              <i>Data belum tersedia</i>
            </center>
          ) : (
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
          )}
        </Col>
      </Row>
    </Fragment>
  );
};
