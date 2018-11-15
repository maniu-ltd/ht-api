<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\User\UserRepository;


/**
 * 会员管理
 * Class UserController.
 */
class UsersController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $repository;

    /**
     * UserController constructor.
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * 获取当前会员信息，包括用户等级等.
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $userId = getUserId ();
        $users = $this->repository
            ->with (['level', 'inviter', 'group'])
            ->find ($userId);

        return json (1001, '会员信息获取成功', $users);
    }

    /**
     * 好友列表  可根据inviter_id查看.
     * @return \Illuminate\Http\JsonResponse
     */
    public function friends()
    {
        try {
            return $this->repository->getFrineds ();
        } catch (\Exception $e) {
            return json (5001, $e->getMessage ());
        }
    }

    /**
     * 根据邀请码查看用户信息
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function inviter()
    {
        try {
            return json (1001, '邀请人获取成功', $this->repository->getInviter ());
        } catch (\Exception $e) {
            return json (5001, $e->getMessage ());
        }
    }
}