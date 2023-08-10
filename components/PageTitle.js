export default function PageTitle(props) {
  return (
    <div className="py-5 shadow-lg border-t">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-3xl md:text-3xl font-bold text-info-950">
          {props.title}
          <span className="text-secondary-950">.</span>
        </h1>
      </div>
    </div>
  );
}
