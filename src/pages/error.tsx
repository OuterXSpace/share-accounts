const Error: React.FC<{
  error: Error;
}> = (props) => {
  const { error } = props;
  return <div className="text-warning">{error?.message}</div>;
};

export default Error;
