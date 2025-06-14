import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, totalQuantity } = useCart();

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const total = subtotal;

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-8">Meu carrinho</h1>

      {items.length === 0 ? (
        <p className="text-center py-20">Seu carrinho está vazio.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            {items.map((item) => (
              <div key={item.product.slug} className="flex gap-4 border rounded-xl p-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link
                      to={`/produto/${item.product.slug}`}
                      className="font-semibold hover:underline line-clamp-2"
                    >
                      {item.product.name}
                    </Link>
                    <p className="mt-2 text-[#d46d94] font-medium">
                      R$ {item.product.price.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border rounded-full px-3 py-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.slug, item.quantity - 1)
                        }
                        className="text-lg px-2 hover:text-[#d46d94]"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.slug, item.quantity + 1)
                        }
                        className="text-lg px-2 hover:text-[#d46d94]"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.slug)}
                      className="text-gray-500 hover:text-[#d46d94]"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/produtos"
              className="block text-sm text-[#d46d94] hover:underline"
            >
              Continuar comprando
            </Link>
          </div>

          <div className="w-full lg:w-[350px] border rounded-xl p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Frete</span>
                <span>Calculado no checkout</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-[#d46d94]">
                  R$ {total.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>

            <button className="w-full bg-[#d46d94] hover:bg-[#bb5f83] text-white py-3 rounded-full font-medium cursor-pointer">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
