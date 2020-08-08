interface IErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: IErrorMessageProps) {
  return (
    <aside>
      {message}
      <style jsx>{`
        aside {
          padding: 1.5em;
          font-size: 14px;
          color: white;
          background-color: red;
        }
      `}</style>
    </aside>
  );
}
