import Input from '../Elements/Input';
export default function FormRegistrasi() {
  return (
    <div className="m-5 ">
      <h1>Pendaftaran Pasien</h1>
      <div className="flex">
        <div className="grid grid-cols-2 gap-4 text-gray-600">
          <Input id="nomorRM" label="Nomor RM" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Tgl. Daftar" placeholder="Tanggal Daftar" />
          <Input
            id="nomorRM"
            label="Nama"
            placeholder="Nama Lengkap"
            styleParent="col-span-2 flex"
            className="w-full"
          />
          <Input id="nomorRM" label="Jenis Kelamin" placeholder="Jenis Kelamin" />
          <Input id="nomorRM" label="Tgl. Lahir" placeholder="Tanggal Lahir" />
          <Input id="nomorRM" label="Nama Ibu" placeholder="Nama Ibu" />
          <Input id="nomorRM" label="Gol. Darah" placeholder="Golong Darah" />
          <Input id="nomorRM" label="Status Nikah" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Agama" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Nomor RM" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Nomor RM" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Nomor RM" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Nomor RM" placeholder="Masukkan Nomor RM" />
        </div>
        <div className="grid grid-cols-2 gap-4 text-gray-600">
          <Input id="nomorRM" label="Nomor RM" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Tgl. Daftar" placeholder="Tanggal Daftar" />
          <Input
            id="nomorRM"
            label="Nama"
            placeholder="Nama Lengkap"
            styleParent="col-span-2 flex"
            className="w-full"
          />
          <Input
            id="nomorRM"
            label="Jenis Kelamin"
            placeholder="Jenis Kelamin"
            styleParent="col-span-2 row-span-2 h-full"
            type="textarea"
          />

          <Input id="nomorRM" label="Status Nikah" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Agama" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Nomor RM" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Nomor RM" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Nomor RM" placeholder="Masukkan Nomor RM" />
          <Input id="nomorRM" label="Nomor RM" placeholder="Masukkan Nomor RM" />
        </div>
      </div>
    </div>
  );
}
