<?php

return [
    'taobao' => [
        'DTK_API_KEY' => env('DTK_API_KEY', 't2jlw4q2np'), //大淘客
        'DTK_API_URL' => env('DTK_API_URL', 'http://api.dataoke.com/index.php'), //大淘客接口地址
        'QTK_API_KEY' => env('QTK_API_KEY', 'NnLRzzZZ'), //轻淘客
        'QTK_API_URL' => env('QTK_API_URL', 'http://openapi.qingtaoke.com'), //轻淘客接口地址

        'TKJD_API_KEY' => env('TKJD_API_KEY', 'a702d09d248becb575dc798b6e432d88'), //淘客基地
        'TKJD_API_URL' => env('TKJD_API_URL', 'http://api.tkjidi.com'), //淘客基地接口地址

        'HMTK_APP_KEY' => env('HMTK_APP_KEY', '193298714'), //黑马淘客AppKey
        'HMTK_APP_SECRET' => env('HMTK_APP_SECRET', '33591f90704bcfc868871794c80ac185'), //黑马淘客appsecret

        'HDK_APIKEY' => env('HDK_APIKEY', 'poerjewnsjfhsd'), //好单库apikey


    ],

    'jingdong' => [
        'JD_APPID' => env('JD_APPID', '1805030919383801'),
        'JD_APPKEY' => env('JD_APPKEY', 'fac805ea86063176c9369905a8a6fe47'),
        'JD_LIST_APPURL' => env('JD_LIST_APPURL', 'http://japi.jingtuitui.com/api/get_goods_list'),

        'JDM_APP_KEY' => 'B9251FE6BA6189C4138006EDC5617BE9',
        'JDM_APP_SECRET' => '000ec965811641c080e596fab555a32d',

        'JDMEDIA_APPKEY' => '9357e9ece6b6476db183967e7ea5e892',
        'JDMEDIA_SECRETKEY' => '27ed5eb361184677b14e3075a01e1d88',
        'JDMEDIA_UNIONID' => '1000383879',
        'JD_HJK_APIKEY' => '8baf004e74c0b239',

        'access_token' => 'ae5971e5-50db-4699-9907-872b516d80fe',
        'refresh_token' => '57316424-4e6e-4bc2-95c0-1f1ff7c83b71',
    ],

    'pinduoduo' => [
        'PDD_CLIENT_ID' => env('PDD_CLIENT_ID', '74f24c204a994dabb89f6b94c08c48a3'),
        'PDD_CLIENT_SECRET' => env('PDD_CLIENT_SECRET', '92ff1f13aa9be0a166f9513ee25016d34e81fd29'),
    ],



];
