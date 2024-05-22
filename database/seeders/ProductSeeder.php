<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()


    {
        $products = [
            [
                'id' => 55,
                'name' => 'pipa',
                'description' => 'Description of product 1',
                'image' => 'https://smokea.com/cdn/shop/products/smokea-9mm-standard-glass-replacement-slide-2-5-28328066744422_400x.jpg?v=1628431626',
                'price' => 1800,
                'stock' => 50,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 5,
                'name' => 'pipa2',
                'description' => 'Description of product 1',
                'image' => 'https://smokea.com/cdn/shop/products/ooze-14mm-quartz-banger-28037928386662_400x.jpg?v=1618514259',
                'price' => 1600,
                'stock' => 5,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 6,
                'name' => 'Comestible',
                'description' => 'Gomitas',
                'image' => 'https://smokea.com/cdn/shop/files/top-shelf-hemp-5000mg-delta-8-x-delta-9-incredible-edibles-berry-blast-29617126015078_400x.jpg?v=1684427443',
                'price' => 200,
                'stock' => 4,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 7,
                'name' => 'Comestible fresa',
                'description' => 'Gomitas de fresa',
                'image' => 'https://smokea.com/cdn/shop/files/top-shelf-hemp-5000mg-delta-8-x-delta-9-incredible-edibles-strawberry-burst-29617128931430_400x.jpg?v=1684428342',
                'price' => 200,
                'stock' => 4,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 8,
                'name' => 'Comestible uva',
                'description' => 'Gomitas de uva',
                'image' => 'https://smokea.com/cdn/shop/files/tre-house-delta-8-high-potency-gummies-blue-raspberry-29774044692582_400x.jpg?v=1699477782',
                'price' => 200,
                'stock' => 8,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 9,
                'name' => 'Bebida mango',
                'description' => 'Bebida de mando con thc',
                'image' => 'https://smokea.com/cdn/shop/files/delta-8-beverages-delta-8-seltzer-mango-29644512723046_400x.jpg?v=1688667345',
                'price' => 150,
                'stock' => 8,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 4,
                'name' => 'Comestible',
                'description' => 'XXXX',
                'image' => '',
                'price' => 10.99,
                'stock' => 50,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 2,
                'name' => 'sumplemento',
                'description' => 'Suplemento inyectable',
                'image' => 'https://static.wixstatic.com/media/03a140_bf98a95128924df3aa147f637e9668dc~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/03a140_bf98a95128924df3aa147f637e9668dc~mv2.jpg',
                'price' => 1200,
                'stock' => 5,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 10,
                'name' => 'sumplemento2',
                'description' => 'Suplemento inyectable',
                'image' => 'https://static.wixstatic.com/media/03a140_b2e1079fe4e243619443801edc819470~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/03a140_b2e1079fe4e243619443801edc819470~mv2.jpg',
                'price' => 900,
                'stock' => 5,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 11,
                'name' => 'sumplemento3',
                'description' => 'Suplemento inyectable',
                'image' => 'https://static.wixstatic.com/media/03a140_06ef9233cd584fada78e033665fd6452~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/03a140_06ef9233cd584fada78e033665fd6452~mv2.jpg',
                'price' => 1200,
                'stock' => 7,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 12,
                'name' => 'sumplemento4',
                'description' => 'Suplemento inyectable',
                'image' => 'https://static.wixstatic.com/media/03a140_783a2146ea954679a3c1884d13d7d09e~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/03a140_783a2146ea954679a3c1884d13d7d09e~mv2.jpg',
                'price' => 1200,
                'stock' => 7,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 13,
                'name' => 'razor',
                'description' => 'Suplemento inyectable',
                'image' => 'https://static.wixstatic.com/media/03a140_072c9719f2c2442abd2f9fb1d28a08d9~mv2.jpg/v1/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/03a140_072c9719f2c2442abd2f9fb1d28a08d9~mv2.jpg',
                'price' => 1200,
                'stock' => 7,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 14,
                'name' => 'nandroplex',
                'description' => 'Suplemento inyectable',
                'image' => 'https://static.wixstatic.com/media/03a140_282eee1446384577a8fe5fcb0af78b35~mv2.jpg/v1/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/03a140_282eee1446384577a8fe5fcb0af78b35~mv2.jpg',
                'price' => 1200,
                'stock' => 7,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 15,
                'name' => 'sumplemento4',
                'description' => 'Suplemento inyectable',
                'image' => 'https://static.wixstatic.com/media/03a140_783a2146ea954679a3c1884d13d7d09e~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/03a140_783a2146ea954679a3c1884d13d7d09e~mv2.jpg',
                'price' => 1200,
                'stock' => 7,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 16,
                'name' => 't xt400',
                'description' => 'Suplemento inyectable',
                'image' => 'https://static.wixstatic.com/media/03a140_bf98a95128924df3aa147f637e9668dc~mv2.jpg/v1/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/03a140_bf98a95128924df3aa147f637e9668dc~mv2.jpg',
                'price' => 1200,
                'stock' => 7,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 3,
                'name' => 'Magnesio',
                'description' => 'Description of product 1',
                'image' => 'https://gnc.com.mx/media/catalog/product/1/0/100109082_b.jpg?width=560&height=560&canvas=560,560&optimize=medium&bg-color=255,255,255&fit=bounds',
                'price' => 800,
                'stock' => 50,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 17,
                'name' => 'Creatina',
                'description' => 'Creationa monohidratada',
                'image' => 'https://supernaturista.com/cdn/shop/products/37355_debda388-6a28-4cd3-b5b6-93bb8858ae5c.jpg?v=1665227290&width=832',
                'price' => 800,
                'stock' => 50,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 18,
                'name' => 'Demograss plus',
                'description' => 'Suplemento alimenticio para la perdida de grasa',
                'image' => 'https://supernaturista.com/cdn/shop/products/18228_561ca56e-0f8d-49ea-8c6a-c2013135b0df.jpg?v=1645644937&width=832',
                'price' => 800,
                'stock' => 50,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 19,
                'name' => 'Galle de arroz y quinoa',
                'description' => '140 g de galle de arroz y quinoa para tus comidas',
                'image' => 'https://supernaturista.com/cdn/shop/products/47878_f4c7f4bf-ceaf-4de7-b8ee-8067c9661d08.jpg?v=1633716470&width=832',
                'price' => 100,
                'stock' => 50,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 20,
                'name' => 'Colageno',
                'description' => 'Capsulas de colageno hidrolizado',
                'image' => 'https://supernaturista.com/cdn/shop/products/66982.jpg?v=1613708727&width=832',
                'price' => 300,
                'stock' => 5,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 21,
                'name' => 'Curcuma',
                'description' => '60 Tabletas de curcuma',
                'image' => 'https://supernaturista.com/cdn/shop/products/20704A_801fa9d4-b09d-4951-814d-06705e15d9af.jpg?v=1663256812&width=832',
                'price' => 600,
                'stock' => 5,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 22,
                'name' => 'Clorofila',
                'description' => 'Description of product 1',
                'image' => 'https://supernaturista.com/cdn/shop/products/28670A_bb6ccd80-9d69-4e34-a485-a339338886c5.jpg?v=1633875815&width=832',
                'price' => 100,
                'stock' => 50,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 23,
                'name' => 'Maca organica',
                'description' => 'Description of product 1',
                'image' => 'https://supernaturista.com/cdn/shop/products/98277A_9476e6ca-62a4-4c2b-b261-98f3d407a51e.jpg?v=1665226115&width=832',
                'price' => 800,
                'stock' => 50,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],

           
            
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
