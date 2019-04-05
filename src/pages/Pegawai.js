import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, FormGroup, Label, Input, Button, Table } from "reactstrap";
import axios from "axios";

export default props => {
  const [nip, setNip] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [listPegawai, setListPegawai] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const getPegawai = () => {
    axios.get("http://localhost:4000/pegawai").then(r => {
      const data = r.data.map((d, i) => {
        d.birthDate = d.birth_date;
        return d;
      });
      setListPegawai(data);
    });
  };
  useEffect(getPegawai, []);
  /**
   *
   * edit mode:
   * - NIP disabled
   * - tampilkan button delete
   */
  const klikBaris = p => {
    setName(p.name);
    setPhone(p.phone);
    setEmail(p.email);
    setAddress(p.address);
    setNip(p.nip);
    setBirthDate(p.birthDate);
    setEditMode(true);
  };
  const cTr = listPegawai.map((p, i) => {
    return (
      <tr key={i} onClick={() => klikBaris(p)}>
        <td>{p.name}</td>
        <td>{p.phone}</td>
        <td>{p.email}</td>
        <td>{p.birthDate}</td>
        <td>{p.address}</td>
      </tr>
    );
  });
  const remove = e => {
    const b = window.confirm("Apakah Anda yakin akan menghapus data pegawai?");
    if (!b) return;
    axios.delete("http://localhost:4000/pegawai/" + nip).then(
      r => {
        getPegawai();
        cancel();
      },
      () => alert("Gagal hapus data pegawai")
    );
  };
  const cancel = e => {
    setNip("");
    setName("");
    setPhone("");
    setEmail("");
    setBirthDate("");
    setAddress("");
    setEditMode(false);
  };
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
      nip: nip,
      name: name,
      phone: phone,
      email: email,
      birthDate: birthDate,
      address: address
    };
    axios.post("http://localhost:4000/pegawai", pegawai).then(
      () => {
        setListPegawai([...listPegawai, pegawai]);
        setNip("");
        setName("");
        setPhone("");
        setEmail("");
        setBirthDate("");
        setAddress("");
        alert("Data berhasil disimpan");
      },
      () => alert("Data gagal disimpan")
    );
  };
  return (
    <Fragment>
      <h1>Data Pegawai</h1>
      <Row>
        <Col md={4}>
          <form onSubmit={submit}>
            <FormGroup>
              <Label>NIP</Label>
              <Input
                disabled={editMode}
                value={nip}
                onChange={e => setNip(e.target.value)}
                type="text"
                placeholder="NIP Pegawai"
              />
            </FormGroup>
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
            <Button onClick={cancel}>Cancel</Button>
            {editMode && (
              <Button color="danger" onClick={remove}>
                Delete
              </Button>
            )}
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
