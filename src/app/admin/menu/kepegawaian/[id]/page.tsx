import MainTab from '@/components/Fragments/TabPegawai/MainTab';
import Image from 'next/image';

type id = { params: { id: string } };
export default function DetailKepegawaian(props: id) {
  const { id } = props.params;
  return (
    <div className="px-5">
      <div className="bg-white rounded-xl p-5 my-5 text-center text-4xl font-bold shadow-md">
        <h1>Profil Pegawai</h1>
      </div>
      <div className="flex">
        <div className="w-1/3 p-5 bg-white flex justify-center items-center  rounded-2xl me-5 shadow-md">
          <Image
            src="/images/img-person.jpg"
            alt="foto pegawai"
            width={300}
            height={300}
            className="rounded-full "
          />
        </div>
        <div className="w-2/3 p-5 bg-white rounded-2xl shadow-md">
          <table className="table-auto text-left  h-full">
            <thead>
              <tr>
                <th>Nama</th>
                <td>: 123456789</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Tempat Lahir</th>
                <td>: 123456789</td>
              </tr>
              <tr>
                <th>Tanggal Lahir</th>
                <td>: 123456789</td>
              </tr>
              <tr>
                <th>Jenis Kelamin</th>
                <td>: 123456789</td>
              </tr>
              <tr>
                <th>Agama</th>
                <td>: 123456789</td>
              </tr>
              <tr>
                <th>Status Nikah</th>
                <td>: 123456789</td>
              </tr>
              <tr>
                <th>NIP</th>
                <td>: 123456789</td>
              </tr>
              <tr>
                <th>Tipe Pegawai</th>
                <td>: 123456789</td>
              </tr>
              <tr>
                <th>Nomor Kartu</th>
                <td>: 123456789</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <MainTab />
      </div>
    </div>
  );
}
