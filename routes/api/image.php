<?php
    //店招列表
    Route::namespace('Image')
        ->prefix('image')
        ->group(function () {
            //图标列表
            Route::get('banner', 'BannersController@index');
        });
