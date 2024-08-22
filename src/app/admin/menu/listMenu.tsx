import {
  FaAddressBook,
  FaAmbulance,
  FaBolt,
  FaCode,
  FaCubes,
  FaDatabase,
  FaDesktop,
  FaFilm,
  FaFlask,
  FaHome,
  FaHotel,
  FaMedkit,
  FaMoneyBill,
  FaPlug,
  FaShoppingCart,
  FaTachometerAlt,
  FaTasks,
  FaUser,
  FaUserCircle,
  FaUserMd,
  FaUsers,
  FaWhatsapp,
  FaWheelchair,
  FaWrench,
} from 'react-icons/fa';

interface Item {
  name: string;
  href: string;
  icon: any;
}

const cardMenu: Item[] = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: FaHome,
  },
  {
    name: 'Master Data',
    href: '/admin/menu/master_data',
    icon: FaCubes,
  },
  {
    name: 'WA Gateway',
    href: '/admin/menu/wa_gateway',
    icon: FaWhatsapp,
  },
  {
    name: 'Apotek Ralan',
    href: '/admin/menu/apotek_ralan',
    icon: FaShoppingCart,
  },
  {
    name: 'Dokter Ralan',
    href: '/admin/menu/dokter_ralan',
    icon: FaUserMd,
  },
  {
    name: 'IGD',
    href: '/admin/menu/igd',
    icon: FaAmbulance,
  },
  {
    name: 'Dokter IGD',
    href: '/admin/menu/dokter_igd',
    icon: FaUserMd,
  },
  {
    name: 'Laboratorium',
    href: '/admin/menu/laboratorium',
    icon: FaFlask,
  },
  {
    name: 'Radiologi',
    href: '/admin/menu/radiologi',
    icon: FaFilm,
  },
  {
    name: 'ICD 9 - 10 Request',
    href: '/admin/menu/icd_9_10_request',
    icon: FaDatabase,
  },
  {
    name: 'Rawat Inap',
    href: '/admin/menu/rawat_inap',
    icon: FaHotel,
  },
  {
    name: 'Apotek Ranap',
    href: '/admin/menu/apotek_ranap',
    icon: FaShoppingCart,
  },
  {
    name: 'Pendaftaran Pasien',
    href: '/admin/menu/pendaftaran_pasien',
    icon: FaUsers,
  },
  {
    name: 'Dokter Ranap',
    href: '/admin/menu/dokter_ranap',
    icon: FaUserMd,
  },
  {
    name: 'Kasri Rawat Inap',
    href: '/admin/menu/kasir_rawat_inap',
    icon: FaMoneyBill,
  },
  {
    name: 'Operasi',
    href: '/admin/menu/operasi',
    icon: FaBolt,
  },
  {
    name: 'Anjungan',
    href: '/admin/menu/anjungan',
    icon: FaDesktop,
  },
  {
    name: 'API',
    href: '/admin/menu/api',
    icon: FaDatabase,
  },
  {
    name: 'JKN Mobile',
    href: '/admin/menu/jkn_mobile',
    icon: FaTasks,
  },
  {
    name: 'VClaim Request',
    href: '/admin/menu/vclaim_request',
    icon: FaDatabase,
  },
  {
    name: 'Keuangan',
    href: '/admin/menu/keuangan',
    icon: FaMoneyBill,
  },
  {
    name: 'Manajamen',
    href: '/admin/menu/manajamen',
    icon: FaTachometerAlt,
  },
  {
    name: 'Presensi',
    href: '/admin/menu/presensi',
    icon: FaUserCircle,
  },
  {
    name: 'Rawat Jalan',
    href: '/admin/menu/rawat_jalan',
    icon: FaWheelchair,
  },
  {
    name: 'Vedika',
    href: '/admin/menu/vedika',
    icon: FaCode,
  },
  {
    name: 'Profile',
    href: '/admin/menu/profile',
    icon: FaAddressBook,
  },
  {
    name: 'Orthanc',
    href: '/admin/menu/orthanc',
    icon: FaBolt,
  },
  {
    name: 'Veronisa',
    href: '/admin/menu/veronisa',
    icon: FaMedkit,
  },
  {
    name: 'Kasir Rawat Jalan',
    href: '/admin/menu/kasir_rawat_jalan',
    icon: FaMoneyBill,
  },
  {
    name: 'Kepegawaian',
    href: '/admin/menu/kepegawaian',
    icon: FaUsers,
  },
  {
    name: 'Farmasi',
    href: '/admin/menu/farmasi',
    icon: FaMedkit,
  },
  {
    name: 'Modul-modul',
    href: '/admin/menu/modul_modul',
    icon: FaPlug,
  },
  {
    name: 'Pengguna',
    href: '/admin/menu/pengguna',
    icon: FaUser,
  },
  {
    name: 'Pengaturan',
    href: '/admin/menu/pengaturan',
    icon: FaWrench,
  },
];

export default cardMenu;
