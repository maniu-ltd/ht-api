<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Migration auto-generated by Sequel Pro Laravel Export (1.4.1).
 * @see https://github.com/cviebrock/sequel-pro-laravel-export
 */
class CreateShopCategoryShopGoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shop_category_shop_goods', function (Blueprint $table) {
            $table->integer('goods_id')->nullable();
            $table->integer('category_id')->nullable();

            $table->index('goods_id');
            $table->index('category_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shop_category_shop_goods');
    }
}
