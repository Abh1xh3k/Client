import { Plus } from "lucide-react";
import React from "react";

function Card() {
  return (
    <div className="bg-white w-full sm:w-72 h-auto rounded-lg shadow-md p-3 transition-transform hover:scale-102">
      <div className="relative aspect-video">
        <img
          src="https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240924044922958784_482x264jpg"
          alt="random-image"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="px-4 py-3 text-black">
        <h2 className="font-bold text-lg sm:text-xl mb-2">CRISPY VEG MEAL (MED)</h2>
        <p className="text-sm text-gray-600 line-clamp-3 mb-3">
          Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Served
          with Crispy Fries & Coke. Qty: 209 Gms, 300 ML| Kcal: 693.3 | Carbs
          361.6 Gms| Sugar: 41.1 Gms| Fat: 21.7 Gms| Saturated fat: 9 Gms|
          Protein: 12 Gms| Sodium: 1148.6 Mg Contains: Gluten, Soybean , Milk ,
          Sesame seeds
        </p>
      </div>
      <div className="flex justify-between items-center px-4 pb-2">
        <div className="flex gap-3 items-center">
          <p className="text-lg font-bold text-gray-900">$175/-</p>
          <p className="line-through text-sm text-gray-500">$236/-</p>
        </div>

        <button className="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-4 py-2 rounded-lg transition-colors">
          Add
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default Card;
