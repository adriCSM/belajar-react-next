export default function Button(props: any) {
  const { styleButton, styleIcon, handleClick, text, Icon, disable } = props;
  return (
    <button
      onClick={handleClick}
      className={`${styleButton} px-3 py-1 flex items-center justify-center  ring-1 ring-blue-500 rounded-full w-auto  `}
      disabled={disable}
    >
      {Icon && (
        <span className="me-2">
          <Icon className={`${styleIcon}`} />{' '}
        </span>
      )}{' '}
      {text && <span>{text}</span>}
    </button>
  );
}
