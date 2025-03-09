import { useLocation } from "react-router-dom";

export const CardDetails: React.FC = () => {
  const location = useLocation();
  const product = location.state?.data;

  if (!product) {
    return (
      <h2>
        ❌ Дані не передані, спробуйте оновити сторінку або повернутися назад.
      </h2>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Ціна: ${product.price}</p>
      <p>Опис: {product.description}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};
