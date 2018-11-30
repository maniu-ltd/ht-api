<?php

Route::namespace('System')
    ->middleware('jwt.auth')
    ->prefix('system')
    ->group(function () {

        //通知
        Route::resource('notification', 'NotificationsController', [
            'except' => ['show', 'edit', 'update'],
        ]);
        //留言
        Route::resource('feedback', 'FeedbacksController', [
            'only' => ['index'],
        ]);
        //短信记录
        Route::resource('sms', 'SmsController', [
            'only' => ['index'],
        ]);

        //授权相关
        Route::get('auth', 'AuthorizationsController@index');

//        Route::get('authcode','AuthorizationsController@code');
    });

Route::namespace('System')
    ->prefix('system')
    ->group(function () {

        //设置增加 淘宝 京东 拼多多  授权信息
        //拼多多回调
        Route::get('pddcallback', 'AuthorizationsController@PDDCallback');
        //淘宝回调
        Route::get('tbcallback', 'AuthorizationsController@TBCallback');
        //京东回调
        Route::get('jdcallback', 'AuthorizationsController@JDCallback');
    });
