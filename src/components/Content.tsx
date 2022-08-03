type Props = {title: string, text: string, children: React.ReactNode};
export default function Content({title, text, children}: Props) {
  return (
    <div className="p-4 relative">
      <h2 className="text-2xl mb-4 font-bold antialiased">{title}</h2>
      <p className="text-white/80">{text}</p>
     {children}
    </div>
  );
}
