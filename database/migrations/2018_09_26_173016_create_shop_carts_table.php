<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Migration auto-generated by Sequel Pro Laravel Export (1.4.1).
 * @see https://github.com/cviebrock/sequel-pro-laravel-export
 */
class CreateShopCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shop_carts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable();
            $table->integer('merch_id')->nullable();
            $table->integer('goods_id')->nullable();
            $table->integer('option_id')->nullable();
            $table->integer('total')->nullable();
            $table->decimal('price', 8, 2)->nullable();
            $table->decimal('old_price', 8, 2)->nullable();
            $table->nullableTimestamps();
            $table->softDeletes();

            $table->index('user_id', 'shop_carts_user_id_index');
            $table->index('merch_id', 'shop_carts_merch_id_index');
            $table->index('goods_id', 'shop_carts_goods_id_index');
            $table->index('option_id', 'shop_carts_option_id_index');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shop_carts');
    }
}
