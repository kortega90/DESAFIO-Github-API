type Props = {
    title: String;
  }
  
  export default function NotFound({ title }: Props) {
    return (
      <h2>{title}</h2>
    );
  
  }