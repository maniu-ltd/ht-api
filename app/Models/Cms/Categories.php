<?php

namespace App\Models\Cms;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Categories.
 */
class Categories extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'cms_categories';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];


    /**
     * 字段映射.
     * @return array
     */
    public function transform()
    {
        return $this->toArray();
    }
}
