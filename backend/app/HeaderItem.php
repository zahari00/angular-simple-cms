<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HeaderItem extends Model
{
    protected $fillable = ['page_id', 'order'];
    protected $with = ['page'];

    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}
