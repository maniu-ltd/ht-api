<?php

namespace App\Http\Controllers\Api\Taoke;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Taoke\OrderRepository;
use App\Repositories\Interfaces\User\WithdrawRepository;
use App\Repositories\Interfaces\User\CreditLogRepository;

/**
 * 报表
 * Class ChartsController.
 */
class ChartsController extends Controller
{
    /**
     * @var OrderRepository
     */
    protected $orderRepository;

    /**
     * @var CreditLogRepository
     */
    protected $withdrawRepository;

    /**
     * ChartsController constructor.
     * @param OrderRepository $orderRepository
     * @param WithdrawRepository $withdrawRepository
     */
    public function __construct(OrderRepository $orderRepository, WithdrawRepository $withdrawRepository)
    {
        $this->orderRepository = $orderRepository;
        $this->withdrawRepository = $withdrawRepository;
    }

    /**
     * 订单报表.
     * @return \Illuminate\Http\JsonResponse
     */
    public function order()
    {
        try {
            $data = $this->orderRepository->getOrderChart();

            return json(1001, '获取成功', $data);
        } catch (\Exception $e) {
            return json(5001, $e->getMessage());
        }
    }

    /**
     * 提现报表.
     * @return \Illuminate\Http\JsonResponse
     */
    public function withdraw()
    {
        try {
            $withdraw = $this->withdrawRepository->getWithdrawChart();

            return json(1001, '获取成功', $withdraw);
        } catch (\Exception $e) {
            return json(4001, $e->getMessage());
        }
    }
}
