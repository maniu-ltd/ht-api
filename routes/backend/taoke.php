<?php

Route::namespace('Taoke')
    ->prefix('taoke')
    ->group(function () {
        //产品分类
        Route::resource('category', 'CategoriesController');

        //圈子
        Route::resource('quan', 'QuansController');

        //推广位
        Route::resource('pid', 'PidsController', [
            'except' => 'show',
        ]);

        //订单
        Route::resource('order', 'OrdersController', [
            'only' => ['index', 'show'],
        ]);

        //优惠卷
        Route::resource('coupon', 'CouponsController');
        //专题
        Route::resource('zhuanti', 'ZhuanTisController');
        //好货
        Route::resource('haohuo', 'HaohuosController',[
            'except'=> ['create','edit']
        ]);

        //精选单品
        Route::resource('jinxuandp', 'JingxuanDpsController',[
            'except'=> ['create','edit']
        ]);

        //快抢商品
        Route::resource('kuaiqiang', 'KuaiqiangController');
    });
