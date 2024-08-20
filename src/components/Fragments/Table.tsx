export default function Table({ ...props }) {
  return (
    <div className="max-w-prose">
      <table className="table-auto   hover:table-fixed divide-y-2 text-center text-sm text-nowrap">
        <thead>
          <tr>
            {props.headers.map((item: string, index: number) => {
              return (
                <th className="bg-lime-100 py-2" key={index}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y">
          {props.values.map((item: string, index: number) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-lime-50'}`}>
              {props.headers.map((header: string, i: number) => (
                <td key={i} className="p-3 ">
                  {props.values[i]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
