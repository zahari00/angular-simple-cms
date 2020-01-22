<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $with = ['blocks'];
    protected $fillable = ['title', 'slug'];


    public function blocks() {
    return $this->belongsToMany(Block::class, 'page_blocks');
    }
}
