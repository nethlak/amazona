import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { slug } = params; // retrieve the value of the slug parameter from the URL
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default ProductScreen;
