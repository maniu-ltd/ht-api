<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Migration auto-generated by Sequel Pro Laravel Export (1.4.1).
 * @see https://github.com/cviebrock/sequel-pro-laravel-export
 */
class CreateUserWithdrawsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_withdraws', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable();
            $table->decimal('money', 8, 2)->nullable()->default(0.00); //提现金额
            $table->decimal('real_money', 8, 2)->nullable()->default(0.00);  //实际到账金额
            $table->decimal('deduct_money', 8, 2)->nullable()->default(0.00);  //扣除金额
            $table->string('realname', 191)->nullable(); //从member表读取
            $table->string('alipay', 191)->nullable(); //从member表读取
            $table->text('reason')->nullable(); //原因
            $table->tinyInteger('status')->nullable();
            $table->tinyInteger('pay_type')->nullable(); // 1支付宝 2其他
            $table->nullableTimestamps();

            $table->index('user_id', 'member_withdraws_user_id_index');
            $table->index('status', 'member_withdraws_status_index');
            $table->index('created_at', 'member_withdraws_created_at_index');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('member_withdraws');
    }
}