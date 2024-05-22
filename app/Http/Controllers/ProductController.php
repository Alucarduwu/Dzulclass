<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
{
    // Crea una nueva instancia de Producto
    $product = new Product();
    $product->name = $request->name;
    $product->description = $request->description;
    $product->image = $request->image;
    $product->price = $request->price;
    $product->stock = $request->stock;
    $product->tipo = $request->tipo;

    // Encuentra la categoría según el ID proporcionado en la solicitud
    $category = Category::find($request->input('category_id'));

    // Asocia la categoría con el producto
    $product->category()->associate($category);

    // Guarda el producto
    $product->save();

    // Devuelve el producto guardado
    return response()->json($product, 201);
}

    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return $product;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $product = Product::find($id);
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->image = $request->input('image');
        $product->price = $request->input('price');
        $product->stock = $request->input('stock');
        $product->tipo = $request->input('tipo');
        $product->save();
        return Product::all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        // Buscar y eliminar el producto por su ID
        $product = Product::find($id);
    
        // Verificar si el producto existe
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    
        // Eliminar el producto
        $product->delete();
    
        // Devolver una respuesta exitosa
        return response()->json(['message' => 'Product deleted successfully'], 200);
    }

    public function showCategory(Request $request, $id)
    {
        $product = Product::where('category_id', $request->id)->get();
        return $product;
    }

    public function serch(Request $request)
    {
        $query = $request->input('query');
        $product = Product::where('name', 'like', "%$query%")->get();
        return $product;
    }



}