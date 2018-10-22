<?php

namespace App\Http\Controllers\Backend\System;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Taoke\OauthRepository;
use App\Validators\System\FeedbackValidator;
use App\Repositories\Interfaces\System\FeedbackRepository;
use Ixudra\Curl\Facades\Curl;

/**
 * Class FeedbacksController.
 */
class AuthorizationsController extends Controller
{
    /**
     * @var
     */
    protected $repository;

    /**
     * AuthorizationsController constructor.
     * @param OauthRepository $repository
     */
    public function __construct(OauthRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //淘宝
        $tbbackurl = urlencode(env('APP_URL').'/api/admin/system/callback?type=1');

        $tburi = 'https://oauth.taobao.com/authorize?response_type=code&client_id=23205020&redirect_uri=https%3A%2F%2Fwww.heimataoke.com%2Fuser-authback%3Fbackurl%3D'.$tbbackurl.'%26bind%3DUW&state=1';
        //京东
        $jdbackurl = env('APP_URL').'/api/admin/system/callback?type=2';
        $jduri = 'https://oauth.jd.com/oauth/authorize?response_type=code&client_id=57116DD1E5EDBA11B73A251A0BEB739E&redirect_uri='.$jdbackurl;
        //多多客
        $ddkbackurl = env('APP_URL').'/api/admin/system/callback';
        $ddkuri = 'http://jinbao.pinduoduo.com/open.html?client_id=cdd7fdd7c6164e96b9525f8a9d2d7ddf&response_type=code&redirect_uri='.$ddkbackurl.'&state=3';
        return json(1001,'获取成功',[
            'tb_url' => $tburi,
            'jd_url' => $jduri,
            'ddkuri' => $ddkuri,
        ]);
    }

    public function callback()
    {
        $type = request('type', request('state'));

        $user = getUser();
        try {
            switch ($type) {
                case 1:
                    $create = [
                        'sid' => request('sid'),
                        'taoid' => request('tao_id'),
                        'name' => request('tao_name'),
                        'auth_time' => now()->timestamp(request('auth_time'))->toDateTimeString(),
                        'expire_time' => now()->timestamp(request('expire_time'))->toDateTimeString(),
                        'type' => 1,
                    ];
                    break;
                case 2:
                    $create = $this->getJDToken();
                    break;
                case 3:
                    $create = $this->getDDKToekn();
                    break;

                default:
                    break;
            }
            $create['user_id'] = $user->id;
            $where = [
                'user_id' => $user->id,
                'type' => $type,
            ];
            if ($type == 1) {
                $where['taoid'] = $create['taoid'];
            }

            $this->repository->updateOrCreate($where, $create);
        }catch (\Exception $e){
            return json(5001,$e->getMessage());

        }

    }

    /**
     * 京东授权
     * @return array
     * @throws \Exception
     */
    protected function getJDToken()
    {
        $resp = Curl::to('https://oauth.jd.com/oauth/token')
            ->withData([
                'grant_type' => 'authorization_code',
                'code' => request('code'),
                'redirect_uri' => 'http://htapi.cc/api/admin/system/callback?type=2',
                'client_id' => '57116DD1E5EDBA11B73A251A0BEB739E',
                'client_secret' => '8d05a49c2bad4c1fa62caa78c2647757',
            ])
            ->post();
        $resp = json_decode($resp);
        if (!$resp) {
            throw new \Exception('请重新授权');
        }
        return [
            'token' => $resp->access_token,
            'refresh_token' => $resp->refresh_token,
            'taoid' => $resp->uid,
            'name' => $resp->user_nick,
            'expire_time' => now()->addSeconds($resp->expires_in)->toDateTimeString(),
            'type' => 2,
        ];
    }

    /**
     * @return array
     * @throws \Exception
     */
    protected function getDDKToekn()
    {

        $resp = Curl::to('http://open-api.pinduoduo.com/oauth/token')
            ->withHeader('Content-Type: application/json')
            ->withData(json_encode([
                'grant_type' => 'authorization_code',
                'code' => request('code'),
                'client_id' => 'cdd7fdd7c6164e96b9525f8a9d2d7ddf',
                'client_secret' => '6896f97f33c5836f96bc663a708cf85cbde6ee86',
            ]))
            ->post();
        $resp = json_decode($resp);
        if (!$resp) {
            throw new \Exception('请重新授权');
        }
        return [
            'token' => $resp->access_token,
            'refresh_token' => $resp->refresh_token,
            'taoid' => $resp->owner_id,
            'name' => $resp->owner_name,
            'expire_time' => now()->addSeconds($resp->expires_in)->toDateTimeString(),
            'type' => 3,
        ];
    }
}