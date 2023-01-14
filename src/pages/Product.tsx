import { useParams } from "react-router-dom";

export default function Product() {
  const { item } = useParams();

  return (
    <h1>Product: {item}</h1>
  )
}