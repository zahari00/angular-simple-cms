<?php

namespace App\Http\Controllers\Api;

use App\Page;
use Illuminate\Http\Request;

class PageController extends ApiController
{
    protected $model = Page::class;

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // TODO: validation
        $page = Page::create($request->body);
        $page->blocks()->sync(json_decode($request->body['blocks']));

        return [
            'success'   => true,
            'data'      => $page->load('blocks')
        ];
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
        $page = Page::where('id', $id)->first();

        if (!isset($page) || !$page) {
            return [
                'success'   => false,
                'errors'    => ['Page not found']
            ];
        }

        $page->blocks()->sync(json_decode($request->body['blocks']));
        return [
            'success'   => true,
            'data'      => $page->load('blocks')
        ];
    }

    /**
     * Find page by slug.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function find($slug)
    {
        $page = Page::where('slug', $slug)->first();

        if(!isset($page) || !$page) {
            return [
                'success'   => false,
                'errors'    => ['Page not found']
            ];
        }
        
        return [
            'success'   => true,
            'data'      => $page
        ];
    }
}
