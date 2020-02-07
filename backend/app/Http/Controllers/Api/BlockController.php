<?php

namespace App\Http\Controllers\Api;

use App\Block;
use Illuminate\Http\Request;

class BlockController extends ApiController
{
    protected $model = Block::class;

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // TODO image uploader and validation
        $block = Block::create($request->body);
        return  response([
            'success'   => true,
            'data'      => $block
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $block = Block::where('id', $id)->first();
        if (!isset($block) || !$block) {
            return response([
                'success'   => false,
                'errors'    => ['Block not found']
            ], 404);
        }

        $block->update($request->body);
        return  response([
            'success'   => true,
            'data'      => $block
        ]);
    }
}
