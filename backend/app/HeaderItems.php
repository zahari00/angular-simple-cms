<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HeaderItems extends Model
{
    protected $fillable = ['label', 'link', 'target'];
}
