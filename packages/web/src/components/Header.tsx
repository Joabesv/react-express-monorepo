interface HeaderProps {
  message: string;
}

export function Header({ message }: HeaderProps) {
  return (
    <>
      <div className="header">
        {message}
      </div>
    </>
  )
}