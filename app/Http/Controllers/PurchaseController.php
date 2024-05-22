<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Purchase;
use App\Models\Product;


class PurchaseController extends Controller
{
    public function store(Request $request)
{
    // No es necesario obtener las compras del usuario aquí, a menos que las vayas a utilizar más adelante
    // $purchases = Purchase::with('product')->where('user_id', Auth::id())->get();

    $product = Product::findOrFail($request->input('product_id'));

    $purchase = new Purchase([
        'product_id' => $product->id,
        'quantity' => $request->input('quantity'),
        'price' => $product->price * $request->input('quantity'),
        'purchased_at' => now(),
    ]);

    $purchase->save();

    return response()->json([
        'message' => 'Purchase saved successfully!',
        'purchase' => $purchase,
    ]);
}


    public function index()
    {
        $purchases = Purchase::with('product')->where('user_id', Auth::id())->get();

        return response()->json([
            'purchases' => $purchases,
        ]);
    }

    public function destroy(Purchase $purchase)
    {
        $purchase->delete();

        return response()->json([
            'message' => 'Purchase deleted successfully!',
        ]);
    }
}