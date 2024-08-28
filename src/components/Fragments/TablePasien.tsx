import Link from 'next/link';
export default function Table({ ...props }) {
  return (
    <div>
      <table className="table-auto mx-auto  hover:table-fixed divide-y-2 text-center text-xs md:text-sm lg:text-md text-nowrap">
        <thead className="sticky top-0 ">
          <tr className="odd:bg-white even:bg-slate-50">
            {props.headers.map((item: string, index: number) => {
              return (
                <th className="bg-lime-100 p-2" key={index}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y ">
          {props.values.map((item: string, index: number) => (
            <tr key={index} className={`odd:bg-white even:bg-lime-50`}>
              {props.headers.map((header: string, i: number) => (
                <td key={i} className="p-3 ">
                  {header == 'Nama Pasien' && (
                    <Link href={`/admin/pasien/${index} `} className="text-lime-500" key={index}>
                      {props.values[i]}
                    </Link>
                  )}
                  {header != 'Nama Pasien' && props.values[i]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
