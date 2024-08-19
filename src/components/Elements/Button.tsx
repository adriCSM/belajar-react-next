export default function Button(props: any) {
  const { styleButton, handleClick, text, Icon } = props;
  return (
    <button
      onClick={handleClick}
      className={`px-3 py-1 flex items-center justify-between ${styleButton} ring-1 ring-blue-500 rounded-full  `}
    >
      {Icon && <Icon />} {text}
    </button>
  );
}
