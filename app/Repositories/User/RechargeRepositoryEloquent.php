<?php

namespace App\Repositories\User;

use App\Models\User\Recharge;
use App\Criteria\RequestCriteria;
use App\Validators\User\RechargeValidator;
use Prettus\Repository\Eloquent\BaseRepository;
use App\Repositories\Interfaces\User\RechargeRepository;

/**
 * Class RechargeRepositoryEloquent.
 */
class RechargeRepositoryEloquent extends BaseRepository implements RechargeRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'out_trade_no' => 'like',
        'user_id',
        'user_id',
        'type',
        'status',
        'created_at',
    ];

    /**
     * Specify Model class name.
     *
     * @return string
     */
    public function model()
    {
        return Recharge::class;
    }

    /**
     * Specify Validator class name.
     *
     * @return mixed
     */
    public function validator()
    {
        return RechargeValidator::class;
    }

    /**
     * @throws \Prettus\Repository\Exceptions\RepositoryException
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    /**
     * @return string
     */
    public function presenter()
    {
        return 'Prettus\\Repository\\Presenter\\ModelFractalPresenter';
    }
}
