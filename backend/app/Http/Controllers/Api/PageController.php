<?php

namespace App\Http\Controllers\Api;

use App\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
        $slugTaken = Page::where('slug', $request->body['slug'])->first();

        if (isset($slugTaken)) return [
            'success'   => false,
            'errors'    => ["Slug already taken"]
        ];

        $data = $request->body;
        $data['blocks_order'] = json_encode($request->body['blocks']);
        $page = Page::create($data);
        $page->blocks()->sync($request->body['blocks']);

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

        $data = $request->body;
        $data['blocks_order'] = json_encode($request->body['blocks']);
        $page->update($data);
        $page->blocks()->sync($request->body['blocks']);

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

        if (!isset($page) || !$page) {
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $page = Page::where('id', $id)->first();
        if (!isset($page) ||  !$page) {
            return [
                'success'   => false,
                'errors'    => ['Not found']
            ];
        }

        $blocks = [];

        /**
         * Refactor later 
         */
        foreach (json_decode($page->blocks_order) as $block_id) {
            foreach ($page->blocks as $block) {
                if ($block->id == $block_id) {
                    $blocks[] =  $block;
                    break;
                }
            }
        }

        $response_data = $page->toArray();

        $response_data['blocks'] = $blocks;

        return [
            'success'   => true,
            'data'      => $response_data
        ];
    }
}
