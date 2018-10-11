<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Migration auto-generated by Sequel Pro Laravel Export (1.4.1).
 * @see https://github.com/cviebrock/sequel-pro-laravel-export
 */
class CreateGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable();
            $table->integer('member_id')->nullable();
            $table->integer('pid')->nullable();
            $table->string('qrcode', 191)->nullable(); //组长微信二维码
            $table->string('qq')->nullable();//组长QQ
            $table->string('wechat')->nullable();//组长微信
            $table->string('name', 50)->nullable(); //小组名
            $table->string('logo', 191)->nullable(); //小组图标
            $table->text('description')->nullable(); //小组描述
            $table->tinyInteger('status')->nullable()->default(1); //小组状态 1正常 0禁用
            $table->tinyInteger('default')->nullable()->default(0);  //是否为默认小组
            $table->nullableTimestamps();

            $table->index('user_id');
            $table->index('member_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('groups');
    }
}
