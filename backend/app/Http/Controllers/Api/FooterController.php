<?php

namespace App\Http\Controllers\Api;

use App\Footer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FooterController extends Controller
{
    public function show() {
        $footer = Footer::where('id', 1)->first();

        return [
            'success' => true,
            'data'    => $footer
        ];
    }

    public function update(Request $request)
    {
        $footer = Footer::where('id', 1)->first();
        $footer->update($request->body);

        return [
            'success' => true
        ];
    }
}
