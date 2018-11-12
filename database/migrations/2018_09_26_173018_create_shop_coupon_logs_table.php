<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Migration auto-generated by Sequel Pro Laravel Export (1.4.1).
 * @see https://github.com/cviebrock/sequel-pro-laravel-export
 */
class CreateShopCouponLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shop_coupon_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable();
            $table->integer('merch_id')->nullable();
            $table->integer('coupon_id')->nullable();
            $table->string('ordersn', 191)->nullable();
            $table->string('name', 191)->nullable();
            $table->string('thumb', 191)->nullable();
            $table->tinyInteger('coupon_type')->nullable();
            $table->tinyInteger('discount_type')->nullable();
            $table->decimal('discount', 8, 2)->nullable();
            $table->decimal('deduct', 8, 2)->nullable();
            $table->tinyInteger('get_type')->nullable();
            $table->tinyInteger('status')->nullable()->default(0);
            $table->timestamp('get_time')->nullable();
            $table->timestamp('use_time')->nullable();
            $table->nullableTimestamps();

            $table->index('user_id', 'shop_coupon_logs_user_id_index');
            $table->index('merch_id', 'shop_coupon_logs_merch_id_index');
            $table->index('member_id', 'shop_coupon_logs_member_id_index');
            $table->index('coupon_id', 'shop_coupon_logs_coupon_id_index');
            $table->index('created_at', 'shop_coupon_logs_created_at_index');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shop_coupon_logs');
    }
}
