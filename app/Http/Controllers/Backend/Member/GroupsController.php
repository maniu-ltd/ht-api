<?php

namespace App\Http\Controllers\Backend\Member;

use App\Http\Controllers\Controller;
use App\Validators\Member\GroupValidator;
use App\Http\Requests\Member\GroupUpdateRequest;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Repositories\Interfaces\Member\GroupRepository;

/**
 * Class GroupsController.
 */
class GroupsController extends Controller
{
    /**
     * @var GroupRepository
     */
    protected $repository;

    /**
     * @var GroupValidator
     */
    protected $validator;

    /**
     * GroupsController constructor.
     *
     * @param GroupRepository $repository
     * @param GroupValidator $validator
     */
    public function __construct(GroupRepository $repository, GroupValidator $validator)
    {
        $this->repository = $repository;
        $this->validator = $validator;
    }

    /**
     *  小组列表.
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $groups = $this->repository
            ->with(['member'])
            ->paginate(request('limit', 10));

        return json(1001, '列表获取成功', $groups);
    }

    /**
     * 编辑小组.
     * @param GroupUpdateRequest $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(GroupUpdateRequest $request, $id)
    {
        try {
            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $group = $this->repository->update($request->all(), $id);

            return json(1001, '更新成功', $group);
        } catch (ValidatorException $e) {
            return json(5001, $e->getMessageBag());
        }
    }

    /**
     * 删除小组.
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $member = db('members')
            ->where('group_id', $id)
            ->orWhere('oldgroup_id', $id)
            ->first();
        if ($member) {
            return json(4001, '禁止删除已包含会员的小组');
        }
        //删除小组
        $this->repository->delete($id);

        return json(1001, '删除成功');
    }
}
