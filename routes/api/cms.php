<?php

Route::namespace('Cms')
    ->prefix('cms')
    ->group(function () {
        //会员信息
        Route::get('article', 'ArticlesController@index');
        Route::get('category', 'CategoresController@index');
        Route::get('project', 'ProjectsController@index');
    });
